import DashLayout from "../../layout/DashLayout";

const DashOrder = () => {
  return (
    <DashLayout>
      <div className="product-dash-container">
        <div className="product-head-box">
          <div className="tit-body">
            <div className="dashbor-text">Orders</div>
            <div className="dashbor-simple red">
              Find and manage your orders.
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default DashOrder;
