import React from 'react';
import Carousel from "react-material-ui-carousel";
import {CAROUSEL_INFO} from '../../../../lib/constants';
import Style from '../../../../styles/web/carouselA.module.css';
import { Card, CardContent, CardMedia, Typography, Grid, Button, } from '@material-ui/core';
import TouchAppIcon from "@material-ui/icons/TouchApp";
import NoSsr from "@material-ui/core/NoSsr";

function Banner(props) {
    const contentPosition = props.item.ContentPosition ? props.item.ContentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className={Style.content} style={{backgroundImage: props.item.Picture,color: props.item.BackgroundColor}}>
                <Typography className={Style.title}>
                    {props.item.Name}
                </Typography>
                <br/>
                <Typography className={Style.caption}>
                    {props.item.Caption}
                </Typography>
                <br/>
                <Typography className={Style.description}>
                    {props.item.Description}
                </Typography>
                <br/>
                <Button
                    variant="outlined"
                    size="small"
                    className={Style.viewButton}
                    startIcon={<TouchAppIcon />}
                >
                    <span>ببینیم</span>
                </Button>
            </CardContent>
        </Grid>
    )

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className={Style.media}
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className={Style.mediaCaption}>
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className={Style.carousel}>
            <Grid container spacing={0} className={Style.bannerGrid}>
                {items}
            </Grid>
        </Card>
    )
}

const items = CAROUSEL_INFO;

class CarouselA extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "slide",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false
        }

    }

    render() {
        return (
            <div className={Style.slideShow}>
                <NoSsr>
                <Carousel
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.ContentPosition}/>
                        })
                    }
                </Carousel>
                </NoSsr>
            </div>

        )
    }
}

export default CarouselA;
