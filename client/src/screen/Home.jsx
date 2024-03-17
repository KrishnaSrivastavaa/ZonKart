import React from "react";
import NavBar from "../components/Home/NavBar";
import Sidebar from "../components/Home/Sidebar";
import SpecialOffer from "../components/Home/SpecialOffer";
import ProductDetails from "../components/Home/ProductDetails";
import data from "../components/Home/homeData.json";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-[80%] gap-5">
        <NavBar />
        <SpecialOffer data={data} />
        <ProductDetails data={data} />
      </div>
    </div>
  );
};

export default Home;
