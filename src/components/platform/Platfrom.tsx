import React, { useState } from "react";
import useWindowDimensions from "../../hooks/hook";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleOutlined } from "@ant-design/icons";

const Platfrom = () => {
  const { width, height } = useWindowDimensions();
  const [askQuestion, setAskQuestion] = useState(false);
  return (
    <div className="platform_wrapper">
      <div className="platform_header_content">
        <button className="max-w-[90px] blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] border-[0.1px] font-medium text-[#adadad] rounded-full border-[#8f8e8d] px-[18.4px] py-[7px] text-sm">
          <div className="absolute inset-0  flex-none"></div>
          Platform
        </button>
        <div className="flex flex-col gap-4 items-center">
          <h1
            className={`text-center ${
              width >= 810
                ? "md:text-[40px] leading-[48px]"
                : "text-[28px] tracking-[-0.56px] leading-[44px] "
            }  font-manrope font-normal`}
          >
            Your edge in the market starts here
          </h1>
          {width >= 810 && (
            <p className="w-full max-w-[640px] md:max-w-[520px] text-center text-base text-[#adadad] font-manrope font-normal leading-[24px]">
              Tools built to give traders deeper insights, faster execution, and
              an edge over the market.
            </p>
          )}
        </div>
      </div>
      {/*  */}
      <div className="platform_card_wrapper">
        <div className="platform_cards">
          <div className="platform_left_card">
            <div className="platform_card_content">
              <h2 className="text-base md:text-lg font-manrope leading-[28px] font-medium opacity-95">
                AI that explains the market — in real time
              </h2>
              <p className="text-[13px] md:text-[15px] font-manrope leading-[24px] font-normal text-[#adadad]">
                AI chat that helps you understand what’s driving markets — in
                plain language — as trends unfold.
              </p>
            </div>
            <div>
              <div className="relative  w-10 mx-auto">
                <button className="z-20 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] shadow-lg  rounded-lg p-3">
                  <span className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[60%] bg-gradient-to-r from-transparent via-white to-transparent" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    color="rgb(255, 150, 75)"
                    fill="currentColor"
                    // {...props}
                    style={{ width: 20, height: 20 }}
                  >
                    <g color="rgb(255, 150, 75)">
                      <path d="M132,24A100.11,100.11,0,0,0,32,124v84.33A15.69,15.69,0,0,0,47.67,224H132a100,100,0,0,0,0-200Zm0,184H48V124a84,84,0,1,1,84,84Zm12-80a12,12,0,1,1-12-12A12,12,0,0,1,144,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,100,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,188,128Z"></path>
                    </g>
                  </svg>
                </button>
                <div className="h-11 w-[1px] z-10 rounded-full mx-auto bg-gradient-to-b from-gray-800 via-orange-500 to-slate-200"></div>
              </div>
              <div className="flatform_inner_content relative overflow-hidden transition-all duration-500">
                <h4 className="font-manrope text-sm font-medium pb-5">
                  {width <= 810 && <div> ✨ </div>}
                  {width > 810 && <span> ✨ </span>} Why did $NVDA drop this
                  week?
                </h4>
                <p className="text-[#adadad] text-sm max-w-full md:max-w-[400px] h-[115px] md:h-16">
                  {width > 810 ? (
                    <Typewriter
                      words={[
                        `SNVDA saw a decline after earnings guidance missed analyst expectations Sector rotation also moved capital out of tech into value stocks`,
                      ]}
                      loop={true}
                      typeSpeed={30}
                      deleteSpeed={0}
                      delaySpeed={3000}
                      cursor
                      cursorStyle=" "
                    />
                  ) : (
                    "SNVDA saw a decline after earnings guidance missed analyst expectations Sector rotation also moved capital out of tech into value stocks"
                  )}
                </p>
                {width >= 810 && (
                  <div className="inline-flex gap-3 justify-start py-4">
                    <button className="text-[#adadad] font-semibold opacity-80 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] border-[0.1px] rounded-full border-[#8f8e8d] px-[22px] py-[7px] text-xs">
                      <div className="absolute inset-0  flex-none"></div>
                      Refine this
                    </button>
                    <button className="text-[#adadad] blur-[0.3px] opacity-80 font-semibold mx-auto ring-4 ring-[#ffffff26] border-[0.1px] rounded-full border-[#8f8e8d] px-[22px] py-[7px] text-xs">
                      <div className="absolute inset-0  flex-none"></div>
                      Suggest other tickers
                    </button>
                  </div>
                )}
                <div
                  className={`relative bottom-0 ${
                    askQuestion ? "opacity-100" : "opacity-85"
                  }  h-14 border-t border-gray-500 text-sm font-medium font-manrope flex justify-between items-center overflow-hidden`}
                  onMouseEnter={() => setAskQuestion(true)}
                  onMouseLeave={() => setAskQuestion(false)}
                >
                  <AnimatePresence mode="wait">
                    {askQuestion ? (
                      <motion.div
                        key="hoverText"
                        initial={{ y: 30, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        exit={{ y: 30, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="absolute"
                      >
                        Ask why, what, or how...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="defaultText"
                        initial={{ y: -30, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        exit={{ y: -30, opacity: 0 }} 
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="absolute text-[#adadad]"
                      >
                        Ask Mochi Intelligence...
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    className={`text-white  ${
                      askQuestion ? "opacity-100" : "opacity-85"
                    } transition-all duration-300 text-2xl absolute right-0 cursor-pointer`}
                  >
                    ➤
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="platform_right_card">
            <div className="platform_card_content">
              <h2 className="text-lg font-manrope leading-[28px] font-medium opacity-95">
                AI-backed explanations for price action
              </h2>
              <p className="text-[15px] font-manrope leading-[24px] font-normal text-[#adadad]">
                Get real-time AI explanations for stock moves — based on live
                data and actual market events.
              </p>
            </div>
            <div>
              <div className="relative w-10 mx-auto">
                <button className="z-20 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] shadow-lg  rounded-lg p-3">
                  <span className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[60%] bg-gradient-to-r from-transparent via-white to-transparent" />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    color="rgb(127, 247, 189)"
                    fill="currentColor"
                    style={{ width: 20, height: 20 }}
                  >
                    <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z" />
                  </svg>
                </button>
                <div className="h-11 w-[1px] z-10 rounded-full mx-auto bg-gradient-to-b from-gray-800 via-green-500 to-slate-200"></div>
              </div>
              <button className="border border-[#343231] mb-8 rounded-full px-9 py-2 text-[15px] font-manrope font-semibold leading-6">
                {width >= 810
                  ? "Factors moving the market now"
                  : "Experience the  magic  of AI"}
              </button>
              <div className="flatform_RightSide_inner_content relative overflow-hidden transition-all duration-500">
                <h4 className="font-manrope text-sm font-medium pb-4">
                  <CheckCircleOutlined
                    style={{ color: "#0B7812", marginRight: "8px", width: 18 }}
                  />
                  Key factors
                </h4>
                <div>
                  <h4 className="pb-2 text-sm text-[#d6d7d6]">
                    $SPY breakout — key drivers
                  </h4>
                  <ul className="list-disc list-inside">
                    <li className="text-sm text-[#8f8e8d] marker:text-white font-manrope">
                      Fed rate decision
                    </li>
                    <li className="text-sm py-1 text-[#8f8e8d] marker:text-white font-manrope">
                      $AAPL earnings surprise
                    </li>
                    <li className="text-sm text-[#8f8e8d] marker:text-white font-manrope">
                      Inflation data release
                    </li>
                  </ul>
                  <div className="w-full border-t border-gray-600 h-auto my-3" />
                  <div className=" inline-flex gap-3 justify-start py-2">
                    <button className="whitespace-nowrap text-[#adadad] font-semibold opacity-80 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] border-[0.1px] rounded-full border-[#8f8e8d] px-[22px] py-[7px] text-xs">
                      <div className="absolute inset-0  flex-none"></div>
                      Top factors
                    </button>
                    <button className=" whitespace-nowrap text-[#adadad] blur-[0.3px] opacity-80 font-semibold mx-auto ring-4 ring-[#ffffff26] border-[0.1px] rounded-full border-[#8f8e8d] px-[22px] py-[7px] text-xs">
                      <div className="absolute inset-0  flex-none"></div>
                      Latest events
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Platfrom;
