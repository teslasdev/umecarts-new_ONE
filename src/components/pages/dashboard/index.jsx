import DashSidebar from "../../dashComponents/dashSidebar";
import DashNavbar from "../../dashComponents/navbar";
import "../../../styles/dash-css/style.css";
// import MainSide from "../../dashComponents/mainSide";
import DashFooter from "../../dashComponents/dashFooter";
import { useState } from "react";
import DashNavigator from "../../dashComponents/dashNavigation";
import MobileMenu from "../../dashComponents/mobileMenu";
import DashProduct from "./product";

const Dashboard = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(true);
  };
  const handleCloseToggleIcon = () => {
    setToggleIcon(false);
  };
  return (
    <div className="dashboard-container">
      <DashNavbar handleToggleIcon={handleToggleIcon} />
      {toggleIcon && (
        <MobileMenu
          toggleIcon={toggleIcon}
          handleCloseToggleIcon={handleCloseToggleIcon}
        />
      )}
      <div className="sidebar-main-container">
        <DashSidebar />
        {/* <MainSide /> */}
        <DashProduct />
      </div>
      <DashFooter />
      <DashNavigator />
    </div>
  );
};

export default Dashboard;
