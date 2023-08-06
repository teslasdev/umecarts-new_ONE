import { HiOutlineSearch } from "react-icons/hi";
import DashLayout from "../../layout/DashLayout";
import "../../../styles/dash-css/wallet.css";
import { useState } from "react";
import TransactionCard from "../../dashComponents/TransctionCard";
const Wallet = () => {
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);
  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  return (
    <DashLayout>
      <div className="product-dash-container">
        <div className="product-head-box">
          <div className="tit-body">
            <div className="dashbor-text">Payment</div>
            <div className="dashbor-simple red">
              Manage your transactions here
            </div>
          </div>
        </div>
        <div className="pro-main-container">
          <div className="nonempty-pro-container">
            <div className="dash-each-categor">
              <div className="category-title">Current Balance</div>
              <div className="category-number">₦50,000.00</div>
              <div className="dashbor-simple">
                You can send a withdrawal request for your current balance.
              </div>
              <div className="btn-new with">
                <button className="dash-btn">Send withdrawal request </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pro-main-container">
          <div className="dashbor-text">Transaction History</div>
          <div className="search-procount-box">
            <div className="navig-wallet-cont ">
              <div className="navig-each waal-act">All</div>
              <div className="navig-each">Credit</div>
              <div className="navig-each">Debit</div>
            </div>
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
            <div className="dashbor-text">
              Your Transaction History is Empty!
            </div>
            <div className="pro-simple">
              You do not have any transaction history yet.
            </div>
          </div> */}
          <div className="nonempty-wallet-container">
            <div className="trans-date">29th June, 2023</div>
            <TransactionCard
              credeb={"credit"}
              init={"C"}
              amount={"+50,000.00"}
              head={"Payment for successful product purchase"}
            />
            <TransactionCard
              credeb={"debit"}
              init={"D"}
              amount={"-20,000.00"}
              head={"Refund request successful"}
            />
            <div className="trans-date">22nd June, 2023</div>
            <TransactionCard
              credeb={"credit"}
              init={"C"}
              amount={"+19,000.00"}
              head={"Payment for successful product purchase"}
            />
            <TransactionCard
              credeb={"debit"}
              init={"D"}
              amount={"-1,000.00"}
              head={"Refund request successful"}
            />
            <TransactionCard
              credeb={"debit"}
              init={"D"}
              amount={"-9,000.00"}
              head={"Refund request successful"}
            />
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Wallet;
