
import { Inter } from 'next/font/google'
import { Navbar } from '@/pages/Components/Navbar'
import { Footer } from '@/pages/Components/Footer'
import { Inicio } from '@/pages/Components/Inicio';


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
