import React from 'react'
import Carousel from '../home/carousel/carouselC'
import { SUGGESTION_INFO } from '../../../lib/constants'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    carousel: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    slider: {
        width: '89vw',
        margin: '3vw 5vw',
        paddingBottom: '2vw',
        backgroundColor: 'white',
        border: 'lavender 1px solid',
        borderRadius: '0.3vw',
    },
    title: {
        fontFamily: 'IRANSans',
        color: 'dimgray',
        fontSize: '1vw',
        fontWeight: 'bold',
        padding: '1vw',
        marginBottom: '1vw',
    },
});

export default function Suggestion() {

    const classes = useStyles();

    return(
        <div className={classes.slider}>
            <div className={classes.title}><a href="#"><span>محصولات پیشنهادی به شما :</span></a></div>
            <Carousel sliders={SUGGESTION_INFO} deviceType="desktop" className={classes.carousel} />
        </div>
    )
}