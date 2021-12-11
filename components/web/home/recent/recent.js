import React from 'react'
import Carousel from '../carousel/carouselC'
import Style from '../../../../styles/web/bestsellers.module.css'
import { RECENT_INFO } from '../../../../lib/constants'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    carousel: {
        alignSelf: 'center',
        justifyContent: 'center'
    }
});

export default function Recent() {

    const classes = useStyles();

    return(
        <div className={Style.bestsellers}>
            <div className={Style.title}><a href="#"><span>جدیدترین محصولات بازار :</span></a></div>
            <Carousel sliders={RECENT_INFO} deviceType="desktop" className={classes.carousel} />
        </div>
    )
}