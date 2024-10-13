import { buttonVariants } from '@/ui/button'
import Link from 'next/link'
import RibbonEffect from './ribbonEffect'

export default function Hero() {
  return (
    <section
      className="my-16 flex flex-col items-center justify-center space-y-8 px-4 lg:px-16 2xl:px-32"
      id="home"
    >
      <div className="relative m-44 flex h-fit w-full flex-col justify-center overflow-hidden rounded-md bg-black">
        <p className="z-10 text-5xl font-bold text-osmium sm:text-8xl">
          Osmium
        </p>
        <p className="z-10 text-3xl font-medium sm:text-5xl">
          <strong>Develop</strong>, <strong>Build</strong> and
          <br />
          <strong>Deploy</strong> smart contracts easily
        </p>
        <div className="z-10 mt-2 flex md:mt-10">
          <Link
            href="#about"
            className={buttonVariants({ variant: 'default' })}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute w-full bg-background">
        <RibbonEffect />
      </div>
    </section>
  )
}
