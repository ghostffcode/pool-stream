import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import classNames from "classnames"
import { useState } from 'react'
import { useContracts } from "@/hooks"
import { parseEther } from "viem"
import hive from '@/contracts/ABI/HiveImplementation.json'

const formSchema = z.object({
  address: z.string().min(5),
  amount: z.string().min(1),
})

const AddWorker = ({ streamId }: { streamId: `0x${string}` }) => {
  const [addingBee, setAddingBee] = useState<boolean>(false)
  const { write: writeHiveContract, contracts } = useContracts({ address: streamId, abi: hive })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      amount: ""
    },
  })

  const addBee = async (data: z.infer<typeof formSchema>) => {
    const rate = parseEther(data.amount as `${number}`) / BigInt('2678400')

    // console.log(hive)
    await writeHiveContract({ functionName: "createStream", args: [data.address, rate] })
  }

  return (<>
    <div className='flex flex-1 w-full space-x-2'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addBee)} className="w-full space-x-2 flex flex-1 flex-row">
          <div className='flex flex-1'>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input type="text" placeholder='Address' className="w-full"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='w-36'>
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" placeholder='Amount' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button className={classNames({
              "opacity-25": addingBee
            })} disabled={addingBee} type="submit">Add Worker</Button>
          </div>
        </form>
      </Form>
    </div>
  </>)
}

export default AddWorker