import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:px-20">
      <Header />
      <div className="lg:px-20">
        <Hero />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
