import React from 'react';
import {ReactComponent as UserSvg} from "../../assets/user-alt.svg";
import {ReactComponent as LaptopSvg} from "../../assets/laptop.svg";
import {ReactComponent as CarSvg} from "../../assets/car.svg";
import {ReactComponent as MotorcycleSvg} from "../../assets/motorcycle.svg";
import {ReactComponent as FoodSvg} from "../../assets/wine-glass-alt.svg";
import {ReactComponent as WineSvg} from "../../assets/wine-bottle.svg";
import {ReactComponent as Mobile} from "../../assets/mobile-alt.svg";

import './User.styles.scss';

export const UserAlt=()=>(
    <div className="user-svg">
        <UserSvg />

    </div>
)

export const DesktopLaptopSvg=()=>(
    <div>
        <LaptopSvg className="link-svg" />
    </div>
)
export const VehicleSvg=()=>(
    <div>
        <CarSvg className="link-svg" />
    </div>
)
export const MotorbikeSvg=()=>(
    <div>
        <MotorcycleSvg className="link-svg" />
    </div>
)
export const BeverageSvg=()=>(
    <div>
        <FoodSvg className="link-svg" />
    </div>
)
export const WineBottle=()=>(
    <div>
        <WineSvg className="link-svg" />
    </div>
)
export const MobileSvg=()=>(
    <div>
        <Mobile className="link-svg" />
    </div>
)




