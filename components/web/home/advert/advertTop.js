import React from 'react'
import Style from '../../../../styles/web/advert.module.css'
import { ADVERT_HOME_TOP } from '../../../../lib/constants'

const divStyle = {
    backgroundColor : ADVERT_HOME_TOP.backgroundColor
};

export default function AdvertHomeTop() {
    return(
        <div className={Style.advertHomeTop}>
            <img src={ADVERT_HOME_TOP.imagePath} alt="Advert Pictures" className={Style.image} />
        </div>
    )
}