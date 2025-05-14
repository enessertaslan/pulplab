"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import Navbar from "../components/navbar";
const Footer = dynamic(() => import("../components/footer"));
const Switcher = dynamic(() => import("../components/switcher"));
import Faq2 from "../components/Faq2";
import {
  FiHelpCircle,
  FiBookmark,
  FiSettings,
  FiHexagon,
  MdKeyboardArrowDown,
} from "../assets/icons/vander";

export default function Helpcenter() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);
  const [activeIndex, setActiveIndex] = useState(1);
  const aboutData = [
    {
      icon: FiHelpCircle,
      title: "FAQs",
      desc:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      icon: FiBookmark,
      title: "Guides / Support",
      desc:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      icon: FiSettings,
      title: "Support Request",
      desc:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
  ];
  const accordianData = [
    {
      id: 1,
      title: "How does it generate responses?",
      desc:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      id: 2,
      title: "Is AI copywriting more cost-effective than hiring human writers?",
      desc:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      id: 3,
      title: "Can AI copywriting be customized to my brand and audience?",
      desc:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      id: 4,
      title: "What kind of support is available for AI copywriting tools?",
      desc:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="relative md:py-24 py-16">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-4 md:text-5xl md:leading-normal text-4xl leading-normal font-semibold">
              <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
                FAQ
              </span>
            </h3>
          </div>
        </div>
        <Faq2> </Faq2>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
