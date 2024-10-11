import About from 'src/app/components/about'
import Contact from 'src/app/components/contact'
import Faq from 'src/app/components/faq'
import { Features } from 'src/app/components/features'
import Footer from 'src/app/components/footer'
import Header from 'src/app/components/header'
import Hero from 'src/app/components/hero'
import { ModeToggle } from 'src/app/components/modeToggle'
import Timeline from 'src/app/components/timeline'
import PricingCard from './components/pricingCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:px-20">
      <Header />
      <Hero />
      <About />
      <Features />
      <Timeline />
      <Faq />
      <PricingCard />
      <Contact />
      <Footer />
      <div className="fixed bottom-4 right-4 px-4 py-2">
        <ModeToggle />
      </div>
    </main>
  )
}
