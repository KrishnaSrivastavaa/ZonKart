import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../../App.css";

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-row justify-evenly items-center gap-5">
      <div className="flex flex-row p-2 pr-4 bg-gray-100 gap-4 w-[80%]">
        <select className="p-2 bg-white">
          <option value="All categories">All Categories</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
        <input
          className="self-center text-sm bg-gray-100 w-[80%] h-full"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FiSearch className="icon" />
      </div>
      <GoBell className="icon" />
      <GoHeart className="icon" />
      <BsHandbag className="icon" />
      <p className="text-gray-300 text-3xl">|</p>
      <div className="flex flex-row gap-2">
        <div className="size-8 rounded-full bg-slate-600"></div>
        <MdKeyboardArrowDown className="icon" />
      </div>
    </div>
  );
}
