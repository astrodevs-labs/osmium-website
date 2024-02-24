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
      className="my-20 flex flex-col items-center justify-center space-y-8"
      id="home"
    >
      <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
        <p className="z-20 text-6xl font-bold text-osmium">Osmium</p>
        <p className="z-20 text-center text-3xl sm:px-4">
          <strong>Develop</strong>, <strong>Build</strong> and{' '}
          <strong>Deploy</strong> smart contracts easily{' '}
        </p>
        <div className="z-20 flex">
          <Button className="mr-2 border-4 border-solid border-osmium bg-osmium hover:bg-background hover:text-osmium ">
            <a href={marketplace} target="_blank">
              View marketplace
            </a>
          </Button>
          <Button>
            <a href={github} target="_blank" className="flex items-center">
              <FaGithub className="mr-2" />
              Github
            </a>
          </Button>
        </div>
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            className="h-full w-full bg-background"
            background="bg-white"
            particleDensity={30}
            particleColor="#3C9DA1"
          />
        </div>
      </div>
    </section>
  )
}
