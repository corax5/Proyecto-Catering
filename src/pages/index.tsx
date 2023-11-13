
import { Inter } from 'next/font/google'
import { Navbar } from '@/Components/Navbar'
import { Footer } from '@/Components/Footer'

import { Inicio } from '@/Components/Inicio';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Navbar />
      <Inicio />
      <Footer />
    </>
  )
}
