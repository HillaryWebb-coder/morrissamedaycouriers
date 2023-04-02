import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Home/Banner'
import Feature from '@/components/Home/Feature'
import About from '@/components/Home/About'
import Steps from '@/components/Home/Steps'
import Testimonials from '@/components/Home/Testimonials'
import CallToAction from '@/components/Home/CallToAction'
import Contact from '@/components/Home/Contact'
import Footer from '@/components/Footer'
import RequestQuote from '@/components/RequestQuote'

export default function Home() {
  return (
    <>
      <Head>
        <title>Morrissamedaycouriers</title>
        <meta name="description" content="courier service delivery company in uk" />
      </Head>
      <main className='wrapper'>
        <Header />
        <RequestQuote />
        <article>
          <Banner />
          <Feature />
          <About />
          <Steps />
          <CallToAction />
          <Testimonials />
          <Contact />
          <Footer />
        </article>
      </main>
    </>
  )
}
