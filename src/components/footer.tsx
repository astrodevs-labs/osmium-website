import { FaDiscord, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-10 flex justify-center">
      <div className="flex w-[700px] justify-between border-t-2 border-solid border-gray-400">
        <div className="flex w-60 justify-between ">
          <p>Discord</p>
          <p>Marketplace</p>
        </div>
        <div className="flex w-20 justify-between">
          <FaGithub className="h-6 w-6" />
          <FaDiscord className="h-6 w-6" />
        </div>
      </div>
    </footer>
  )
}
