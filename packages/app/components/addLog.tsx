import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Blob } from "nft.storage"
import { useForm } from "react-hook-form"
import classNames from "classnames"
import { useState } from 'react'
import { useContracts, useIPFS } from "@/hooks"
import { parseEther } from "viem"
import hive from '@/contracts/ABI/HiveImplementation.json'
import { useAccount } from "wagmi"
import { Textarea } from "@/components/ui/textarea"
import { DialogFooter } from "./ui/dialog"

const formSchema = z.object({
  reason: z.string().min(20),
  amount: z.string().min(1),
})

const AddLog = ({ streamId }: { streamId: `0x${string}` }) => {
  const { address } = useAccount()
  const [addingLog, setAddingLog] = useState<boolean>(false)
  const { client } = useIPFS()
  const { write: writeHiveContract, contracts } = useContracts({ address: streamId, abi: hive })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason: "",
      amount: ""
    },
  })

  const addBee = async (data: z.infer<typeof formSchema>) => {
    // add reason to IPFS
    const metadataBlob = new Blob([data.reason])
    const reasonPtr = await client.storeBlob(metadataBlob)

    // console.log(hive)
    await writeHiveContract({ functionName: "withdrawFromStream", args: [parseEther(data.amount as `${number}`), address, reasonPtr] })
  }

  return (<>
    <div className='flex flex-1 w-full space-x-2'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addBee)} className="w-full space-y-2">
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Log Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add log details. Eg. I worked on..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g. 0.1"
                    type="number"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <div className="flex flex-1 flex-col items-end mt-2">
              <Button className={classNames({
                "opacity-25": addingLog
              })} disabled={addingLog} type="submit">Post Work Log</Button>
            </div>
          </DialogFooter>
        </form>
      </Form>
    </div>
  </>)
}

export default AddLog