import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import DashLayout from "../../layout/DashLayout";
import UploadCard from "../../dashComponents/uploadCard";

const UploadFile = () => {
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);

  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  return (
    <DashLayout>
      <div className="product-dash-container">
        <div className="product-head-box">
          <div className="tit-body">
            <div className="dashbor-text">Uploaded files</div>
            <div className="dashbor-simple red">
              Manage your cloud storage for your uploaded files.
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
          </div>
          {/* <div className="emppty-pro-boc">
            <div className="dashbor-text">Your Uploaded files is Empty!</div>
            <div className="pro-simple">
              You do not have any uploaded files yet.
            </div>
          </div> */}
          <div className="nonempty-pro-container">
            <UploadCard />
            <UploadCard />
            <UploadCard />
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default UploadFile;
