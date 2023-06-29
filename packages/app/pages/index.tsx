import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from '@/components/ui/button';
import { useContracts, useIPFS } from '@/hooks';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import classNames from 'classnames'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { Blob, File } from 'nft.storage';
import { useState } from 'react';
import { publicClient } from '@/utils/wagmi';
import Nav from '@/components/nav';

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Stream name is required for easy recognition"
  }),
  description: z.string().min(200, {
    message: "Description must be at least twittable.",
  }),
})

const Home: NextPage = () => {
  const [creatingHive, setCreatingHive] = useState<boolean>(false)
  const { write: writeHiveFactory, contracts } = useContracts({ contractName: 'HiveFactory' })
  const { client } = useIPFS()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: ""
    },
  })

  const deployHive = async (data: z.infer<typeof formSchema>) => {
    setCreatingHive(true)

    try {
      // add name & description to IPFS
      const metadataBlob = new Blob([JSON.stringify(data)])
      const metadataPtr = await client.storeBlob(metadataBlob)

      await writeHiveFactory({ functionName: "createHive", args: [metadataPtr] })

      form.reset()
    } catch (error) {
      console.log(`An error occurred`)
    }

    setCreatingHive(false)
  }

  return (
    <>
      <div className="w-96 mx-auto mt-20 p-3">
        <h1 className='text-center text-lg font-semibold'>Create a New Stream Pool</h1>
        <div className='flex flex-1 flex-col mt-12'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(deployHive)} className="w-full space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pool Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="E.g. The 0x stream"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      You can <span>@mention</span> other users and organizations.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about this new stream"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      You can <span>@mention</span> other users and organizations.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='text-center w-full'>
                <Button className={classNames({
                  "opacity-25": creatingHive
                })} disabled={creatingHive} type="submit">Deploy Pool Stream</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Home
