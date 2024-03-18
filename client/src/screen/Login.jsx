import React from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-700 to-blue-900 min-h-screen text-center flex flex-col justify-center  items-center">
        <div className="bg-white border border-black rounded-3xl px-[75px] py-[85px]">
          <img className="h-[60px] mx-auto" src={logo} alt="" />
          <h1 className="my-4 text-xl font-extrabold text-red-500">LOGIN</h1>
          <form action="">
            <div className="flex flex-col gap-3">
              <input
                className="border h-8 border-black rounded-lg text-center"
                type="text"
                placeholder="Username"
              />
              <input
                className="border h-8 border-black rounded-lg text-center"
                type="password"
                placeholder="Password"
              />
              <button className="hover:bg-red-500 hover:text-white hover:font-bold border h-8 border-black rounded-lg">
                Login
              </button>
            </div>
          </form>

          <br className="text-black" />

          <div>
            <p>Don't Have an Account?</p>
            <Link to="/signup" className="text-blue-800 hover:text-red-600">Sign Up</Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
