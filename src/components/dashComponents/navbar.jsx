import "../../styles/dash-css/navbar.css";
import logo from "../../assets/logo/Vector.png";
import { AiOutlineBell } from "react-icons/ai";
import grove from "../../assets/image/grovlogo.png";
const DashNavbar = () => {
  return (
    <div className="dash-navbar-container">
      <div className="logo-image">
        <img src={logo} className="um-dash-logo" />
      </div>
      <div className="nav-down-box">
        <div className="grov-image-mill">
          <img src={grove} className="um-grov-logo" />
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
          <AiOutlineBell className="dash-ico" />
          <div className="notif-txt">Notifications</div>
          <div className="not-count">1</div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
