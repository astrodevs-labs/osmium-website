import Link from 'next/link'
import { ModeToggle } from './modeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex flex-row justify-between bg-background p-4">
      <div className="flex items-baseline">
        <h1 className="mr-2 text-2xl font-bold">Osmium</h1>
        <nav>
          <ul className="flex space-x-4">
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
        </nav>
      </div>
      <ModeToggle />
    </header>
  )
}
