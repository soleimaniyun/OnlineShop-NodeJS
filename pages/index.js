
import Head from 'next/head'
import MasterPage from "../components/web/layout/masterPage";
import {SITE_TITLE} from '../lib/constants'
import Header from '../components/web/header/header'
import Footer from '../components/web/footer/footer'
import Home from '../components/web/home/home'
import React from "react";

export default function Index({preview}) {

    return (

            <MasterPage preview={preview}>
                <Head>
                    <title>{SITE_TITLE}</title>
                    <link rel="icon" href="/images/favicon.ico"/>
                </Head>

                <Header/>

                <div style={{minHeight: '100vh'}}>
                    <Home/>
                </div>

                <Footer/>

            </MasterPage>

    )
}
