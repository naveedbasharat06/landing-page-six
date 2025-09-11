import React from "react";
import useWindowDimensions from "../../hooks/hook";
import tradingIndexBG from "../../images/howitworkTradingBG.png";
const HowitWorks = () => {
  const { width, height } = useWindowDimensions();
  const stats = [
    {
      value: "91%",
      text: "of users say Mochi Intelligence gives them a real trading edge",
    },
    {
      value: "64%",
      text: "execute trades faster with Mochi's AI-powered insights",
    },
    {
      value: "12x",
      text: "more high-quality trade ideas surfaced vs before",
    },
  ];
  return (
    <div className="howitwork_main_section">
      <div className="howitwork_content_section">
        <div className="howitworks_header_content">
          <button className="w-[114.28px] h-[32px] blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] font-manrope border-[0.1px] leading-[26px] tracking-[-0.4px] font-medium text-[#adadad] rounded-full border-[#8f8e8d] text-sm">
            <div className="absolute inset-0  flex-none"></div>
            How it works
          </button>
          <div className="flex flex-col gap-4 items-center max-w-[640px]">
            <h1
              className={`text-center transform scale-y-90 ${
                width >= 810
                  ? "md:text-[40px] leading-[52px]"
                  : "text-[28px] leading-[44px]"
              }  font-manrope font-normal text-[#ffffff]`}
              style={{ letterSpacing: "-1.83px" }}
            >
              How Mochi Intelligence powers your trading edge
            </h1>
          </div>
        </div>
        {/* how it works flex section */}
        <div className="howitworks_flex_section">
          {/* how it works left felx cols */}
          <div className="howitworks_left_section">
            <div className="howitworks_left_flex_col">
              <div className="howitworks_card_flex">
                <div className="relative w-[60px] mx-auto p-1 mt-2">
                  <button className="z-20 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] shadow-lg  rounded-lg py-[13px] px-[15px]">
                    <span className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[60%] bg-gradient-to-r from-transparent via-white to-transparent" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      focusable="false"
                      color="rgb(255, 150, 75)"
                      fill="currentColor"
                      // {...props}
                      style={{ width: 16, height: 20 }}
                    >
                      <g color="var(--token-e67cab62-f01f-4ef5-bf80-b623efaf7ee2, rgb(226, 226, 226))">
                        <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
                      </g>
                    </svg>
                  </button>
                  <div
                    className={`${
                      width > 1200
                        ? " h-[178.5px]"
                        : width > 810
                        ? "h-[36px]"
                        : "h-[76px]"
                    } w-[3px] z-10 rounded-full mt-4 mx-auto bg-[#fff3]`}
                  ></div>
                </div>
                <div>
                  <div className="howitworks_card_content">
                    <h2 className="text-base md:text-lg font-manrope text-[#ffffff] leading-[28px] tracking-[-0.4px] font-medium opacity-95 transform scale-y-90">
                      Connect your brokerage and start trading smarter
                    </h2>
                    <p className="text-[13px] md:text-[15px] font-manrope leading-[26px] xl:leading-[24px] tracking-[-0.4px] font-normal text-[#908e8e] transform scale-y-90">
                      Link your account to MochiTrade in minutes — no installs,
                      no complexity. Your trading edge starts here.
                    </p>
                  </div>
                </div>
              </div>
              <div className="howitworks_card_flex">
                <div className="relative w-[60px] mx-auto p-1 mt-2">
                  <button className="z-20 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] shadow-lg  rounded-lg py-[13px] px-[15px]">
                    <span className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[60%] bg-gradient-to-r from-transparent via-white to-transparent" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      focusable="false"
                      color="rgb(255, 150, 75)"
                      fill="currentColor"
                      // {...props}
                      style={{ width: 16, height: 20 }}
                    >
                      <g color="var(--token-e67cab62-f01f-4ef5-bf80-b623efaf7ee2, rgb(226, 226, 226))">
                        <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
                      </g>
                    </svg>
                  </button>
                  <div
                    className={`${
                      width > 1200
                        ? " h-[178.5px]"
                        : width > 810
                        ? "h-[36px]"
                        : "h-[76px]"
                    }  w-[3px] z-10 rounded-full mt-4 mx-auto bg-[#fff3]`}
                  ></div>
                </div>
                <div>
                  <div className="howitworks_card_content">
                    <h2 className="text-base md:text-lg font-manrope text-[#ffffff] leading-[28px] tracking-[-0.4px] font-medium opacity-95 transform scale-y-90">
                      AI insights — live and actionable
                    </h2>
                    <p className="text-[13px] md:text-[15px] font-manrope leading-[26px] xl:leading-[24px] tracking-[-0.4px] font-normal text-[#908e8e] transform scale-y-90">
                      Mochi Intelligence continuously analyzes market events and
                      stock movements, delivering real-time insights as trades
                      happen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="howitworks_card_flex">
                <div className="relative w-[56px] mx-auto p-1 mt-2">
                  <button className="z-20 blur-[0.3px] mx-auto ring-4 ring-[#ffffff26] shadow-lg  rounded-lg py-[13px] px-[15px]">
                    <span className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[60%] bg-gradient-to-r from-transparent via-white to-transparent" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      focusable="false"
                      color="rgb(255, 150, 75)"
                      fill="currentColor"
                      // {...props}
                      style={{ width: 16, height: 20 }}
                    >
                      <g color="var(--token-e67cab62-f01f-4ef5-bf80-b623efaf7ee2, rgb(226, 226, 226))">
                        <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
                      </g>
                    </svg>
                  </button>
                  {width < 1200 ? (
                    <div
                      className={`${
                        width > 1200
                          ? " h-[178.5px]"
                          : width > 810
                          ? "h-[36px]"
                          : "h-[76px]"
                      }  w-[3px] z-10 rounded-full mt-4 mx-auto bg-[#fff3]`}
                    ></div>
                  ) : null}
                </div>
                <div>
                  <div className="howitworks_card_content">
                    <h2 className="text-base md:text-lg font-manrope text-[#ffffff] leading-[28px] tracking-[-0.4px] font-medium opacity-95 transform scale-y-90">
                      Always improving — more data, faster edge
                    </h2>
                    <p className="text-[13px] md:text-[15px] font-manrope leading-[26px] xl:leading-[24px] tracking-[-0.4px] font-normal text-[#908e8e] transform scale-y-90">
                      We’re constantly expanding Mochi Intelligence with deeper
                      AI models, new data sources, and speed upgrades — so you
                      stay ahead of the market.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* trading index img */}
          {width > 810 && (
            <div className="howitworks_right_section">
              <img src={tradingIndexBG} alt="trading index" />
            </div>
          )}
        </div>
        {/*  */}
        {width > 810 && (
          <div className="">
            <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 px-4 py-10">
              {stats.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-row gap-4 items-center text-center md:items-start md:text-left">
                    <span className="text-[32px] text-[#fafafa] font-inter font-medium leading-[40px] tracking-[-0.4px]">
                      {item.value}
                    </span>
                    <span className="text-sm text-[#908e8e] font-manrope leading-[20px] tracking-[-0.4px] max-w-[220px]">
                      {item.text}
                    </span>
                  </div>

                  {index !== stats.length - 1 && (
                    <div className="hidden md:block w-[1.2px] h-10 bg-gradient-to-b from-transparent via-gray-500/60 to-white/40 mx-8"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowitWorks;
