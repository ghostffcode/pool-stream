import { useGetHiveQuery, GetHiveQueryResult } from '@/gql/types.generated';
import { useIPFS } from '@/hooks';
import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { formatEther } from 'viem';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddWorker from '@/components/addWorker';
import AddLog from '@/components/addLog';
import { Button } from '@/components/ui/button';
import AddAdmin from '@/components/addAdmin';
import { Badge } from '@/components/ui/badge';

interface HiveData extends GetHiveQueryResult {
  metadata: {
    name: string
    description: string
  },
  worksMeta: {
    id: string
    amount: number
    createdAt: number
    reasonPtr: string
    reason: string
    by: string
  }[]
}

const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-6)}`
}

const Stream: NextPage = () => {
  const router = useRouter()
  const { streamId } = router.query
  const [loading, setLoading] = useState<boolean>(true)
  const [hive, setHive] = useState<HiveData>()
  const { fetch: { getJSON, getString } } = useIPFS()
  const { refetch } = useGetHiveQuery({
    variables: {
      address: (streamId as string || "").toLowerCase()
    },
    onCompleted: async function (data) {
      const metadata = await getJSON(data.hive?.description || "")
      const worksMeta = await Promise.all((data.hive?.works || []).map(async (i) => {
        const { createdAt, amount, reasonPtr, id } = i
        const reason = await getString(reasonPtr)

        return { id, amount, createdAt, reasonPtr, reason, by: i.hiveBee.address.id }
      }))

      setHive({ ...data, metadata, worksMeta })
      setLoading(false)
    },
  })

  return (<div className='mt-20'>
    <h1 className='text-2xl font-semibold mb-4'>{hive?.metadata.name}</h1>
    <div className='flex flex-1 w-full'>
      <div className="w-full flex flex-1 flex-col space-y-4">
        <div>{hive?.metadata.description}</div>
        <div className='space-y-2 mt-6 mr-6'>
          <h2 className='mb-2 text-lg font-semibold'>
            Admins
          </h2>
          <AddAdmin streamId={streamId as `0x${string}`} />
          <div className='space-y-2 mt-2'>
            {hive?.hive?.queens?.map((i) => <Badge variant="secondary" key={i.address.id} className="mr-3">{formatAddress(i.address.id)}</Badge>)}
          </div>
        </div>
        <div className='space-y-2 mt-6 mr-6'>
          <h2 className='mb-2 text-lg font-semibold'>Worker Bees</h2>

          <AddWorker streamId={streamId as `0x${string}`} />

          <div className='space-y-2 mt-2'>
            {hive?.hive?.bees?.map((i) => <div key={i.id} className='flex flex-1 justify-between'>
              <span>{formatAddress(i.address.id)}</span>
              <span>{Math.round(Number(formatEther(BigInt(i.rate) * BigInt('2678400'))) * 1000) / 1000} Ξ monthly</span>
            </div>)}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-1 flex-col space-y-2 pl-6">
        <div className='flex w-full flex-row justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Add a log</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Log and withdraw from stream</DialogTitle>
                <DialogDescription>
                  Add a description for the work done and amount task completed is worth.
                </DialogDescription>
              </DialogHeader>
              <AddLog streamId={streamId as `0x${string}`} />
            </DialogContent>
          </Dialog>
        </div>

        <div>{hive?.worksMeta.map((i) => <div key={i.id}>
          <h3>{formatAddress(i.by)} logged for ({formatEther(BigInt(i.amount))} Ξ):</h3>
          <div className='mt-2'>{i.reason}</div>
        </div>)}</div>
      </div>
    </div>
  </div>)
}

export default Stream