import React from 'react'
import "./advert-carousel.styles.scss";
import Carousel from '../../../components/advert-carousel/advert-carousel.component';
import AdvertCarouselVideo from '../../../components/advert-carousel-video/advert-carousel.component';

const AdvertCarousel=()=> {
    return (
        <div className="advert-carousel">
            <AdvertCarouselVideo />
            <Carousel />
            
        </div>
    )
}

export default AdvertCarousel;
