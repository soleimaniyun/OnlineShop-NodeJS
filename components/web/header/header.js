import React from 'react'
import Style from '../../../styles/web/header.module.css'
import Advert from './advert/advert'
import Navi from './navi/navi'
import Hide from "./hide/hide";

export default function header() {
    return (
        <div className={Style.container} id="Header">
        <Hide>
            <div className={Style.hide}>
                    <Advert/>
                    <Navi/>
            </div>
        </Hide>
        </div>
    );
}