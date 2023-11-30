import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import Image from 'next/image'


export const Catering = () => {
    return (

        <>
            <Navbar />
            <nav className="bg-white border-gray-200 bg-zinc-900">
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <h1 className="text-5xl mx-auto text-center mb-10 ">
                        <Image
                            src={'/images/cabecera.png'}
                            alt="Catering Logo"
                            width={600}
                            height={600}
                            className="justify-center align-items-center"
                        /></h1></div>
                <div className='flex items-center justify-center'>
                    <h3 className='text-xl font-bold lg:text-2xl ml-2 '>Si buscas un catering personalizado en La Rioja y darle a tu evento el cariño que se merece ¡Contactanos!</h3>
                </div>

                <div className="bg-white border-gray-200 bg-zinc-900 max-w-screen-xl py-6 sm:py-8 lg:py-12 items-center justify-between mx-auto p-4">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                            <div className="text-center">
                                <h2 className="text-l font-bold text-white lg:text-3xl mx-auto flex items-center justify-center">
                                    Aquí puedes ver algunos de nuestros caterings:
                                </h2>
                            </div>


                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 mb-4">

                            <a href="/Catering"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <Image src={'/images/IMG_8304.jpg'}
                                    loading="lazy"
                                    alt="Photo eventos"
                                    width={500}
                                    height={500}
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Eventos</span>
                            </a>
                            <a href="/Catering#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <Image src={'/images/IMG_8293.jpg'}
                                    loading="lazy"
                                    alt="Photo reunion"
                                    width={800}
                                    height={800}
                                    className="foto absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Cohete  Ayuntamiento de Logroño</span>
                            </a>
                            <a href="/Catering#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <Image src={'/images/IMG_8298.jpg'}
                                    loading="lazy"
                                    alt="Photo reunion"
                                    width={800}
                                    height={800}
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Reuniones</span>
                            </a>

                            <a href="/Catering"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 mb-15">
                                <Image src={'/images/IMG_8299.jpg'}
                                    loading="lazy"
                                    alt="Photo aniversario brico"
                                    width={800}
                                    height={800}
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Aniversario  Brico Depôt</span>
                            </a>
                            <a href="/Catering#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <Image src={'/images/IMG_8297.jpg'}
                                    loading="lazy"
                                    alt="Photo reunion"
                                    width={800}
                                    height={800}
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Aniversarios de boda</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav >
            <Footer />
        </>
    )
}
export default Catering
