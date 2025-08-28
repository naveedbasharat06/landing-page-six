import React from "react";
import useWindowDimensions from "../../hooks/hook";
import { Link } from "react-router-dom";
import navbarlogo from "../../images/navbar-logo.png";
import './Header.css'
const Header = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div> 
    <div className="header_wrapper flex items-center"> {/* Added flex and items-center */}
      <div className="header_inner_content xl:max-w-[1080] lg:max-w-[1070px] mx-5  xl:mx-auto w-full ">
        <div
          className={`relative flex flex-row flex-nowrap mx-auto justify-between items-center overflow-visible`}>
          <div>
            <img className="w-6 h-6" src={navbarlogo} alt="navbar logo" />
          </div>
          {/* navlinks */}
          <div className="">
            <div className="flex flex-row justify-center items-center gap-3 md:gap-6 lg:gap-7 xl:gap-10">
              <span className="navbar_links font-manrope">
                <Link className="navlink" to="#">Platform</Link>
              </span>
              <span className="navbar_links font-manrope">
                <Link className="navlink" to="#">How it works</Link>
              </span>{" "}
              <span className="navbar_links font-manrope">
                <Link className="navlink" to="#">For Traders</Link>
              </span>{" "}
              <span className="navbar_links font-manrope">
                <Link className="navlink" to="#">Features</Link>
              </span>
              <span className="navbar_links font-manrope">
                <Link className="navlink" to="#">Pricing</Link>
              </span>
              <span className="navbar_links font-manrope">
                <Link className="navlink" to="#"> FAQ</Link>
              </span>{" "}
             
              <span className="joinBeta_btn">
                <button className="">Join Beta</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Header;
