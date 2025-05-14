import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiCheckCircle, MdKeyboardArrowRight } from "../assets/icons/vander";

export default function AboutOne() {
  return (
    <>
      <div className="container relative md:mt-24 mt-16" id="about-us">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
          <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 ps-6 pt-6 lg:me-8">
            <Image
              src="/images/features/1.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="ltr:rounded-tl-lg rtl:rounded-tr-lg"
              alt=""
            />
          </div>

          <div className="">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              AI + Automation = Scalable Growth
            </h3>
            <p className="text-slate-400 max-w-xl">
              Our intelligent automation systems take care of the heavy lifting
              so your team doesn’t have to.
            </p>

            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Automate repetitive, time-consuming tasks — reduce human error
                and free up hours of manual effort every single week.
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Optimize workflows across departments — from operations to
                customer service, we streamline processes for maximum
                efficiency.
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Empower your team to focus on high-impact decisions — let your
                people do what they do best: innovate, strategize, and grow your
                business.
              </li>
            </ul>
            <p className="text-slate-400 max-w-xl">
              Whether you're a traditional company modernizing operations or a
              tech-driven startup scaling fast, we help you grow smarter, not
              harder. Unlock measurable results with AI-powered systems tailored
              to your unique business model.
            </p>
            <div className="mt-4">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  Calendly.initPopupWidget({
                    url:
                      "https://calendly.com/c-kestir-pulpmedia/60-minute-meeting-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=fb923c",
                  });
                }}
                className="hover:text-amber-400 font-medium duration-500 inline-flex items-center"
              >
                Book A Call{" "}
                <MdKeyboardArrowRight className="ms-1 text-[20px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
