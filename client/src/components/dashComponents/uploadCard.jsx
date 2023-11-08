import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import UploadModal from "./modal/uploadModal";
const UploadCard = ({
  item,
  setGallery,
  Gallery,
  setThumb,
  Thumb,
  setMeta,
  Meta,
  onChange
}) => {
  const [uploadToggleIcon, setUploadToggleIcon] = useState(false);
  const handleUploadToggleIcon = () => {
    setUploadToggleIcon(!uploadToggleIcon);
  };
  var split = item.link.split('.');
  var filename = split[0];
  var extension = split[1];
  if (filename.length > 10) {
    filename = filename.substring(0, 10);
  }
  const handleSelect = () => {
    if(Gallery.includes(item.link)) {
      const newSelected = []
      for (let i = 0; i < Gallery.length; i++) {
        if(Gallery[i] != item.link) {
          newSelected.push(Gallery[i])
        }
      }
      setGallery(newSelected);
    } else {
      setGallery((prev) => [...prev , item.link ])
    }
  }
  const handleThumb = () => {
    setThumb([item.link ])
  }
  const handleMeta = () => {
    setMeta([item.link ])
  }
  switch(onChange) {
    case 'Thumb':
      var Include = Thumb
      var Click = handleThumb
      break;
    case 'Gallery':
      var Include = Gallery
      var Click = handleSelect
    break;
    case 'Meta':
      var Include = Meta
      var Click = handleMeta
    break;
    default:
      var Include = Gallery
      var Click = handleSelect
  }
  return (
    <div className="pro-card-container h-[238px] w-[187px]" style={{background : Include.includes(item.link) ? '#F0F7FF' : 'white' , border : Include.includes(item.link) ? '1.5px solid #004399' : '1.5px solid #F0F7FF'}} onClick={Click}>
      <div className="pro-img-con h-[75%] rounded-t-[8px] w-full bg-gray-200">
        <img src={process.env.REACT_APP_S3_ENDPOINT+'/'+item.link} alt="" className="pro-img rounded-t-[8px] object-cover h-full w-full" />
      </div>

      <div className="pro-card-body-box">
        <div className="product-name">{filename + '.' + extension}</div>
        <div className="pro-type">{item.size >= 1000000 ? Math.floor(item.size / 1000000) + "MB" : Math.floor(item.size / 1000) + "KB"}</div>
      </div>
    </div>
  );
};

export default UploadCard;
