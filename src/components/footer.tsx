import Image from 'next/image'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const twitter = 'https://twitter.com/osmiumtoolchain'
  const discord = 'https://t.co/dWiY6esZvt'
  const marketplace =
    'https://marketplace.visualstudio.com/items?itemName=OsmiumToolchains.osmium-solidity-extension'
  const github = 'https://github.com/astrodevs-labs/osmium'
  return (
    <footer className="mx-8 flex justify-center">
      <div className="flex w-full justify-between border-t-2 border-solid border-gray-400">
        <div className="mt-4 w-60 items-center space-x-2 sm:flex">
          <Image
            src="/short-logo-transparent.png"
            alt="short Osmium logo"
            width={90}
            height={90}
          />
          <a href={discord} target="_blank" className="hidden sm:block">
            Discord
          </a>
          <a href={twitter} target="_blank" className="hidden sm:block">
            Twitter
          </a>
          <a href={marketplace} target="_blank" className="hidden sm:block">
            Marketplace
          </a>
        </div>
        <div className="mt-4 flex w-20 justify-between space-x-2">
          <a href={github} target="_blank" className="flex items-center">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href={discord} target="_blank" className="flex items-center">
            <FaDiscord className="h-6 w-6" />
          </a>
          <a href={twitter} target="_blank" className="flex items-center">
            <FaTwitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
