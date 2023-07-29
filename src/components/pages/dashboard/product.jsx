import { HiOutlineSearch } from "react-icons/hi";
import "../../../styles/dash-css/productDash.css";
import "../../../styles/dash-css/mainSide.css";
import { useState } from "react";
const DashProduct = () => {
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);
  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  return (
    <div className="product-dash-container">
      <div className="product-head-box">
        <div className="tit-body">
          <div className="dashbor-text">Products</div>
          <div className="dashbor-simple red">Manage or add new Products</div>
        </div>
        <div className="btn-new">
          <button className="dash-btn">Add new product</button>
        </div>
      </div>
      <div className="pro-main-container">
        <div className="search-procount-box">
          <div className="product-count">100 Products</div>
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
        <div className="emppty-pro-boc">
          <div className="dashbor-text">No Products Added!</div>
          <div className="pro-simple">
            You do not have any products added yet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProduct;
