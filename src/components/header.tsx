import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { ModeToggle } from './modeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex flex-row justify-between bg-background p-4">
      <div className="flex items-baseline">
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
      <ModeToggle />
    </header>
  )
}
