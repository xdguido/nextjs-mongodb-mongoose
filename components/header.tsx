import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from '@ui/Logo';
import Button from '@ui/Button';
import ThemeToggler from '@ui/ThemeToggler';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const mainNav = [
    { name: 'Servicios', href: '/' },
    { name: 'Nosotros', href: '/' },
    { name: 'Contacto', href: '/' }
];

export default function Header() {
    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <Disclosure
            as="header"
            className={clsx(
                'fixed w-full z-30 md:bg-opacity-90 transition duration-150 ease-in-out',
                !top && 'bg-white backdrop-blur-sm shadow-lg'
            )}
        >
            {({ open }) => (
                <>
                    <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                        <div className="flex flex-1 items-center justify-between h-16">
                            <div className="flex flex-shrink-0 items-center">
                                <Logo />
                            </div>
                            <div className="flex items-center">
                                {/* Large screen navigation */}
                                <nav className="hidden sm:ml-6 sm:flex items-center">
                                    <ul className="flex items-center gap-4">
                                        {mainNav.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm hover:text-blue-600"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-2 pl-5 ml-5 border-l border-l-slate-200">
                                        <ThemeToggler />
                                    </div>
                                </nav>
                            </div>
                            <div className="flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button as={Button} style="outline" square>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile navigation  */}
                    <Disclosure.Panel
                        as="nav"
                        className=" bg-slate-50 rounded-md shadow-md p-2 sm:hidden"
                    >
                        <ul className="space-y-2 px-2 pt-2 pb-4 mb-4 border-b border-b-slate-200 ">
                            {mainNav.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ThemeToggler />
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
