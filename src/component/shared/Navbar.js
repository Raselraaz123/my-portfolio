import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='about'>About</Link>
      </li>
      <li>
        <Link to='project'>Project</Link>
      </li>
      <li>
        <Link to='contact'>Contact Me</Link>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1W-g2uAtwgqFfIpNGHETPbczwtgk6YX3t/view "
          target="_blank"
        >
          Resume
        </a>
      </li>
    </>
  );
  return (
    <div className="relative mb-16">
      <div class="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold z-50 fixed top-0 left-0 right-0">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-purple-400 rounded-box w-52  "
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" class="w-10">
            <img
              src="https://i.ibb.co/s1vL4tj/apple-touch-icon.png"
              alt="logo"
            />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 text-white">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;