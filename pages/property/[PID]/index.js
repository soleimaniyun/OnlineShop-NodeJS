import Head from 'next/head'
import {useRouter} from 'next/router'

import MasterPage from "../../../components/web/layout/masterPage";
import {SITE_TITLE} from '../../../lib/constants'
import Header from '../../../components/web/header/header'
import Footer from '../../../components/web/footer/footer'
import Property from '../../../components/web/property/property'

export default function Index({preview}) {

    const router = useRouter()
    const {PID} = router.query

    return (

        <MasterPage preview={preview}>
            <Head>
                <title>{SITE_TITLE}</title>
                <link rel="icon" href="/images/favicon.ico"/>
            </Head>

            <Header/>
            <div style={{ minHeight: '100vh' }}>
                <Property PID={PID}/>
            </div>
            <Footer/>
        </MasterPage>

    )
}
