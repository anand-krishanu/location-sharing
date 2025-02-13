import React, { useState } from 'react';
import './MainNavigation.css';
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
        <>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
            {drawerIsOpen ? (
                <SideDrawer>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks />
                    </nav>
                </SideDrawer>
            ) : null}
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    );
}

export default MainNavigation;