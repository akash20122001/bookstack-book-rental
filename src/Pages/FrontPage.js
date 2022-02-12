import React from "react";
import logo from "../assets/logo.png";
import studying from "../assets/studying.png";

function FrontPage() {
  return (
    <div  className="h-screen">
      <div className="navbar mb-2 px-10 shadow-sm bg-white text-neutral-content rounded-box">
        <div className="px-2 mx-2 navbar-start">
          <div className="flex items-stretch">
            <a className="btn btn-ghost btn-sm rounded-btn text-black font-bold">
              Home
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn text-black font-bold">
              About
            </a>
          </div>
        </div>
        <div className="hidden  my--2 navbar-center lg:flex">
          <img src={logo} className="w-40" alt="" />
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost btn-sm rounded-btn text-black font-bold">
            Contact
          </a>
        </div>
      </div>
      <div>
        <div className="hero  bg-base-200">
          <div className="text-center hero-content">
            <div className="max-w-2xl">
              <h1 className="text-black text-[4rem] leading-tight font-bold">Rent or Buy Genuine Books</h1>

              <div className="mb-5 text-lg text-neutral w-[65%] mx-auto font-bold">
                We provide 100% Genuine and perfect conditioned books for rental at minimal costs.
              </div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <img src={studying} className="w-[40%] mx-auto" alt="" />
    </div>
  );
}

export default FrontPage;
