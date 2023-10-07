import logo from "../../assets/logo/Vector.png";
import { BsHandbag, BsCart, BsCloudUpload } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiX } from "react-icons/hi";
import { RiErrorWarningLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { MdPayment } from "react-icons/md";
import grove from "../../assets/image/grovlogo.png";
const MobileMenu = ({ toggleIcon, handleCloseToggleIcon }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to "auto" for instant scroll
    });
  };
  const handleNavLinkClick = () => {
    console.log("NavLink clicked");
    scrollToTop();
  };
  return (
    // <div className={toggleIcon ? "" : "mobile-menu-container"}>
    <div className="mobile-menu-container">
      <div className="menu-mobile-box">
        <div className="logo-nav">
          <div className="logo-image">
            <img src={logo} alt="" className="um-dash-logo" />
          </div>
          <div className="nav-down-box">
            <div className="grov-image-mill">
              <img src={grove} alt="" className="um-grov-logo" />
              <div className="grov-drink-box">
                <div className="grov-txt">Grove Mill</div>
                <div className="product-cat-con">
                  <div className="cat-it rm">
                    <div className="cat-item">Drinks</div>
                  </div>
                  <div className="cat-it">
                    <div className="cat-item">Food</div>
                  </div>
                  <div className="cat-it itno">
                    <div className="cat-item">Gin</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="notification-box">
              <HiX className="dash-menu" onClick={handleCloseToggleIcon} />
            </div>
          </div>
        </div>
        <div className="sidebar-box">
          <NavLink
            to="/dashproduct"
            exact
            onClick={handleNavLinkClick}
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
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
            }
          >
            <BsCart />
            <div className="sidebar-text">Orders</div>
          </NavLink>

          <NavLink
            to="/uploadfile"
            exact
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
            }
          >
            <BsCloudUpload />
            <div className="sidebar-text">Uploaded files</div>
          </NavLink>
          <NavLink
            to="/wallet"
            onClick={handleNavLinkClick}
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
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
            }
          >
            <HiOutlineReceiptRefund />
            <div className="sidebar-text">Refund request</div>
          <div className="sidebar-item-box">
            <PiWarningCircleBold />
            <div className="sidebar-text">Support ticket</div>
          </div>
          </NavLink>
          <NavLink
            to="/coupon"
            exact
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
            }
          >
            <TiDocumentText />
            <div className="sidebar-text">Coupons</div>
          </NavLink>

          <div className="logout-box mdown">
            <AiOutlineLogout />
            <div className="logout-text">Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
