import React from 'react';
import { Link } from 'react-router-dom';
import "./nav-items.styles.scss";
import {ReactComponent as LinkSvg} from "../../assets/shopping-cart.svg";
import { DesktopLaptopSvg, VehicleSvg, MotorbikeSvg, WineBottle, BeverageSvg, MobileSvg } from '../SVGS/User.svg';
const NavItemsList=()=>{
    return(
        <ul className="item-list">
                    <li className="item-list-items">
                        <MobileSvg />
                        <Link to="/signin">Phones and Tablets</Link>
                    </li>
                    <li className="item-list-items">
                        <DesktopLaptopSvg />
                        <Link to="/signin">Desktops and Laptops</Link>
                    </li>
                    <li className="item-list-items">
                        <VehicleSvg />
                        <Link to="/signin">Car spare parts</Link>
                    </li>
                    <li className="item-list-items">
                        <MotorbikeSvg />
                        <Link to="/signin">Mortobikes</Link>
                    </li>
                    <li className="item-list-items">
                        <BeverageSvg />
                        <Link to="/signin">Food and beverages</Link>
                    </li>
                    <li className="item-list-items">
                        <MobileSvg />
                        <Link to="/signin">Cosmetics</Link>
                    </li>
                    <li className="item-list-items">
                        <BeverageSvg />
                        <Link to="/signin">Fashion Collections</Link>
                    </li>
                    <li className="item-list-items">
                        <WineBottle />
                        <Link to="/signin">Liquor corner</Link>
                    </li>
                    <li className="item-list-items">
                        <WineBottle />
                        <Link to="/signin">Liquor corner</Link>
                    </li>
                    <li className="item-list-items">
                        <WineBottle />
                        <Link to="/signin">Liquor corner</Link>
                    </li>
                </ul>
    )
}
export default NavItemsList;
    
