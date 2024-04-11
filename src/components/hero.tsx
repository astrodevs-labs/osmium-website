'use client'

import { FaGithub } from 'react-icons/fa'
import { Button } from './ui/button'
import { SparklesCore } from './ui/sparkles'

export default function Hero() {
  const github = 'https://github.com/astrodevs-labs/osmium'
  const marketplace =
    'https://marketplace.visualstudio.com/items?itemName=OsmiumToolchains.osmium-solidity-extension'
  return (
    <section
      className="flex flex-col items-center justify-center space-y-8 py-24"
      id="home"
    >
      <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
        <p className="z-10 text-5xl font-bold text-osmium sm:text-8xl">
          Osmium
        </p>
        <p className="z-10 text-center text-3xl sm:px-4 sm:text-5xl">
          <strong>Develop</strong>, <strong>Build</strong> and{' '}
          <strong>Deploy</strong> smart contracts easily{' '}
        </p>
        <div className="z-10 mt-10 flex">
          <Button
            className="mr-2 border-4 border-solid border-osmium bg-osmium text-lg hover:bg-background hover:text-osmium"
            size="lg"
          >
            <a href={marketplace} target="_blank">
              View marketplace
            </a>
          </Button>
          <Button className="text-lg" size="lg">
            <a href={github} target="_blank" className="flex items-center">
              <FaGithub className="mr-2" />
              Github
            </a>
          </Button>
        </div>
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            className="h-full w-full bg-background"
            particleDensity={30}
            particleColor="#3C9DA1"
            minSize={2}
          />
        </div>
      </div>
    </section>
  )
}
