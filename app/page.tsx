import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Service from '@/components/Service'
import Benefits from '@/components/Benefits'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Service />
      <Benefits />
      <CTA />
    </main>
  )
}

