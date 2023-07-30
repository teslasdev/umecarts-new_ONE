import "../../styles/dash-css/sidebar.css";
import { BsGrid, BsHandbag, BsCart, BsCloudUpload } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { PiWarningCircleBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { MdPayment, MdOutlineSettings } from "react-icons/md";
const DashSidebar = ({ toggleIcon }) => {
  return (
    <div className="dash-sidebar-container">
      <div className="sidebar-box">
        <NavLink
          to="/dashboard"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <BsGrid />
          <div className="sidebar-text">Dashboard</div>
        </NavLink>
        <NavLink
          to="/dashproduct"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <BsHandbag />
          <div className="sidebar-text">Product</div>
        </NavLink>
        <NavLink
          to="/dashorder"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <BsCart />
          <div className="sidebar-text">Orders</div>
        </NavLink>
        <NavLink
          to="/message"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <IoChatboxEllipsesOutline />
          <div className="sidebar-text">Message</div>
        </NavLink>
        <NavLink
          to="/uploaded"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <BsCloudUpload />
          <div className="sidebar-text">Uploaded files</div>
        </NavLink>
        <NavLink
          to="payment"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <MdPayment />
          <div className="sidebar-text">Payment</div>
        </NavLink>
        <NavLink
          to="/refund"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <HiOutlineReceiptRefund />
          <div className="sidebar-text">Refund request</div>
        </NavLink>
        <NavLink
          to="support"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <PiWarningCircleBold />
          <div className="sidebar-text">Support ticket</div>
        </NavLink>
        <NavLink
          to="coupon"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <TiDocumentText />
          <div className="sidebar-text">Coupons</div>
        </NavLink>
        <NavLink
          to="shop"
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <MdOutlineSettings />
          <div className="sidebar-text">Shop settings</div>
        </NavLink>
        <div className="logout-box">
          <AiOutlineLogout />
          <div className="logout-text">Log out</div>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
