import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { PiCopySimpleLight, PiShareNetworkBold } from "react-icons/pi";

const ProductModal = () => {
  return (
    <div className="pro-modal-container">
      <div className="lis-item-box">
        <FiEdit className="edi mod-icon" />
        <div className="item-tst">Edit</div>
      </div>
      <div className="lis-item-box">
        <PiCopySimpleLight className="dup mod-icon" />
        <div className="item-tst">Duplicate</div>
      </div>
      <div className="lis-item-box">
        <PiShareNetworkBold className="sha mod-icon" />
        <div className="item-tst">Share</div>
      </div>
      <div className="lis-item-box">
        <MdOutlineDeleteForever className="dele mod-icon" />
        <div className="item-tst">Delete</div>
      </div>
    </div>
  );
};

export default ProductModal;
