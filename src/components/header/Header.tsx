import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/hook";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import navbarlogo from "../../images/navbar-logo.png";

const Header = () => {
  const { width, height } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = width <= 810;

  // Close menu when window is resized above mobile breakpoint
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isMobile]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Updated variants for top-down shutter animation
  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  const navLinks = [
    { text: "Platform", link: "#" },
    { text: "How it works", link: "#" },
    { text: "For Traders", link: "#" },
    { text: "Features", link: "#" },
    { text: "Pricing", link: "#" },
    { text: "FAQ", link: "#" },
  ];

  return (
    <div className="header_wrapper">
      <div
        className={`header_inner_content xl:max-w-[1080] lg:max-w-[1070px] ${
          width >= 810 ? "mx-6" : "auto"
        } xl:mx-auto w-full`}
      >
        {width <= 810 && (
          <>
            <div className="flex flex-row justify-start ml-[24px] gap-[12px] items-center max-w-[200px]">
              <img
                className="absolute w-6 h-6  top-0 left-0"
                src={navbarlogo}
                alt="navbar logo"
              />
              <span className="joinBeta_btn">
                <button>{`${isOpen ? "Get template" : "Join Beta"}`} </button>
              </span>
              {isMobile && (
                <button
                  className="mobile-menu-button flex flex-col justify-center items-center w-5 h-5"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                  ></span>
                </button>
              )}
            </div>
          </>
        )}
        <div className="relative flex flex-row flex-nowrap mx-auto justify-between items-center overflow-visible">
          {width >= 810 && (
            <div>
              <img className="w-6 h-6" src={navbarlogo} alt="navbar logo" />
            </div>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex flex-row justify-center items-center gap-2">
              {navLinks.map((item, index) => (
                <span key={index} className="navbar_links font-manrope">
                  <Link className="navlink" to={item.link}>
                    {item.text}
                  </Link>
                </span>
              ))}
              <span className="joinBeta_btn">
                <button>Join Beta</button>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            <motion.div className="fixed top-14 left-0 h-full w-full bg-black z-50 pl-6 pt-9">
              <nav className="navbar_links flex flex-col">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    className="navlink transition-colors"
                    to={item.link}
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
