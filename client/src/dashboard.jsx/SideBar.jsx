import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { HiChartPie, HiOutlineCloudUpload, HiTable } from "react-icons/hi";

const SideBar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Logout Successfully");
        navigate("/");
      })
      .catch((error) => {
        alert("Some error in Logout");
      });
  };
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="img">
          {user?.displayName || "Demo User"}
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/admin/dashboard">
              <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
            </Link>
            <Link to="/admin/dashboard/upload">
              <Sidebar.Item icon={HiOutlineCloudUpload}>
                Upload-Book
              </Sidebar.Item>
            </Link>
            <Link to="/admin/dashboard/manage">
              <Sidebar.Item icon={HiOutlineCloudUpload}>
                Manage-Book
              </Sidebar.Item>
            </Link>
            <Link className="/logout">
              <Sidebar.Item icon={HiTable}>
                <button onClick={handleLogout}>Log Out</button>
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
