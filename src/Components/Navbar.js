import React from 'react'
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar  shadow-lg bg-white text-neutral-content rounded-box">
    <div className="px-2 mx-2 navbar-start">
      <img src={logo} className="w-[10rem]" alt="logo" />
    </div>
    <div className="hidden px-2 mx-2 navbar-center lg:flex">
      <div className="flex-1 lg:flex-none">
        <div className="form-control w-[20rem] mx-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-ghost bg-gray-100"
          />
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="navbar-end">
      <div className="flex items-stretch">
        <a className="btn btn-ghost btn-sm rounded-btn text-black">
          Login/Signup
        </a>
        <a className="btn btn-ghost btn-sm rounded-btn text-black">About</a>
        <a className="btn btn-ghost btn-sm rounded-btn text-black">
          Contact
        </a>
      </div>
      <button className="btn btn-square btn-ghost text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          ></path>
        </svg>
      </button>
    </div>
  </div>
  )
}

export default Navbar