import React, { useState } from "react";
import useWindowDimensions from "../../hooks/hook";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";

const Platfrom = () => {
  const { width, height } = useWindowDimensions();
  const [askQuestion, setAskQuestion] = useState(false);
  return (
    <div className="platform_wrapper">
      <div className="platform_header_content">
        <button className="max-w-[90px] blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] border-[0.1px] rounded-full border-[rgba(255, 255, 255, 0.3)] px-[20px] py-[7px] text-xs">
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
              <h2 className="text-lg font-manrope leading-[28px] font-medium">
                AI that explains the market — in real time
              </h2>
              <p className="text-[15px] font-manrope leading-[24px] font-normal text-[#adadad]">
                AI chat that helps you understand what’s driving markets — in
                plain language — as trends unfold.
              </p>
            </div>
            <div className="flatform_inner_content">
              <h4 className="font-manrope text-sm font-medium pb-5">
                ✨ Why did $NVDA drop this week?
              </h4>
              <p className="text-[#adadad] text-sm w-[400px] h-16">
                <Typewriter
                  words={[
                    `SNVDA saw a decline after earnings guidance missed analyst expectations Sector rotation also moved capital out of tech into value stocks`,
                  ]}
                  loop={true}
                  typeSpeed={30}
                  deleteSpeed={2}
                  delaySpeed={4000}
                  cursor
                  cursorStyle=" "
                />
              </p>
              <div className=" inline-flex gap-3 justify-start py-4">
                <button className="text-[#adadad] font-semibold opacity-80 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] border-[0.1px] rounded-full border-[rgba(255, 255, 255, 0.3)] px-[22px] py-[7px] text-xs">
                  <div className="absolute inset-0  flex-none"></div>
                  Refine this
                </button>
                <button className="text-[#adadad] blur-[0.3px] opacity-80 font-semibold mx-auto ring-4 ring-[#ffffff26] border-[0.1px] rounded-full border-[rgba(255, 255, 255, 0.3)] px-[22px] py-[7px] text-xs">
                  <div className="absolute inset-0  flex-none"></div>
                  Suggest other tickers
                </button>
              </div>
              <div
                className="relative bottom-0  h-14 border-t border-gray-500 text-sm text-[#adadad] font-manrope flex justify-between items-center overflow-hidden"
                onMouseEnter={() => setAskQuestion(true)}
                onMouseLeave={() => setAskQuestion(false)}
              >
                <AnimatePresence mode="wait">
                  {askQuestion ? (
                    <motion.div
                      key="hoverText"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute"
                    >
                      Ask why, what, or how...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="defaultText"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute"
                    >
                      Ask Mochi Intelligence..
                    </motion.div>
                  )}
                </AnimatePresence>
                <button className="text-white text-2xl absolute right-0 opacity-80 cursor-pointer">
                  ⌲
                </button>
              </div>
            </div>
          </div>
          <div className="platform_right_card"></div>
        </div>
      </div>
    </div>
  );
};
export default Platfrom;
