import React from "react";
import NavBar from "../components/home/NavBar";
import Sidebar from '../components/Home/Sidebar'

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <NavBar />

    </div>
  );
};

export default Home;
