
import React, {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Style from '../../../../styles/web/carouselC.module.css'
import Item from "./carouselItemC";

export default function CarouselC(props) {

        const deviceType = props.deviceType;

        const [isMoving,setIsMoving] = useState(false)

        const slides = props.sliders

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
                    beforeChange={() => setIsMoving(true)}
                    afterChange={() => setIsMoving(false)}
                    deviceType={deviceType}
                >
                    {
                        slides.map(card => {
                            return <Item {...card} key={card.id} />;
                        })
                    }
                </Carousel>

            </div>
        );
}

