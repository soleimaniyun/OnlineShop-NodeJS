
import React, { Component } from "react";
//import MobileDetect from "mobile-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Style from '../../../../styles/web/carouselB.module.css'
import Item from "./carouselItemB";

class CarouselB extends Component {
/*
    static getInitialProps({ req }) {
        let userAgent;
        let deviceType;
        if (req) {
            userAgent = req.headers["user-agent"];
        } else {
            userAgent = navigator.userAgent;
        }
        const md = new MobileDetect(userAgent);
        if (md.tablet()) {
            deviceType = "tablet";
        } else if (md.mobile()) {
            deviceType = "mobile";
        } else {
            deviceType = "desktop";
        }
        return { deviceType };
    };*/

    deviceType = "desktop";
    state = { isMoving: false };

    render() {

        const slides = this.props.sliders

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                slidesToSlide: 4
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1
            }
        };

        const { classes } = this.props;

        return (
            <div dir="ltr" className={Style.carousel}>
                <Carousel
                    /*
                    swipeable={false}
                    draggable={false}
                    */
                    responsive={responsive}
                    ssr
                    infinite={true}
                    beforeChange={() => this.setState({ isMoving: true })}
                    afterChange={() => this.setState({ isMoving: false })}
                    deviceType={this.props.deviceType}
                >
                    {
                        slides.map(card => {
                            return <Item isMoving={this.state.isMoving} {...card} key={card.id} />;
                        })
                    }
                </Carousel>

            </div>
        );
    }
}

export default CarouselB;

