import React from 'react';

// import { Container } from './styles';

const Footer = () => {
  return (
    <footer className='bg-slate-900'>
        <div className='w-full'>
            <div className='grid grid-cols-2 gap-8 px-6 py-6 box-content lg:py-8 md:grid-cols-4 lg:mx-auto lg:max-w-75rem lg:gap-40'>
                <div>
                    <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Lorem Ipsum</h2>
                    <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Sobre nós</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Carreiras</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Central de Ajuda</h2>
                    <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Instagram</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contate-nos</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Normas</h2>
                    <ul className='text-gray-400 font-medium'>
                        <li className='mb-4'>
                            <a href="#" className='hover:underline'>Política de Privacidade</a>
                        </li>
                        <li className='mb-4'>
                            <a href="#" className='hover:underline'>Licença</a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>Termos &amp; Condições</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Baixar</h2>
                    <ul className='text-gray-500 font-medium'>
                        <li className='mb-4'>
                            <a href="#" className='hover:underline'>iOS</a>
                        </li>
                        <li className='mb-4'>
                            <a href="#" className='hover:underline'>Android</a>
                        </li>
                        <li className='mb-4'>
                            <a href="#" className='hover:underline'>Windows</a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>MacOS</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='px-4 py-6 bg-slate-950 md:flex md:items-center md:justify-center'>
                <span className='text-sm text-gray-500 sm:text-center'>© 2023 <a href="#">Lorem Ipsum™</a>. Todos os Direitos Reservados.
                </span>
            </div>
        </div>
    </footer>
  );
}

export default Footer;