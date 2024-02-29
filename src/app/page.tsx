import About from '@/components/about'
import Contact from '@/components/contact'
import Faq from '@/components/faq'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:px-20">
      <Header />
      <Hero />
      <div className="lg:px-20">
        <About />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </main>
  )
}
