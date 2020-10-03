import React from 'react';
import "./header-display.styles.scss";
import SidenavItemsNavigation from './items-nav.component/item-nav.layout';
import AdvertCarousel from './advert-carousel/advert-carousel.layout';

const HeaderDisplay=()=>(
        <div className="header-display">
           <SidenavItemsNavigation />
           <AdvertCarousel />
        </div>
)
export default HeaderDisplay;