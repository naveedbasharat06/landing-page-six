import { motion } from "framer-motion";
import React from "react";
import { RightOutlined } from "@ant-design/icons";
import useWindowDimensions from "../../hooks/hook";
import tradingIndexBG from "../../images/tradingIndex_backgroundImg.avif";
const Hero = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="hero_section_main">
      <div className="textContent_section">
        <span className="hero_joinBeta_btn">
          <motion.button className="relative h-[33.5px] border border-white/30 font-medium text-[14.4px] rounded-full overflow-hidden px-[21.8px]">
            <span className="relative inline-block z-10">
              <span className="relative z-10 flex items-center">
                get early access <RightOutlined className="ml-2 w-4" />
              </span>
              <motion.span
                className="absolute inset-y-[0px] inset-x-4
                   left-4 right-4 w-[100px]
                   overflow-hidden
                   bg-gradient-to-r from-transparent via-white/30 to-transparent 
                   rounded-sm"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent, white 30%, white 70%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent, white 30%, white 70%, transparent)",
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            </span>
          </motion.button>
        </span>
        <div className="flex flex-col gap-[18px] md:gap-[24px]">
          <h1
            className={`${
              width >= 810 ? "text-[56px]" : "text-[38px]"
            }  text-white text-center  font-manrope font-normal leading-[56px] md:leading-[64px]`}
          >
            Trade smarter. Move faster. Stay ahead
          </h1>
          <p className="text-[17px] text-center font-manrope md:text-lg text-[#adadad] mx-auto leading-[26px] ">
            Built for traders who want more: live market intelligence, advanced
            screeners, and AI explanations to power your decisions.
          </p>
        </div>
        <span className="hero_joinBeta_btn_white_bg">
          <button className="">
            <span className="text-[10px]  rounded-fullfont-semibold">◼</span>{" "}
            <span>Join Beta </span>{" "}
          </button>
        </span>
      </div>
      {/* background image section */}
      <div className="trading_trusted_partner relative">
        <img
          className="relative  -translate-y-36 top-0 left-0 right-0 w-full h-full z-0"
          src="https://framerusercontent.com/images/Cc2PWtVxiDrzLtySBWUTfls6ma4.svg"
          alt="backround imag"
        />
        <div className="trusted_partner_list">
          <img
            className="trading_indexBgImg "
            src={tradingIndexBG}
            alt="backround imag"
          />
          <div className="tradingIndex_trusted_partner">
            <span>Trusted by</span>
            <span> student</span>
            <span> and</span>
            <span> worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
