import About from '@/components/about'
import Contact from '@/components/contact'
import Faq from '@/components/faq'
import { Features } from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import { ModeToggle } from '@/components/modeToggle'
import Timeline from '@/components/timeline'
import Spline from '@splinetool/react-spline/next'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:px-20">
      <Header />
      <Hero />
      <div className="lg:px-20">
        <About />
        <Timeline />
        <Features />
        <Spline scene="https://prod.spline.design/hdvfU3ZZcxwRvbJG/scene.splinecode" />
        <Contact />
        <Faq />
        <Footer />
      </div>
      <div className="fixed bottom-4 right-4 px-4 py-2">
        <ModeToggle />
      </div>
    </main>
  )
}
