import Head from 'next/head'
import { SITE_TITLE } from '../../../lib/constants'

export default function Meta() {
    return (
        <Head>

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/pwa/apple-touch-icon.png"
            />
{/*
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/pwa/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/pwa/favicon-16x16.png"
            />
*/}
            {/*<link rel="manifest" href="/pwa/site.webmanifest" />*/}
            <link rel="shortcut icon" href="/favicon.ico" />
            {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml" />*/}

            <meta name="msapplication-TileColor" content="#000000" />
            {/*<meta name="msapplication-config" content="/pwa/browserconfig.xml" />*/}
            <meta name="theme-color" content="#000" />
            <meta name="description" content={` ${SITE_TITLE}.`} />

        </Head>
    )
}
