import React, { useState } from "react";
import DashNavbar from "../dashComponents/navbar";
import DashSidebar from "../dashComponents/dashSidebar";
import DashFooter from "../dashComponents/dashFooter";
import "../../styles/dash-css/style.css";
import MobileMenu from "../dashComponents/mobileMenu";
import DashNavigator from "../dashComponents/dashNavigation";
const DashLayout = ({ children }) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(true);
  };
  const handleCloseToggleIcon = () => {
    setToggleIcon(false);
  };
  return (
    <>
      {/* <Header />
                {children}
            <Footer />
           {isPortrait &&  <Navigation />} */}
      <DashNavbar handleToggleIcon={handleToggleIcon} />
      {toggleIcon && (
        <MobileMenu
          toggleIcon={toggleIcon}
          handleCloseToggleIcon={handleCloseToggleIcon}
        />
      )}
      <div className="sidebar-main-container">
        <DashSidebar />
        {children}
      </div>

      <DashFooter />
      <DashNavigator />
    </>
  );
};

export default DashLayout;
