import { FaGithub } from 'react-icons/fa'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center">
      <p className="text-5xl font-bold text-osmium">Osmium</p>
      <p>
        <strong>Develop</strong>, <strong>Build</strong> and{' '}
        <strong>Deploy</strong> smart contracts easily{' '}
      </p>
      <div className="flex ">
        <Button className="mr-2 border-4 border-solid border-osmium bg-osmium hover:bg-background hover:text-osmium ">
          <a href="/">View marketplace</a>
        </Button>
        <Button>
          <a href="/" className="flex items-center">
            <FaGithub className="mr-2" />
            Github
          </a>
        </Button>
      </div>
    </section>
  )
}
