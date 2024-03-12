import React from "react";
import NavBar from "../components/Home/NavBar";
import Sidebar from '../components/Home/Sidebar'

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-[80%]">
      <NavBar />
      </div>

    </div>
  );
};

export default Home;
