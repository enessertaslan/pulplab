"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const NavLight = dynamic(() => import("../components/navlight"));
const Footer = dynamic(() => import("../components/footer"));
const Switcher = dynamic(() => import("../components/switcher"));
const Blogs = dynamic(() => import("../components/blogs"));
const ClientsTwo = dynamic(() => import("../components/clientTwo"));

import { FiCheckCircle } from "../assets/icons/vander";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Navbar from "../components/navbar";

export default function AboutUs() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const teamData = [
    {
      image: "/images/client/01.jpg",
      name: "Calvin Carlo",
      title: "C.E.O",
    },
    {
      image: "/images/client/02.jpg",
      name: "Aliana Rosy",
      title: "Co-founder",
    },
    {
      image: "/images/client/03.jpg",
      name: "Sofia Razaq",
      title: "C.O.O.",
    },
    {
      image: "/images/client/04.jpg",
      name: "Ronny Jofra",
      title: "Director",
    },
    {
      image: "/images/client/05.jpg",
      name: "Cristina Murphy",
      title: "Manager",
    },
    {
      image: "/images/client/06.jpg",
      name: "Jimmi Shaa",
      title: "Operator",
    },
  ];
  return (
    <>
      <Navbar />
      <section
        className="relative md:py-64 py-32 bg-no-repeat bg-bottom bg-cover"
        style={{ backgroundImage: "url('/images/bg/bg-pages.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">
                About Us
              </h5>
            </div>

            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li
                className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white"
                aria-current="page"
              >
                About Us
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
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

      <section className="relative md:py-18 py-12">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6 pb-52">
            <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:m-auto after:w-96 after:h-96 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-slate-800 lg:me-6">
              <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800 z-1">
                <Image
                  src="/images/about-us.avif"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                <span className="font-bold">Work smarter — with AI, </span>{" "}
                <br />
                not manual effort.
              </h3>
              <p className="text-slate-400 max-w-xl">
                At PulpLab, we build custom AI automation systems that help
                businesses operate more efficiently, reduce overhead, and unlock
                new levels of growth.
                <br />
                Unlike generic software tools, our solutions are crafted
                specifically for your workflows — whether you’re in
                manufacturing, logistics, crypto, or digital services.
                <br />
                “Usually, our colleagues don’t get too excited about
                automation... But the AI systems built by your team sparked
                motivation we’ve never seen before.”
                <br />
                We’re a team of experienced engineers, designers, and growth
                strategists who believe AI isn’t just the future — it’s the now.
                <br />
                Let’s build something smarter together.
              </p>

              <div className="mt-4">
                <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    Calendly.initPopupWidget({
                      url:
                        "https://calendly.com/c-kestir-pulpmedia/60-minute-meeting-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=fb923c",
                    });
                  }}
                  className="hover:text-amber-400 font-medium duration-500"
                >
                  Book A Call{" "}
                  <i className="mdi mdi-chevron-right text-[20px] align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
