import DashSidebar from "../../dashComponents/dashSidebar";
import DashNavbar from "../../dashComponents/navbar";
import "../../../styles/dash-css/style.css";
import MainSide from "../../dashComponents/mainSide";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashNavbar />
      <div className="sidebar-main-container">
        <DashSidebar />
        <MainSide />
      </div>
    </div>
  );
};

export default Dashboard;
