import React from 'react';
import "./item-nav.styles.scss";

import NavItemsList from '../../../components/nav-items/nav-items.component';
import AuthButton from '../../../components/custom-buttons/submit-buttons/customSubmitButton.component';
const SidenavItemsNavigation=()=>{
    return(
        <div className="sidenav-items-container">

                <div className="nav-items-text">
                    <h2 className="nav-items-text nav-items-text--1 ">Products categories</h2>
                </div>
                <NavItemsList />
                <div className="explorer">
                    <AuthButton />
                </div>
        </div>
    )
}
export default SidenavItemsNavigation;