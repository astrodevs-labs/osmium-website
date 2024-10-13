'use client'

import { Button } from '@/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/form'
import { Input } from '@/ui/input'
import { Textarea } from '@/ui/textarea'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { IconContext } from 'react-icons'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { toast } from 'sonner'
import * as z from 'zod'

const features = [
  'Develop your ecosystem',
  'Improve Developper Experience',
  'Enhance your development processes',
  'Access cutting-edge technology solutions',
]

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  message: z.string().min(20).max(2000),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const { theme } = useTheme()

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
      className="m-4 flex flex-col items-center justify-center sm:h-screen"
      id="contact"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex w-full flex-col justify-between md:flex-row md:space-x-20">
            <div className="w-full ">
              <div className="mt-4 text-lg text-foreground">
                <Card className="">
                  <CardHeader className="text-center">
                    <CardTitle className="mb-4 text-2xl font-semibold">
                      Maybe You...
                    </CardTitle>
                    <CardDescription className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                      Relevant for Start up & tech companies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {features.map((feature) => (
                      <ul
                        role="list"
                        className="mb-8 space-y-4 text-left"
                        key={feature}
                      >
                        <li className="flex items-center space-x-3">
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      </ul>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex flex-col sm:mt-0 ">
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
                    <FormLabel>Email</FormLabel>
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
                  theme={theme === 'dark' ? 'dark' : 'light'}
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
