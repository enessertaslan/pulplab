import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FiShoppingCart,
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiFileText,
} from "../assets/icons/vander";

export default function Footer() {
  return (
    <>
      <div className="relative">
        <div className="shape absolute xl:-bottom-[30px] lg:-bottom-[16px] md:-bottom-[13px] -bottom-[5px] start-0 end-0 overflow-hidden z-1 rotate-180 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <footer className="relative bg-gray-900 overflow-hidden">
        <span className="absolute blur-[200px] w-[300px] h-[300px] rounded-full top-0 -start-[0] bg-gradient-to-tl to-amber-400  from-fuchsia-600 z-0"></span>
        <div className="container-fluid relative md:py-24 py-16">
          <div className="container relative">
            <div className="grid grid-cols-1 text-center">
              <div className="">
                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-white tracking-normal mb-4">
                  Book Your Free Call Today
                </h4>
                <p className="text-white/70 text-lg max-w-xl mx-auto">
                  Stay ahead with powerful AI solutions tailored to real
                  business needs.
                  <br />
                  <b>No tech jargon. No hassle. Just actionable insights.</b>
                </p>

                <div className="mt-6">
                  <Link
                    id="book"
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      Calendly.initPopupWidget({
                        url:
                          "https://calendly.com/c-kestir-pulpmedia/60-minute-meeting-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=fb923c",
                      });
                    }}
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center  hover:bg-emerald-400 border-emerald-800 hover:border-emerald-400 text-white rounded-md"
                  >
                    Book A Call Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative text-center">
          <div className="grid grid-cols-1 border-t border-gray-800 dark:border-slate-800">
            <div className="py-[30px] px-0">
              <div className="grid md:grid-cols-2 items-center">
                <div className="md:text-start text-center">
                  <Link href="#" className="text-[22px] focus:outline-none">
                    <Image
                      src="/images/pulp-logo.svg"
                      width={74}
                      height={24}
                      className="mx-auto md:me-auto md:ms-0"
                      alt=""
                    />
                  </Link>
                </div>

                <ul className="list-none footer-list md:text-end text-center mt-6 md:mt-0 space-x-1">
                  <li className="inline">
                    <Link
                      href="https://www.linkedin.com/company/pumpwithpulp"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-emerald-400 dark:hover:border-emerald-400 hover:bg-emerald-400 dark:hover:bg-emerald-400 text-slate-300 hover:text-white"
                    >
                      <FiLinkedin className="h-4 w-4 align-middle" />
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      href="https://x.com/PumpWithPULP"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-emerald-400 dark:hover:border-emerald-400 hover:bg-emerald-400 dark:hover:bg-emerald-400 text-slate-300 hover:text-white"
                    >
                      <FiTwitter className="h-4 w-4 align-middle" />
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      href="mailto:info@pulplab.io"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-emerald-400 dark:hover:border-emerald-400 hover:bg-emerald-400 dark:hover:bg-emerald-400 text-slate-300 hover:text-white"
                    >
                      <FiMail className="h-4 w-4 align-middle" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-slate-800">
          <div className="container relative text-center">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} PulpLabs. <br /> All Rights
                  Reserved .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
