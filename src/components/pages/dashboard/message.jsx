import { useState } from "react";
import DashLayout from "../../layout/DashLayout";
import "../../../styles/dash-css/message.css";
// import { HiOutlineSearch } from "react-icons/hi";
// import MessageCard from "../../dashComponents/MessageCard";
import DashChat from "./DashChat";

const DashMessage = () => {
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);
  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  return (
    <DashLayout>
      <div className="product-dash-container">
        {/* <div className="product-head-box">
          <div className="tit-body">
            <div className="dashbor-text">Message</div>
            <div className="dashbor-simple red">
              Messages from buyers & potential buyers.
            </div>
          </div>
        </div>
        <div className="pro-main-container">
          <div className="search-procount-box rgh">
            <input
              type="text"
              className={searchToggleIcon ? "search-inp disp" : "search-inp"}
              placeholder="Search for a product..."
            />
            <HiOutlineSearch
              className="search-icon"
              onClick={handleSearchToggleIcon}
            />
          </div> */}
        {/* <div className="emppty-pro-boc">
            <div className="dashbor-text">Your Message is Empty!</div>
            <div className="pro-simple">
            You do not have any message yet.
            </div>
          </div> */}
        {/* <div className="nonempty-pro-container">
            <MessageCard />
          </div>
        </div> */}
        <DashChat />
      </div>
    </DashLayout>
  );
};

export default DashMessage;
