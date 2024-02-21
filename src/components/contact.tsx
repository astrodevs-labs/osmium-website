'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IconContext } from 'react-icons'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { toast } from 'sonner'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  message: z.string().min(20).max(2000),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)

      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      })

      if (response.ok) {
        setIsSubmitting(false)
        toast.success('Request send. See you soon ;)')
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      toast.error('Error sending the request.')
      console.error('error :', error)
    }
  }

  return (
    <section className="mt-20 flex flex-col items-center" id="contact">
      <p className="text-3xl">Contact</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[500px] space-y-8"
        >
          <div className="flex justify-between">
            <div className="flex w-full flex-col">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row-reverse">
            <Button type="submit">
              {isSubmitting ? (
                <IconContext.Provider
                  value={{ className: 'animate-spin mr-2' }}
                >
                  <AiOutlineLoading3Quarters />
                </IconContext.Provider>
              ) : null}
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
