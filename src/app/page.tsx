import About from 'src/app/components/about'
import Contact from 'src/app/components/contact'
import Faq from 'src/app/components/faq'
import { Features } from 'src/app/components/features'
import Footer from 'src/app/components/footer'
import Header from 'src/app/components/header'
import Hero from 'src/app/components/hero/hero'
import { ModeToggle } from 'src/app/components/modeToggle'
import Timeline from 'src/app/components/timeline'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <div className="3xl:px-80 px-4 lg:px-16 2xl:px-32">
        <About />
        <Features />
        <Timeline />
        <Faq />
        <Contact />
        <Footer />
      </div>
      <div className="fixed bottom-4 right-4 px-4 py-2">
        <ModeToggle />
      </div>
    </main>
  )
}
