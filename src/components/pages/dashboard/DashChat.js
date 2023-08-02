import shoe from "../../../assets/products/product4.png";
import { HiOutlineCamera } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const DashChat = () => {
  return (
    <div className="chat-dash-container">
      <div className="name-act-box">
        <div className="customer-name">Tony Montana</div>
        <div className="act-tim">Active 2 days ago</div>
      </div>
      <div className="chat-main-container">
        <div className="date-chat">Thu 8 Jul 2023</div>
        <div className="pro-customer-box">
          <div className="profile-image">
            <img src={shoe} alt="" />
          </div>
          <div className="customer-chat-cont">
            <div className="pro-info">Product Information</div>
            <div className="img-title-box">
              <img src={shoe} alt="" />
              <div className="tit-word">Louis Vuitton Pam slipper</div>
            </div>
            <div className="min-msg">
              Hello! i want to make some few clarifications about this product.
              How will i get them?
            </div>
          </div>
        </div>
        <div className="seller-box">
          <div className="seller-chat-cont">
            Good afternoon! you can get them as soon as you order. Delivery
            takes about 3 days. it will be sent to your location and in the
            interim, you can use your order/tracking code to track the product
            untill it gets delivered. Thank you.
          </div>
          <div className="profile-image">
            <img src={shoe} alt="" />
          </div>
        </div>
      </div>
      <div className="inp-msg-cont">
        <HiOutlineCamera />
        <input
          type="text"
          className="chat-inp"
          placeholder="Type your response here..."
        />
        <IoSend />
      </div>
    </div>
  );
};

export default DashChat;
