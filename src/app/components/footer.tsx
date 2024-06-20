import Image from 'next/image'
import shortLogo from 'public/short-logo-transparent.webp'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { VscVscode } from 'react-icons/vsc'

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
          <div className="h-20 w-32">
            <Image src={shortLogo} alt="short Osmium logo" />
          </div>
        </div>
        <div className="mt-4 flex justify-between space-x-8">
          <a
            href={github}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaGithub className="h-6 w-6" />
            <p className="hidden sm:block">Github</p>
          </a>
          <a
            href={discord}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaDiscord className="h-6 w-6" />
            <p className="hidden sm:block">Discord</p>
          </a>
          <a
            href={twitter}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaXTwitter className="h-6 w-6" />
            <p className="hidden sm:block">X</p>
          </a>
          <a
            href={marketplace}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <VscVscode className="h-6 w-6" />
            <p className="hidden sm:block">Marketplace</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
