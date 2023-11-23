import React from 'react';
import { Carrusel } from './Carrusel';




export const Inicio = () => {
    return (
        <div>

            <nav className="bg-white border-gray-200 bg-zinc-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <h1 className="text-5xl mx-auto text-center mb-10 ">
                        <span className='text-yellow-500 '>Catering </span>
                        Vicente</h1>
                    <div className='flex items-center justify-center'>
                        <p className='text-xl mr-4 w-1/2 p-2 font-roboto'>
                            Bienvenidos a Catering Vicente, donde la tradición de las paellas gigantes se combina con la innovación del catering personalizado. Nuestro compromiso es crear experiencias culinarias inolvidables, ofreciendo un menú diverso con ingredientes frescos y presentaciones impecables. Ya sea una celebración corporativa o cualquier evento social, en Catering Vicente, transformamos cada ocasión en un festín de sabores y momentos memorables.</p>
                        <Carrusel />
                    </div>



                </div>
            </nav >
        </div >
    );
};
export default Inicio