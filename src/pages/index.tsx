import React from 'react';
import { Inter } from 'next/font/google'
import { Footer } from '@/pages/Footer'
import { Inicio } from '@/pages/Inicio';
import Navbar from './Navbar';



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
