
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';



interface ActiveLinkProps {
    href: string;
    children: React.ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, children }) => {
    const router = useRouter();

    const isActive = router.pathname === href;

    return (
        <Link legacyBehavior href={href}>
            <a className={`block py-2 px-4 rounded ${isActive ? 'text-decoration-line: underline ' : ' text-decoration-line: underline; hover:bg-gray-100'}  md:hover:bg-transparent md:border-0 md:hover:text-c6a05f md:p-0 dark:text-amber-200 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ml-auto`}>
                {children}
            </a>
        </Link>

    );
};

export const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className="bg-white border-gray-200 bg-zinc-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src={'/images/Proyecto nuevo (2).png'}
                        alt="Catering Logo"
                        width={250}
                        height={400}
                        className="h-20"
                    />


                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={menuVisible ? 'true' : 'false'}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Abrir menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-end md:w-80  ${menuVisible ? 'block' : 'hidden'} md:block`} id="navbar-default">
                    <ul className="font-medium flex flex-col  p-4 md:p-0 mt-4 border rounded-lg bg-zinc-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-zinc-900 ">
                        <li>
                            <ActiveLink href="/">Inicio</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/Catering">Catering</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/Paellas">Paellas</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/Contacto">Contacto</ActiveLink>
                        </li>
                    </ul>
                </div >
            </div >
        </nav >
    );
};
export default Navbar;