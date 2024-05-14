import React, { useContext } from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiOutlineCloudUpload,
  HiInbox,
  HiUser,
  HiShoppingBag,
} from "react-icons/hi";
import { Sidebar } from "flowbite-react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom"; 
// import profilePic from "../../assets/profile.png"

const SideBar = () => {
  const { logOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 
  const {user} = useContext(AuthContext);
  console.log(user);

  const handleLogout = async () => {
    try {
      await logOut(); 
      navigate("/login"); 
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="Flowbite logo">
        {user?.displayName || "Demo user"}
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item href="/users" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/products" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiArrowSmRight} onClick={handleLogout}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
