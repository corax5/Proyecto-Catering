import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Form = () => {
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        _subject: '',
        message: '',
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.target);

        try {
            const response = await fetch('https://formspree.io/f/mrgwwkpg', {
                method: 'POST',
                body: data,
                headers: {
                    Accept: 'application/json',
                },
            });

            const result = await response.json();

            if (!response.ok) {
                setMessage(result.errors.map((error: any) => error.message).join(', '));
                return false;
            }

            setMessage('¡Se ha enviado tu correo!');

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <div className="form text-2xl font-bold text-gray-800 lg:text-xl dark:text-white mx-auto flex items-center ml-8 mb-8">
            <div className="min-h-screen bg-stone-900 py-6 flex flex-col justify-center sm:py-1 mr-74">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-goldenrod-500 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:p-5 w-4/3"></div>

                    <div className="text-white relative px-4 py-10 bg-zinc-900 shadow-lg sm:rounded-l sm:p-10">
                        <div className="text-center pb-4">
                            <p className="text-black-300 lg:text-3xl">Envíanos un mensaje</p>
                        </div>
                        <form action={'https://formspree.io/f/mrgwwkpg'} method='POST' onSubmit={handleSubmit}>
                            <label htmlFor="name" className="block text-zinc-300 text-sm font-bold mb-2">
                                Nombre:
                            </label>
                            <input
                                id="name"
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <input
                                id="asunto"
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Asunto"
                                name="_subject"
                                onChange={handleChange}
                                value={formData._subject}
                            />
                            <input
                                id="Email"
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />

                            <textarea
                                id="message"
                                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Escribe aquí tu mensaje..."
                                name="message"
                                onChange={handleChange}
                                value={formData.message}
                            />

                            <div className="flex justify-between">
                                <input
                                    className="shadow bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    value="Enviar ➤"
                                    style={{ cursor: 'pointer' }}
                                />

                            </div>
                        </form>  <p className='alert'>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
