import React from "react";
import Style from '../../../../styles/web/advert.module.css'
import { ADVERT_HEADER } from '../../../../lib/constants'

const divStyle = {
   backgroundColor : ADVERT_HEADER.backgroundColor
};

export default function advert() {
    return (
        <div className={Style.advertHeader} style={divStyle}>
            <img src={ADVERT_HEADER.imagePath} alt="Advert Pictures" className={Style.image} />
        </div>
    );
}