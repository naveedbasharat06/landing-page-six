import { motion } from "framer-motion";
import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import useWindowDimensions from "../../hooks/hook";
import tradingIndexBG from "../../images/tradingIndex_backgroundImg.avif";
import Marquee from "react-fast-marquee";
import colombia_uni from "../../images/colombia_uni.avif";
import corolal_uni from "../../images/corolal_uni.avif";
import london_uni from "../../images/london_school.avif";
import hardward_uni from "../../images/harward_uni.avif";
import menchester_institute from "../../images/menchester_institute.avif";
import pen_uni from "../../images/pen_uni.avif";
import stanford_uni from "../../images/stanford_uni.avif";
import Platfrom from "../platform/Platfrom";

const trusted_partners = [
  {
    Id: 1,
    name: "colombia University",
    partner_logo: colombia_uni,
  },
  {
    Id: 2,
    name: "corolal University",
    partner_logo: corolal_uni,
  },
  {
    Id: 3,
    name: "London University",
    partner_logo: london_uni,
  },
  {
    Id: 4,
    name: "harward University",
    partner_logo: hardward_uni,
  },
  {
    Id: 5,
    name: "menchester University",
    partner_logo: menchester_institute,
  },
  {
    Id: 6,
    name: "PEN University",
    partner_logo: pen_uni,
  },
  {
    Id: 7,
    name: "Stanford University",
    partner_logo: stanford_uni,
  },
];
const Hero = () => {
  const { width, height } = useWindowDimensions();
  const [speed, setSpeed] = useState(40);
  const [isHovered, setIsHovered] = useState(false);

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
            <span className="text-[8px]  rounded-full font-semibold shadow-lg">
              ◼
            </span>{" "}
            <span>Join Beta </span>{" "}
          </button>
        </span>
      </div>
    
      <div className="trading_trusted_partner relative">
        <img
          className={`relative -translate-y-32 top-0 left-0 right-0 w-full ${width > 810 ? 'md:h-full' : 'h-[300px] '} z-0`}
          src="https://framerusercontent.com/images/Cc2PWtVxiDrzLtySBWUTfls6ma4.svg"
          alt="backround imag"
        />
        <div className="trusted_partner_list">
          <img
            className="trading_indexBgImg"
            src={tradingIndexBG}
            alt="backround imag"
          />
          <div className="tradingIndex_trusted_partner">
            <div className="trusted_partner_text">
              <span className="text-[#908e8e]">Trusted by</span>
              <span> students</span>
              <span className="text-[#908e8e]"> and</span>
              <span> traders</span>
              <span className="text-[#908e8e]"> worldwide</span>
            </div>

            <div>
              <div
                className="relative max-w-[800px] mx-auto overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Marquee
                  gradient={true}
                  gradientWidth={width >= 767 ? 140 : 30}
                  gradientColor="#000"
                  speed={speed}
                  direction="left"
                  className={`transition-[animation-duration] duration-300`}
                  style={{
                    animationDuration: isHovered ? "5s" : "20s",
                    transition: "animation-duration 0.3s linear",
                  }}
                >
                  {trusted_partners.map((item) => (
                    <div
                      key={item.Id}
                      className="mx-4 md:mx-8  inline-flex items-center"
                    >
                      <img
                        src={item.partner_logo}
                        alt={item.name}
                        className="max-h-[65px] w-auto object-contain rounded-md cursor-pointer"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;
