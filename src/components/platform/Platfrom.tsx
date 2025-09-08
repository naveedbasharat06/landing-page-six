import React, { useState } from "react";
import useWindowDimensions from "../../hooks/hook";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleOutlined, SendOutlined } from "@ant-design/icons";
import Marquee from "react-fast-marquee";
const connected_brokerage = [
  {
    Id: 1,
    name: "colombia University",
    partner_logo: "🎯",
  },
  {
    Id: 2,
    name: "corolal University",
    partner_logo: "🔖",
  },
  {
    Id: 3,
    name: "London University",
    partner_logo: "🪔",
  },
  {
    Id: 4,
    name: "harward University",
    partner_logo: "📛",
  },
  {
    Id: 5,
    name: "menchester University",
    partner_logo: "🌀",
  },
  {
    Id: 6,
    name: "PEN University",
    partner_logo: "🔆",
  },
  {
    Id: 7,
    name: "Stanford University",
    partner_logo: "🪀",
  },
];
const Platfrom = () => {
  const { width, height } = useWindowDimensions();
  const [askQuestion, setAskQuestion] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isHoveredConnectionsList, setIsHoveredConnectionList] =
    useState(false);

  const text =
    width >= 810
      ? "Factors moving the market now"
      : "Experience the magic of AI";

  return (
    <div className="platform_wrapper">
      <div className="platform_header_content">
        <button className="w-[88.28px] h-[32px] blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] font-manrope border-[0.1px] leading-[26px] tracking-[-0.4px] font-medium text-[#adadad] rounded-full border-[#8f8e8d] text-sm">
          <div className="absolute inset-0  flex-none"></div>
          Platform
        </button>
        <div className="flex flex-col gap-4 items-center ">
          <h1
            className={`text-center ${
              width >= 810
                ? "md:text-[40px] leading-[48px]"
                : "text-[28px] leading-[44px]"
            }  font-manrope font-normal text-[#ffffff] opacity-90`}
            style={{ letterSpacing: "-1.83px" }}
          >
            Your edge in the market starts here
          </h1>
          {width >= 810 && (
            <p className="w-full max-w-[640px] md:max-w-[520px] tracking-[-0.5px] opacity-75 text-center text-base text-[#adadad] font-manrope font-medium leading-[24px]">
              Tools built to give traders deeper insights, faster execution, and
              an edge over the market.
            </p>
          )}
        </div>
      </div>
      {/*  */}
      <div className="platform_card_wrapper">
        <div className="platform_cards">
          <div className="platform_left_card z-10">
            <div
              className="absolute bottom-0 left-0 right-0 h-[70%]"
              style={{
                backgroundImage: `url(${require("../../images/dotteddarkBg.jpg")})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            />
            <div className="platform_card_content">
              <h2 className="text-base md:text-lg font-manrope leading-[28px] tracking-[-0.4px] font-medium opacity-95">
                AI that explains the market — in real time
              </h2>
              <p className="text-[13px] md:text-[15px] font-manrope leading-[24px] tracking-[-0.4px] font-normal text-[#adadad]">
                AI chat that helps you understand what’s driving markets — in
                plain language — as trends unfold.
              </p>
            </div>
            <div className="relative z-10">
              <div className="relative  w-10 mx-auto">
                <button className="z-20 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] shadow-lg  rounded-lg p-[9px]">
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
                <div className="h-11 w-[1.2px] z-10 rounded-full mx-auto bg-gradient-to-b from-gray-800 via-orange-500 to-slate-200"></div>
              </div>
              <div>
                <div className="flatform_inner_content relative overflow-hidden transition-all duration-500 z-50">
                  <h4 className="font-manrope text-sm leading-[26px] tracking-[-0.2px] font-medium pb-6">
                    {width <= 810 && <div> ✨ </div>}
                    {width > 810 && <span className="mr-2"> ✨ </span>} Why did
                    $NVDA drop this week?
                  </h4>
                  <p className="text-[#adadad] tracking-[-0.4px] text-sm max-w-full md:max-w-[400px] h-[115px] md:h-16">
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
                    <div className="inline-flex gap-3 justify-start py-5">
                      <button className="text-[#adadad] font-manrope shadow-[inset_0px_0px_10px_1px_rgba(237,238,233,0.3)] transition-all duration-500 hover:ring-4 ring-[#ffffff26] leading-normal font-semibold opacity-80 blur-[0.3px] mx-auto rounded-full w-[102.6px] h-[33px] text-sm">
                        <div className="absolute inset-0  flex-none border border-white/20 rounded-full"></div>
                        Refine this
                      </button>
                      <button className="text-[#adadad] font-manrope shadow-[inset_0px_0px_10px_1px_rgba(237,238,233,0.3)] transition-all duration-500 hover:ring-4 ring-[#ffffff26] leading-normal  blur-[0.3px] opacity-80 font-semibold mx-auto  rounded-full w-[174.6px] h-[33px] text-sm">
                        <div className="absolute inset-0  flex-none border border-white/20 rounded-full"></div>
                        Suggest other tickers
                      </button>
                    </div>
                  )}
                </div>
                <div
                  className={` relative bottom-0 ${
                    askQuestion ? "opacity-100" : "opacity-85"
                  }  h-16 border border-[#343231]  rounded-b-[16px] text-sm bg-[#000] font-medium font-manrope flex justify-between items-center overflow-hidden px-5`}
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
                        className="absolute font-semibold"
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
                        className="absolute text-[#adadad] font-semibold"
                      >
                        Ask Mochi Intelligence...
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    className={`text-white  ${
                      askQuestion ? "opacity-100" : "opacity-85"
                    } transition-all duration-300 absolute right-5 cursor-pointer`}
                  >
                    <SendOutlined style={{ fontSize: 20 }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="platform_right_card">
            <div
              className="absolute bottom-0 left-0 right-0 h-[70%] "
              style={{
                backgroundImage: `url(${require("../../images/dotteddarkBg.jpg")})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            />
            <div className="platform_card_content">
              <h2 className="text-lg font-manrope leading-[28px] text-[#ffffff] font-medium opacity-95 tracking-[-0.4px]">
                AI-backed explanations for price action
              </h2>
              <p className="text-[15px] font-manrope leading-[24px] tracking-[-0.3px] font-normal text-[#adadad]">
                Get real-time AI explanations for stock moves — based on live
                data and actual market events.
              </p>
            </div>
            <div>
              <div className="relative w-10 mx-auto">
                <button className="z-20 blur-[0.3px]  mx-auto ring-4 ring-[#ffffff26] shadow-lg  rounded-lg p-[9px]">
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
                <div className="h-11 w-[1.3px] z-10 rounded-full mx-auto bg-gradient-to-b from-gray-800 via-green-500 to-slate-200"></div>
              </div>
              <button
                className="relative lg:left-[-38px] border border-[#343231] mb-6 rounded-full px-9 py-2 text-[15px] font-manrope font-semibold leading-6 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span className="relative inline-block">
                  {/* Text with highlight behind */}
                  <span className="relative z-10">{text}</span>

                  {/* Expanding highlight */}
                  <motion.span
                    className="absolute top-0 bottom-0 bg-green-200/20 z-0"
                    initial={{ width: "0%", left: "15%", opacity: 0 }}
                    animate={
                      hovered
                        ? { width: "70%", opacity: 1 }
                        : { width: "0%", opacity: 0 }
                    }
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{ borderRadius: "2px" }}
                  />

                  {/* Moving cursor (caret) */}
                  <motion.span
                    className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
                    initial={{ x: "0%", left: "15%" }}
                    animate={hovered ? { x: "70%" } : { x: "0%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </span>
              </button>
              <div>
                <div className="flatform_RightSide_inner_content relative overflow-hidden transition-all duration-500">
                  <h4 className="font-manrope text-sm font-medium pb-4">
                    <CheckCircleOutlined
                      style={{
                        color: "#0B7812",
                        marginRight: "8px",
                        width: 18,
                      }}
                    />
                    Key factors
                  </h4>
                  <div className="pb-5">
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
                  </div>
                </div>
                <div className="h-14 border border-[#363232] bg-[#000]  border-t-0 rounded-b-[16px] w-full z-20 relative">
                  <div className="flex gap-3 py-3 px-4 justify-start border-t border-[#343231]">
                    <button className="whitespace-nowrap font-manrope text-[#cab4b4] shadow-[inset_0px_0px_10px_1px_rgba(237,238,233,0.3)] transition-all duration-500 hover:ring-4 ring-[#ffffff26] leading-normal font-semibold opacity-80 blur-[0.3px] rounded-full px-[22px] py-[6px] text-sm">
                      <div className="absolute inset-0  flex-none border border-white/20 rounded-full"></div>
                      Top factors
                    </button>
                    <button className=" whitespace-nowrap font-manrope text-[#adadad] shadow-[inset_0px_0px_10px_1px_rgba(237,238,233,0.3)] transition-all duration-500 hover:ring-4 ring-[#ffffff26] leading-normal blur-[0.3px] opacity-80 font-semibold rounded-full px-[22px] py-[6px] text-sm">
                      <div className="absolute inset-0  flex-none border border-white/20 rounded-full"></div>
                      Latest events
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* trading performance */}
        <div className="trading_performance_record">
          <div className="trading_summary">
            <div className="platform_card_content">
              <h2 className="text-lg font-manrope leading-[28px] tracking-[-0.4px] font-medium opacity-95">
                Trading performance over time
              </h2>
              <p className="text-[14px] md:text-[15px] max-w-[95%] md:max-w-[440px] 2xl:max-w-[100%] font-manrope leading-[24px] tracking-[-0.3px] font-normal text-[#adadad]">
                Track your trading activity and PnL trends — spot patterns and
                improve results over time.
              </p>
            </div>
            <div>
              <div className="relative z-10">
                <div className="relative  w-10 mx-auto">
                  <button className="z-20 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] shadow-lg  rounded-lg p-[9px]">
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
                      <g color="rgb(181, 127, 247)">
                        <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z" />
                      </g>
                    </svg>
                  </button>
                  <div className="h-11 w-[1.2px] z-10 rounded-full mx-auto bg-gradient-to-b from-gray-800 via-purple-500 to-slate-200"></div>
                </div>
              </div>
              <div
                className="flatform_trading_summary_inner_content relative overflow-hidden transition-all duration-500 z-50"
                onMouseEnter={() => setAskQuestion(true)}
                onMouseLeave={() => setAskQuestion(false)}
              >
                <div className="trading_summary_card">
                  <div className="flex gap-2 items-center">
                    <p>🪁</p>
                    <h3 className="text-sm font-manrope leading-[26px] tracking-[-0.4px] font-semibold">
                      Trading summary
                    </h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#8f8e8d] text-xs leading-[20px] tracking-[-0.4px]">
                        Winning trades
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-3 text-center font-manrope text-base">
                          <AnimatePresence mode="wait">
                            {askQuestion ? (
                              <motion.div
                                key="hoverText"
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 15, opacity: 0 }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeInOut",
                                }}
                                className="relative text-white text-center"
                              >
                                12
                              </motion.div>
                            ) : (
                              <motion.div
                                key="defaultText"
                                initial={{ y: -15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -15, opacity: 0 }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeInOut",
                                }}
                                className="relative text-white text-center"
                              >
                                •
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <span className="text-base text-[#adadad] font-manrope font-semibold pl-2">
                          {" "}
                          12 trades
                        </span>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <p className="text-[#8f8e8d] text-xs leading-[20px] tracking-[-0.4px]">
                        Losing trades
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-3 text-center font-manrope text-base">
                          <AnimatePresence mode="wait">
                            {askQuestion ? (
                              <motion.div
                                key="hoverText"
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 15, opacity: 0 }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeInOut",
                                }}
                                className="relative text-white"
                              >
                                2.5
                              </motion.div>
                            ) : (
                              <motion.div
                                key="defaultText"
                                initial={{ y: -15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -15, opacity: 0 }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeInOut",
                                }}
                                className="relative text-white text-center"
                              >
                                •
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <span className="text-base text-[#adadad]  font-manrope font-semibold pl-2">
                          {" "}
                          3 trades
                        </span>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <p className="text-[#8f8e8d] text-xs leading-[20px] tracking-[-0.4px]">
                        Held Positions
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-3 text-center font-manrope text-base">
                          <AnimatePresence mode="wait">
                            {askQuestion ? (
                              <motion.div
                                key="hoverText"
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 15, opacity: 0 }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeInOut",
                                }}
                                className="relative text-white "
                              >
                                1.5
                              </motion.div>
                            ) : (
                              <motion.div
                                key="defaultText"
                                initial={{ y: -15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -15, opacity: 0 }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeInOut",
                                }}
                                className="relative text-white text-center"
                              >
                                •
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <span className="text-base text-[#adadad]  font-manrope font-semibold pl-1">
                          {" "}
                          5 Positions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* trading  */}
              <div
                className="resheduling_today"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="flex gap-2 items-center justify-between mb-3">
                  <h3 className="text-sm text-[#adadad] font-manrope font-semibold">
                    John Studio Meet
                  </h3>
                  <p className="text-xs text-[#adadad] font-manrope">
                    Today 12:00pm
                  </p>
                </div>
                {/*  */}
                <div className="flex gap-2 items-center justify-between mb-3">
                  <h3 className="text-sm text-white font-manrope font-semibold">
                    ● PnL today: +4.2%
                  </h3>
                  <p className="text-xs text-[#adadad] font-manrope">
                    Updated 10 min ago
                  </p>
                </div>
                <button
                  className={`relative overflow-hidden bg-[#171615] text-[13px] font-manrope font-semibold rounded-full w-full py-2 transition-all duration-500 flex items-center justify-center ${
                    hovered ? "bg-[#1C0F2E] text-[#c08cff]" : "text-[#d6d7d6]"
                  }`}
                >
                  <span className="absolute left-[32%]">✨</span>
                  <span className="relative h-[20px] flex items-center justify-center">
                    <span
                      className={`absolute transition-all duration-500 transform ${
                        hovered
                          ? "-translate-y-full opacity-0"
                          : "translate-y-0 opacity-100"
                      }`}
                    >
                      Reviewing
                    </span>
                    <span
                      className={`absolute transition-all duration-500 transform ${
                        hovered
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }`}
                    >
                      Reschedule?
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* connected brokerage */}
          <div className="connected_brokerage">
            <div className="platform_card_content">
              <h2 className="text-base md:text-lg font-manrope leading-[28px] tracking-[-0.4px] font-medium opacity-95">
                Connected Brokerages
              </h2>
              <p className="text-[13px] md:text-[15px] font-manrope leading-[24px] tracking-[-0.4px] font-normal text-[#adadad]">
                Link your brokerage accounts to MochiTrade for real-time
                trading, portfolio tracking, and AI-powered insights.”
              </p>
            </div>
            {/*  */}
            <div>
              <div className="relative z-10">
                <div className="relative  w-10 mx-auto">
                  <button className="z-20 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] shadow-lg  rounded-lg p-[9px]">
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
                      <g color="rgb(84, 158, 255)">
                        <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path>
                      </g>
                    </svg>
                  </button>
                  <div className="h-11 w-[1.2px] z-10 rounded-full mx-auto bg-gradient-to-b from-gray-800 via-purple-500 to-slate-200"></div>
                </div>
              </div>
              <div className="mx-auto l max-w-[400px] text-center connection_brokerage_button">
                <button className="relative text-[#549EFF] font-bold rounded-full border border-[rgba(48,135,235,0.29)] bg-[#000] w-[193.12px] h-[28px] text-[10px] uppercase font-manrope">
                  <span className="text-[16px] mr-2 font-bold">◌</span>
                  {""} Connecting brokerage...”
                </button>
              </div>
            </div>
            <div className="">
              <div
                className="relative max-w-[442px] py-[6px] mx-auto overflow-hidden"
                onMouseEnter={() => setIsHoveredConnectionList(true)}
                onMouseLeave={() => setIsHoveredConnectionList(false)}
              >
                <Marquee
                  gradient={true}
                  gradientWidth={width >= 767 ? 140 : 30}
                  gradientColor="#000"
                  speed={50}
                  direction="left"
                  className={`transition-[animation-duration] duration-300 overflow-hidden`}
                  style={{
                    animationDuration: isHoveredConnectionsList ? "5s" : "20s",
                    transition: "animation-duration 0.3s linear",
                  }}
                >
                  {connected_brokerage.map((item, idx) => (
                    <div
                      key={item.Id}
                      className="mx-2 inline-flex items-center"
                    >
                      <p className="bg-[#000] px-4 py-[14px] rounded-full border-4 border-[rgba(255,255,255,0.16)]">
                        {item.partner_logo}
                      </p>
                    </div>
                  ))}
                </Marquee>
              </div>
              <div
                className="relative max-w-[442px] py-[6px] mx-auto overflow-hidden"
                onMouseEnter={() => setIsHoveredConnectionList(true)}
                onMouseLeave={() => setIsHoveredConnectionList(false)}
              >
                <Marquee
                  gradient={true}
                  gradientWidth={width >= 767 ? 140 : 30}
                  gradientColor="#000"
                  speed={50}
                  direction="right"
                  className={`transition-[animation-duration] duration-300 overflow-hidden`}
                  style={{
                    animationDuration: isHoveredConnectionsList ? "5s" : "20s",
                    transition: "animation-duration 0.3s linear",
                  }}
                >
                  {connected_brokerage.map((item, idx) => (
                    <div
                      key={item.Id}
                      className="mx-2 inline-flex items-center"
                    >
                      <p className="bg-[#000] px-4 py-[14px] rounded-full border-4 border-[rgba(255,255,255,0.16)]">
                        {item.partner_logo}
                      </p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        {/* trading performance */}
        <div className="trading_performance">
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Platfrom;
