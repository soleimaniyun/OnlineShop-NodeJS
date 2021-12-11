
import React from 'react'
import CarouselA from './carousel/carouselA'
import Bestseller from './bestsellers/bestsellers'
import Recent from './recent/recent'
import Suggestion from './suggestion/suggestion'
import AdvertTop from './advert/advertTop'
import AdvertMid from './advert/advertMiddle'
import AdvertBot from './advert/advertBottom'
import Amazing from './amazing/amazing'
import Sidebar from '../sidebar/sidebar'

export default function Home() {
        return(
            <div>
                <CarouselA />
                <AdvertTop />
                <Amazing />
                <AdvertMid />
                <Bestseller deviceType="desktop" />
                <Recent deviceType="desktop" />
                <Suggestion deviceType="desktop" />
                <AdvertBot />
                <Sidebar />
            </div>
        )
}