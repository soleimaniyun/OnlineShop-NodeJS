import React from 'react'
import Carousel from '../carousel/carouselC'
import Style from '../../../../styles/web/bestsellers.module.css'
import { BESTSELLER_INFO } from '../../../../lib/constants'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    carousel: {
        alignSelf: 'center',
        justifyContent: 'center'
    }
});

export default function Bestsellers() {

    const classes = useStyles();

    return(
        <div className={Style.bestsellers}>
            <div className={Style.title}><a href="#"><span>پرفروش ترین محصولات روز :</span></a></div>
            <Carousel sliders={BESTSELLER_INFO} deviceType="desktop" className={classes.carousel} />
        </div>
    )
}