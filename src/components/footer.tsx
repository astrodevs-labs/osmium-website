import Image from 'next/image'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mx-32 my-10 flex justify-center">
      <div className="flex w-full justify-between border-t-2 border-solid border-gray-400">
        <div className="mt-4 flex w-60 items-center space-x-2">
          <Image
            src="/short-logo-transparent.png"
            alt="short Osmium logo"
            width={90}
            height={90}
          />
          <p>Discord</p>
          <p>Twitter</p>
          <p>Marketplace</p>
        </div>
        <div className="mt-4 flex w-20 justify-between">
          <FaGithub className="h-6 w-6" />
          <FaDiscord className="h-6 w-6" />
          <FaTwitter className="h-6 w-6" />
        </div>
      </div>
    </footer>
  )
}
