import {
  MdOutlineDeleteForever,
  MdOutlineDownloadForOffline,
} from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
const UploadModal = () => {
  return (
    <div className="pro-modal-container">
      <div className="lis-item-box">
        <RiErrorWarningLine className="sha mod-icon" />
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
