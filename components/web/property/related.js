import React from 'react'
import Carousel from '../home/carousel/carouselC'
import Style from '../../../styles/web/property.module.css'
import { SUGGESTION_INFO } from '../../../lib/constants'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    carousel: {
        alignSelf: 'center',
        justifyContent: 'center'
    }
});

export default function Related() {

    const classes = useStyles();

    return(
        <div className={Style.related}>
            <div className={Style.title}><a href="#"><span>محصولات مرتبط :</span></a></div>
            <Carousel sliders={SUGGESTION_INFO} deviceType="desktop" className={classes.carousel} />
        </div>
    )
}