import React from 'react';
import { Carrusel } from './Carrusel';


export const Inicio = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 bg-zinc-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <h1 className="text-5xl mx-auto text-center mb-10 ">Catering Vicente</h1>
                    <div className='flex items-center justify-center'>
                        <p className='mr-4 w-1/2 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ut modi sunt ducimus recusandae quo, assumenda qui voluptatum, veritatis illo quibusdam numquam, deleniti enim. Rerum tenetur commodi similique. Nostrum, dolorem.</p>
                        <Carrusel />
                    </div>



                </div>
            </nav >
        </div >
    );
};
