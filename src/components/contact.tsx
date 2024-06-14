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
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import Spline from '@splinetool/react-spline'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
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
  const [token, setToken] = useState<string | null>(null)

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
      if (!token) {
        toast.error('Please verify you are not a robot.')
        return
      }
      setIsSubmitting(true)
      const params = {
        name: values.name,
        email: values.email,
        message: values.message,
        'g-recaptcha-response': token,
      }
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          params,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_API_KEY!,
          },
        )
        .then(
          () => {
            toast.success('Request send. See you soon ;)')
            setIsSubmitting(false)
          },
          (error) => {
            setIsSubmitting(false)
            console.log('FAILED...', error.text)
            throw new Error(error.text)
          },
        )
    } catch (error) {
      toast.error('Error sending the request.')
      console.error('error :', error)
      setIsSubmitting(false)
    }
  }

  return (
    <section
      className="my-52 flex w-full flex-col items-center py-24"
      id="contact"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex w-full flex-col justify-between lg:flex-row lg:space-x-20">
            <div className="h-96 w-full">
              <p className="text-3xl">Contact</p>
              <Spline scene="https://prod.spline.design/0B-aJiERRH1RmJrI/scene.splinecode" />
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
              <div className="mt-10 flex justify-end">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
                  onChange={(token) => setToken(token)}
                />
              </div>
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
