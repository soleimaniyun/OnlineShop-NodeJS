import React, {useEffect, useState, useReducer} from 'react'
import Style from '../../../../styles/web/amazing.module.css'
import Carousel from '../carousel/carouselB'
import { AMAZING_INFO } from '../../../../lib/constants'
import Counter from "./counter";
import NoSsr from "@material-ui/core/NoSsr";
import Button from "@material-ui/core/Button";
import TouchAppIcon from '@material-ui/icons/TouchApp';

export default function amazing() {

    const L = AMAZING_INFO.length

    return(
        <div className={Style.container}>
            <div className={Style.amazing}>
                <div className={Style.title}>
                    <Button
                        variant="outlined"
                        size="small"
                        className={Style.button}
                        startIcon={<TouchAppIcon />}
                    >
                        <span>مشاهده همه</span>
                    </Button>
                    <NoSsr>
                       <Counter />
                    </NoSsr>
                </div>

                <div>
                    <Carousel sliders={AMAZING_INFO} deviceType="desktop" />
                </div>

            </div>
        </div>
    )
}