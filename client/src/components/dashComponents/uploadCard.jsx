import { BsThreeDotsVertical } from "react-icons/bs";
import bottle from "../../assets/image/bottle.png";
import { useState } from "react";
import UploadModal from "./modal/uploadModal";
const UploadCard = () => {
  const [uploadToggleIcon, setUploadToggleIcon] = useState(false);
  const handleUploadToggleIcon = () => {
    setUploadToggleIcon(!uploadToggleIcon);
  };
  return (
    <div className="pro-card-container">
      <div className="pro-img-con">
        <img src={bottle} alt="" className="pro-img" />
        <BsThreeDotsVertical
          className="men-icon"
          onClick={handleUploadToggleIcon}
        />
        {uploadToggleIcon && <UploadModal />}
      </div>

      <div className="pro-card-body-box">
        <div className="product-name">20220208_145025.jpg</div>
        <div className="pro-type">412.3 KB</div>
      </div>
    </div>
  );
};

export default UploadCard;
