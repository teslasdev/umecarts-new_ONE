import "../../styles/dash-css/sidebar.css";
import { BsGrid, BsHandbag, BsCart, BsCloudUpload } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { PiWarningCircleBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { MdPayment, MdOutlineSettings } from "react-icons/md";
const DashSidebar = () => {
  return (
    <div className="dash-sidebar-container">
      <div className="sidebar-box">
        <div className="sidebar-tem-com">
          <div className="sidebar-item-box">
            <BsGrid />
            <div className="sidebar-text">Dashboard</div>
          </div>
        </div>
        <div className="sidebar-item-box">
          <BsHandbag />
          <div className="sidebar-text">Product</div>
        </div>
        <div className="sidebar-item-box">
          <BsCart />
          <div className="sidebar-text">Orders</div>
        </div>
        <div className="sidebar-item-box">
          <BiMessageDots />
          <div className="sidebar-text">Message</div>
        </div>
        <div className="sidebar-item-box">
          <BsCloudUpload />
          <div className="sidebar-text">Uploaded files</div>
        </div>
        <div className="sidebar-item-box">
          <MdPayment />
          <div className="sidebar-text">Payment</div>
        </div>
        <div className="sidebar-item-box">
          <HiOutlineReceiptRefund />
          <div className="sidebar-text">Refund request</div>
        </div>
        <div className="sidebar-item-box">
          <PiWarningCircleBold />
          <div className="sidebar-text">Support ticket</div>
        </div>
        <div className="sidebar-item-box">
          <TiDocumentText />
          <div className="sidebar-text">Coupons</div>
        </div>
        <div className="sidebar-item-box">
          <MdOutlineSettings />
          <div className="sidebar-text">Shop settings</div>
        </div>
        <div className="logout-box">
          <AiOutlineLogout />
          <div className="logout-text">Log out</div>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
