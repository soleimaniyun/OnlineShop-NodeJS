import React from 'react'
import Style from '../../../../styles/web/advert.module.css'
import {ADVERT_HOME_BOTTOM} from '../../../../lib/constants'

export default function AdvertHomeBot() {

    const adverts = ADVERT_HOME_BOTTOM ;

    return(
        <div className={Style.advertHomeBot}>
            {
                adverts.map( adv => {
                    return (
                        <div className={Style.item} key={adv.id}>
                            <a href="#">
                                <img src={adv.imagePath} alt="Advert Pictures" className={Style.image} />
                            </a>
                        </div>
                    );
                })
            }
        </div>
    )
}