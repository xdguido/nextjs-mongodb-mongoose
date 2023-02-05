import { useEffect } from 'react';
import AOS from 'aos';

import { Inter } from '@next/font/google';
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

import 'aos/dist/aos.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <div className={`${inter.variable} font-sans`}>
            <Component {...pageProps} />;
        </div>
    );
}
