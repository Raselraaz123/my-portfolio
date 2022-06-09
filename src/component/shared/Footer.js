import React from 'react';
import google from '../../img/social/google.png'
import facebook from '../../img/social/facebook.png'
import github from "../../img/social/github.png";
import twitter from '../../img/social/twitter.png'
import linkedin from "../../img/social/linkedin.png";
const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-neutral text-neutral-content">
        <p className="text-center">
          <span class="  font-bold text-xl">Social</span>{" "}
        </p>
        <div className="flex justify-center items-center">
          <div class="grid grid-flow-col gap-4">
            <a target="_blank" href="https://github.com/Raselraaz123">
              <img src={github} alt="" />
            </a>
            <a target="_blank" href="https://twitter.com/RaazRasel2">
              <img src={twitter} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rasel-rana-821b60161"
            >
              <img src={linkedin} alt="" />
            </a>
            <a target="_blank" href="#">
              <img src={google} alt="" />
            </a>
            <a target="_blank" href="https://www.facebook.com/rasel.shekh.161">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;