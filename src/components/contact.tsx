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
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IconContext } from 'react-icons'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { toast } from 'sonner'
import * as z from 'zod'
import ContactIllustration from '../../public/contact_us.svg'
import { ReCaptcha } from './ReCaptcha'

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  message: z.string().min(20).max(2000),
  token: z.string(),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      token: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      console.log('token = ' + values.token)
      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          token: values.token,
        }),
      })
      setIsSubmitting(false)

      if (response.ok) {
        toast.success('Request send. See you soon ;)')
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      toast.error('Error sending the request.')
      console.error('error :', error)
      setIsSubmitting(false)
    }
  }

  return (
    <section className="my-52 flex w-full flex-col items-center" id="contact">
      <ReCaptcha
        onVerifyCaptcha={(token: any) => {
          form.setValue('token', token)
          console.log('token = ' + token)
        }}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex w-full flex-col justify-between lg:flex-row lg:space-x-20">
            <div>
              <p className="text-3xl">Contact</p>

              <Image
                src={ContactIllustration}
                width={400}
                height={400}
                alt="illustration contact form"
                className="hidden lg:block"
              />
            </div>
            <div className="flex w-72 flex-col sm:w-[500px] ">
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
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-row-reverse">
            <Button type="submit" disabled={isSubmitting}>
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
