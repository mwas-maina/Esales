import React from 'react'
import "./advert-carousel.styles.scss";
import phone1 from "../../images/phone1.jpg";
import tv3 from "../../images/tv3.jpg";

import tv2 from "../../images/tv2.jpg";

const Carousel=()=> {
    return (
        <div className="carousel-container">
            <div className="images">
                <figure className="image-container">
                    <img src={phone1}  alt="Samsung Smart tv" className="image" />
                </figure>
                <figure className="image-container">
                    <img src={phone1}  alt="Samsung Smart tv" className="image" />
                </figure>
       
          
                <figure className="image-container">
                    <img src={tv3}  alt="Samsung Smart tv"  className="image" />
                </figure>
        
       
                <figure className="image-container">
                    <img src={tv2}  alt="Samsung Smart tv" className="image" />
                </figure>
            </div>
        </div>
    )
}

export default Carousel;
