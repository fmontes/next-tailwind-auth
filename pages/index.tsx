import React from 'react';
import Head from 'next/head';

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>@fmontes Next.JS v10 starter</title>
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <h1>Hello World</h1>
        </>
    );
}
