import React from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent";
import "./Dashboard.scss"
import Control from "../Control/Control"
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="adminDashboard">
      <div className="dashboardContainer">
      <Layout>
        <div className="flex-left">
        <Sidebar />
        </div>
        <div className="flex-right">
          <Outlet></Outlet>
        </div>
      </Layout>
      </div>
    </div>
  );
};

export default Dashboard;
