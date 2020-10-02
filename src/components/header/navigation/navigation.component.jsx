import React from 'react';
import "./navigation.styles.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Shoppingcart } from "../../../assets/shopping-cart.svg";
import { ReactComponent as UserSvg } from "../../../assets/user-circle.svg";
import { ReactComponent as QuestionSvg } from "../../../assets/question-circle.svg";



const NavigationBar=()=>(
    <div className="navigation-bar">
        <div className="logo-container">
            <Link  to="/" className="logo-link"> <span className="first">E</span><span className="second">sales</span></Link>
        </div>
        
            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search all products..." />
                <button className="search__button">
                search
                </button>
            </form>
       
        <div className="nav-lists">
            <div className="nav-items">
                <div className="help">
                    <QuestionSvg className="icon" />
                    <span className="text">Help</span> 
                </div>
                <div className="shopping-cart">
                    <Shoppingcart  className="icon"/>
                    <span className="text">Items</span> 
                    <div className="item-count">2</div>
                   
                </div>
            </div>
            <div className="profile">
                <UserSvg className="icon" />
                <span className="text">Account</span> 
            </div>
             <div className="profile">
                {/*  <Link to="/signUp">Signup</Link> */}
            </div> 
        </div>
    </div>
)
export default NavigationBar;