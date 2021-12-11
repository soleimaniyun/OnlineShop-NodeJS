import React from 'react'
import Style from '../../../styles/web/catalog.module.css'
import Paper from "@material-ui/core/Paper"
import Filters from './filters'
import Products from './products'

export default function Catalog(props) {
    return(
        <div className={Style.catalog}>

            <div className={Style.panelA}>
                <Filters />
            </div>

            <div className={Style.panelB}>
                <Products />
            </div>

        </div>
    )
}