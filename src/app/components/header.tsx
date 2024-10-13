'use client'

import { Button } from '@/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

export default function Header() {
  const github = 'https://github.com/astrodevs-labs/osmium'
  const marketplace =
    'https://marketplace.visualstudio.com/items?itemName=OsmiumToolchains.osmium-solidity-extension'
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768)
    }
  }, [])
  return (
    <header className="sticky top-0 z-20 flex flex-row justify-between bg-background py-4">
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
      <div className="z-10 flex">
        <Button
          className="mr-2 block border-2 border-solid border-osmium bg-osmium text-lg hover:bg-background hover:text-osmium"
          size={isMobile ? 'sm' : 'lg'}
        >
          <a
            href={marketplace}
            target="_blank"
            className={isMobile ? '' : 'flex items-center'}
          >
            <VscVscode />
            {isMobile ? null : 'View marketplace'}
          </a>
        </Button>
        <Button
          className="mr-2 block text-lg hover:bg-slate-200"
          size={isMobile ? 'sm' : 'lg'}
        >
          <a
            href={github}
            target="_blank"
            className={isMobile ? '' : 'flex items-center'}
          >
            <FaGithub />
            {isMobile ? null : 'Github'}
          </a>
        </Button>
      </div>
    </header>
  )
}
