import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from '../model/Navigation';
import {useMediaQuery} from 'react-responsive';
import { useLocation } from 'react-router';
import { AuthBar } from '../model/Sidebar';
import { setGlobalState, useGlobalState } from '../common/store';
const Layout = ({ children }) => {
    const Location = useLocation()
    console.log(Location)
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [sideBar] = useGlobalState('sideBar')
    return (
        <>
            {sideBar && <AuthBar onClick={() => setGlobalState('sideBar' , false)} />}
            <Header />
                {children}
            <Footer />
           {isPortrait && Location.pathname !== '/auth/login' && <Navigation />}
        </>
    )
}

export default Layout;