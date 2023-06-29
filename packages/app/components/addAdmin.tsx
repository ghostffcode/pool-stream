import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import classNames from "classnames"
import { useState } from 'react'
import { useContracts } from "@/hooks"
import hive from '@/contracts/ABI/HiveImplementation.json'

const formSchema = z.object({
  address: z.string().min(5)
})

const AddAdmin = ({ streamId }: { streamId: `0x${string}` }) => {
  const [addingAdmin, setAddingAdmin] = useState<boolean>(false)
  const { write: writeHiveContract } = useContracts({ address: streamId, abi: hive })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: ""
    },
  })

  const addAdmin = async (data: z.infer<typeof formSchema>) => {
    setAddingAdmin(true)
    await writeHiveContract({ functionName: "addQueenBee", args: [data.address] })
    setAddingAdmin(false)
  }

  return (<>
    <div className='flex flex-1 w-full space-x-2'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addAdmin)} className="w-full space-x-2 flex flex-1 flex-row">
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
          <div>
            <Button className={classNames({
              "opacity-25": addingAdmin
            })} disabled={addingAdmin} type="submit">Add Admin</Button>
          </div>
        </form>
      </Form>
    </div>
  </>)
}

export default AddAdmin