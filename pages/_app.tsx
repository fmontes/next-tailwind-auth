import React from 'react';
import { AppProps } from 'next/app';

import Link from 'next/link';

import 'tailwindcss/tailwind.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <nav className="py-5 px-12 border-b border-gray-300">
                <Link href="/">
                    <a className="mx-5">Home</a>
                </Link>
                <Link href="/profile">
                    <a className="mx-5">Profile</a>
                </Link>
                <Link href="/protected">
                    <a className="mx-5">Protected</a>
                </Link>
            </nav>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
