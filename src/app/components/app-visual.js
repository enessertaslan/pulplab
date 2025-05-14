"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const NavLight = dynamic(() => import("./navlight"));
const Footer = dynamic(() => import("./footer"));
const Switcher = dynamic(() => import("./switcher"));
const Blogs = dynamic(() => import("./blogs"));
const ClientsTwo = dynamic(() => import("./clientTwo"));
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function AppVisual() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <h3 className="mb-4 md:text-3xl text-center md:leading-normal text-2xl leading-normal font-semibold">
          Run Your Business on Autopilot
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          From the first task to the last report, our AI ensures accuracy,
          speed, and efficiency. See your operations come to life —
          intelligently automated.
        </p>
        <div className="lg:flex justify-center">
          <div className="lg:w-4/5">
            <ul className="md:flex inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
              <li
                role="presentation"
                className="inline-block md:w-1/3 w-full p-2"
              >
                <button
                  className={`${
                    activeIndex === 0
                      ? "text-white bg-amber-400"
                      : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
                  } px-5 py-3 text-start rounded-md w-full duration-500 `}
                  onClick={() => setActiveIndex(0)}
                >
                  <h5 className="text-base font-semibold">Drag and drop</h5>
                  <p className="text-sm mt-1">
                    Artificial intelligence makes it fast easy to create content
                    for your video creations.
                  </p>
                </button>
              </li>
              <li
                role="presentation"
                className="inline-block md:w-1/3 w-full p-2"
              >
                <button
                  className={`${
                    activeIndex === 1
                      ? "text-white bg-amber-400"
                      : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
                  } px-5 py-3 text-start rounded-md w-full duration-500 `}
                  onClick={() => setActiveIndex(1)}
                >
                  <h5 className="text-base font-semibold">
                    Improve your Talent
                  </h5>
                  <p className="text-sm mt-1">
                    Artificial intelligence makes it fast easy to create content
                    for your video creations.
                  </p>
                </button>
              </li>
              <li
                role="presentation"
                className="inline-block md:w-1/3 w-full p-2"
              >
                <button
                  className={`${
                    activeIndex === 2
                      ? "text-white bg-amber-400"
                      : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
                  } px-5 py-3 text-start rounded-md w-full duration-500 `}
                  onClick={() => setActiveIndex(2)}
                >
                  <h5 className="text-base font-semibold">Go for Live</h5>
                  <p className="text-sm mt-1">
                    Artificial intelligence makes it fast easy to create content
                    for your video creations.
                  </p>
                </button>
              </li>
            </ul>

            <div id="StarterContent" className="mt-6">
              {activeIndex === 0 ? (
                <div>
                  <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                    <Image
                      src="/images/1.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-t-lg"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {activeIndex === 1 ? (
                <div>
                  <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                    <Image
                      src="/images/2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-t-lg"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {activeIndex === 2 ? (
                <div>
                  <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                    <Image
                      src="/images/3.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-t-lg"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              Calendly.initPopupWidget({
                url:
                  "https://calendly.com/c-kestir-pulpmedia/60-minute-meeting-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=fb923c",
              });
            }}
            className="py-2 mx-auto px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </>
  );
}
