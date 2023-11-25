import React from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Form from './Formu';

const Contacto = () => {

  const openInNewTab = (url: any) => {
    const enlace = window.open(url, '_blank');
    if (enlace) {
      enlace.opener = null;
    }
  };

  return (
    <>
      <Navbar />

      <nav className="bg-white border-gray-200 bg-zinc-900">
        <h3 className=" dorado text-4xl mx-auto text-center mb-6 font-serif font-bold">Contacto:</h3>
        <div className=" flex items-center justify-between">
          <h4 className='text-3xl mx-auto text-left mb-8 font-serif font-bold'>Conéctate con nosotros en redes sociales</h4>

        </div>

        <div className="text-2xl font-bold text-gray-800 lg:text-xl dark:text-white mx-auto flex items-center ml-80 mb.8 ">
          <Form />
          <div className='mb-80 mr-80 '>
            <ul className="wrapper">
              <li className="icon instagram" onClick={() => openInNewTab('https://www.instagram.com/cateringvicente/')}>
                <span className="tooltip">Instagram</span>
                <span><FontAwesomeIcon icon={faInstagram} /></span>
              </li>
              <li className="icon whats" onClick={() => openInNewTab('https://wa.me/+34696772456')}>
                <span className="tooltip">Whatsapp</span>
                <span><FontAwesomeIcon icon={faWhatsapp} /></span>
              </li>
              <li className="icon mail" onClick={() => openInNewTab('mailto:cateringvicente0@gmail.com')}>
                <span className="tooltip">Email</span>
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
              </li>
            </ul>
          </div>
        </div>
      </nav >

      <Footer />
    </>
  );
}

export default Contacto;
