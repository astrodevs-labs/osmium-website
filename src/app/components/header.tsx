import { Button } from '@/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
  const github = 'https://github.com/astrodevs-labs/osmium'
  const marketplace =
    'https://marketplace.visualstudio.com/items?itemName=OsmiumToolchains.osmium-solidity-extension'

  return (
    <header className="sticky top-0 z-20 flex flex-row justify-between bg-background p-4">
      <div className="flex items-baseline space-x-10">
        <h1 className="mr-2 hidden text-4xl font-bold md:block">Osmium</h1>
        <nav>
          <ul className="hidden space-x-4 text-xl md:flex">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger className="mr-2 text-2xl font-bold md:hidden">
              Osmium
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:hidden">
              <DropdownMenuLabel>
                <Link href="#home">Home</Link>
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href="#about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
      <div className="z-10 flex ">
        <Button
          className="mr-2 border-2 border-solid border-osmium bg-osmium text-lg hover:bg-background hover:text-osmium"
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
    </header>
  )
}
