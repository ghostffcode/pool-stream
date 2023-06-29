import { useState } from 'react';
import { useMyPoolsQuery } from '@/gql/types.generated';
import { useIPFS } from '@/hooks';
import type { NextPage } from 'next';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface Hive {
  name: string
  description: string
  metaPtr: string
  address: `0x${string}`
}

const MyStreams: NextPage = () => {
  const { address } = useAccount()
  const [loading, setLoading] = useState<boolean>(true)
  const [myHives, setMyHives] = useState<Hive[]>([])
  const { fetch: { getJSON } } = useIPFS()
  useMyPoolsQuery({
    variables: {
      address: (address ?? "").toLowerCase()
    },
    onCompleted: async function (data) {
      try {
        const hives = await Promise.all(Array.from(new Set([...data.bee?.isQueenHives || [], ...data.bee?.hives || []])).map(async (hive) => {
          const streamMeta = await getJSON(hive.hive.description)

          return { ...streamMeta, address: hive.hive.id, metaPtr: hive.hive.description }
        }))

        setMyHives(hives)
      } catch (error) {
        console.log(`Error loading streams`)
      }
      setLoading(false)
    },
  })

  return (<div className="w-96 mx-auto mt-20 p-3">
    <h1 className='text-center text-lg font-semibold mb-8'>My Streams</h1>

    {/* <div className='grid grid-flow-row-dense grid-cols-3'> */}
    <div className='flex flex-1 flex-col'>
      {myHives.map((hive) => <div key={hive.address} className='w-full mb-2'>
        <Link href={`/stream/${hive.address}`}>
          <Card>
            <CardHeader>
              <CardTitle>{hive.name}</CardTitle>
              <CardDescription className='line-clamp-3'>{hive.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>)}
    </div>
    {/* <div className='col-span-2'>Preview</div>
    </div> */}
  </div>)
}

export default MyStreams