import { Card, CardContent, CardHeader } from '@/ui/card'
import Image from 'next/image'
import logo from 'public/icon-transparent.webp'
import interact from 'public/interact.webp'

export default function About() {
  return (
    <section className="mt-40 space-y-52 py-24" id="about">
      <div className="flex justify-center lg:space-x-6">
        <Image
          src={logo}
          alt="osmium logo"
          className="hidden rounded-lg lg:block lg:h-96 lg:w-96"
          priority
        />
        <Card>
          <CardHeader className="text-3xl font-bold">
            Current problem in smart contract developpement
          </CardHeader>
          <CardContent className="w-full text-xl lg:w-[400px] xl:w-full">
            <p className="break-words">
              This project originated from a straightforward realization: the
              development of a smart contract demands the utilization of
              numerous tools. It entails employing a text editor for code
              writing, a separate tool for debugging (to monitor code
              execution), another for testing, and establishing a node for
              deployment. Such tool-switching represents a considerable time
              drain for developers.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center space-x-6">
        <Card>
          <CardHeader className="text-pretty text-3xl font-bold">
            What is Osmium and how does it solve the problem ?
          </CardHeader>
          <CardContent className="w-full text-xl lg:w-[400px] xl:w-full">
            <p className="break-words">
              The answer lies in a comprehensive VS Code extension designed to
              streamline smart contract development. Offering a suite of
              essential tools including linting, formatting, compiling,
              debugging, deploying, and contract interaction, all seamlessly
              integrated within a refined user interface.
            </p>
          </CardContent>
        </Card>
        <Image
          src={interact}
          alt="screen of interact"
          className="hidden rounded-lg lg:block lg:h-96 lg:w-96"
        />
      </div>
    </section>
  )
}
