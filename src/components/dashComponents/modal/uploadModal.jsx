import {
  MdOutlineDeleteForever,
  MdOutlineDownloadForOffline,
} from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
const UploadModal = () => {
  return (
    <div className="pro-modal-container">
      <div className="lis-item-box">
        <PiWarningCircleBold className="sha mod-icon" />
        <div className="item-tst">Details</div>
      </div>
      <div className="lis-item-box">
        <MdOutlineDownloadForOffline className="dup mod-icon" />
        <div className="item-tst">Download</div>
      </div>
      <div className="lis-item-box">
        <MdOutlineDeleteForever className="dele mod-icon" />
        <div className="item-tst">Delete</div>
      </div>
    </div>
  );
};

export default UploadModal;
