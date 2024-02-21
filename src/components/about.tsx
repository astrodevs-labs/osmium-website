import Image from 'next/image'
import { Card, CardContent, CardHeader } from './ui/card'

export default function About() {
  return (
    <section className="mt-20 space-y-52">
      <div className="flex justify-center">
        <Image
          src="/icon-transparent.png"
          alt="osmium logo"
          width={300}
          height={300}
        />
        <Card>
          <CardHeader>
            Current problem in smart contract developpement
          </CardHeader>
          <CardContent className="w-[700px]">
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
      <div className="flex justify-center">
        <Card>
          <CardHeader>
            What is Osmium and how does it solve the problem ?
          </CardHeader>
          <CardContent className="w-[700px]">
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
          src="/icon-transparent.png"
          alt="osmium logo"
          width={300}
          height={300}
        />
      </div>
    </section>
  )
}
