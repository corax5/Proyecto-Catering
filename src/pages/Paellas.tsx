import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import Image from 'next/image'

export const Paellas = () => {
    return (
        <>
            <Navbar />

            <nav className="bg-white border-gray-200 bg-zinc-900">
                <h1 className="text-5xl mx-auto text-center mb-10 ">Catering Vicente</h1>
                <div className='flex items-center justify-center'>
                    <h3 className='text-2xl font-bold lg:text-3xl '>Paellas gigantes para todo tipo de eventos</h3>
                </div>

                <div className="bg-white border-gray-200 bg-zinc-900 max-w-screen-xl py-6 sm:py-8 lg:py-12 items-center justify-between mx-auto p-4">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-4">
                            <div className="text-center">

                            </div>


                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 mb-4">

                            <a href="#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <Image src={'/images/photo-1610465299996-30f240ac2b1c.avif'}
                                    loading="lazy"
                                    alt="Photo by Minh Pham"
                                    width={800}
                                    height={800}
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
                            </a>

                            <a href="#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <Image src={'/images/photo-1593508512255-86ab42a8e620.avif'}
                                    loading="lazy"
                                    alt="Photo by Magicle"
                                    width={800}
                                    height={800}
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
                            </a>

                            <a href="#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <Image src={'/images/photo-1497436072909-60f360e1d4b1.avif'}
                                    loading="lazy"
                                    alt="Photo by Martin Sanchez"
                                    width={800}
                                    height={800}
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
                            </a>

                            <a href="#"
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 mb-15">
                                <Image src={'/images/photo-1493246507139-91e8fad9978e.avif'}
                                    loading="lazy"
                                    alt="Photo by Lorenzo Herrera"
                                    width={800}
                                    height={800}
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
                            </a>

                        </div>
                    </div>
                </div>
            </nav >
            <Footer />
        </>

    )
}
export default Paellas