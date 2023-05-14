import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from '../model/Navigation';
import {useMediaQuery} from 'react-responsive';
const Layout = ({ children }) => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    return (
        <>
            <Header />
                {children}
            <Footer />
           {isPortrait &&  <Navigation />}
        </>
    )
}

export default Layout;