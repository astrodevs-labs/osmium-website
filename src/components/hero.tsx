'use client'

import Spline from '@splinetool/react-spline'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

export default function Hero() {
  const github = 'https://github.com/astrodevs-labs/osmium'
  const marketplace =
    'https://marketplace.visualstudio.com/items?itemName=OsmiumToolchains.osmium-solidity-extension'
  return (
    <section
      className="flex flex-col items-center justify-center space-y-8 py-24"
      id="home"
    >
      <div className="relative flex h-[40rem] w-full flex-col justify-center overflow-hidden rounded-md bg-black">
        <p className="z-10 text-5xl font-bold text-osmium sm:text-8xl">
          Osmium
        </p>
        <p className="z-10 text-3xl sm:px-4 sm:text-5xl">
          <strong>Develop</strong>, <strong>Build</strong> and
          <br />
          <strong>Deploy</strong> smart contracts easily
        </p>
        <div className="z-10 mt-10 flex ">
          <Link
            href="#about"
            className={buttonVariants({ variant: 'default' })}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute w-full">
        <Spline scene="https://prod.spline.design/Eple7IzUjPkdEktc/scene.splinecode" />
      </div>
    </section>
  )
}
