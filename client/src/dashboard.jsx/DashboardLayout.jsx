import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="mt-[5rem]">
      <Navbar />
      <div className="flex gap-4 flex-col md:flex-row min-h-screen">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
