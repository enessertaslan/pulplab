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
    </>
  );
}
