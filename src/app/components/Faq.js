import React, { useState } from "react";
import Link from "next/link";

import { MdKeyboardArrowDown } from "../assets/icons/vander";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(1);
  const accordionData = [
    {
      id: 1,
      title: "We don’t know where to start with AI — can you guide us?",
      desc:
        "Absolutely. We begin with a free consultation to understand your business, then propose tailored automation strategies that bring real impact.",
    },
    {
      id: 2,
      title: "Do you build custom AI systems for every company?",
      desc:
        "Yes. Every business is different — so are our solutions. We design and build automation systems based on your exact workflows, tools, and goals.",
    },
    {
      id: 3,
      title: "How long does it take to build a custom AI automation system?",
      desc:
        "Most systems go live within 2–4 weeks, depending on complexity. We move fast — without compromising quality.",
    },
    {
      id: 4,
      title: "Do we need technical knowledge or a dev team?",
      desc:
        "Nope. You focus on your business — we handle everything from planning to deployment and post-launch support.",
    },
    {
      id: 5,
      title: "Can you integrate with the software we already use?",
      desc:
        "Yes. We integrate with CRMs, ERPs, messaging apps, and cloud tools. If there's an API, we can automate it.",
    },
    {
      id: 6,
      title: " Is it expensive to build a custom AI system?",
      desc:
        "Not at all. We work with flexible scopes and budgets. Most clients get ROI in under 2 months — and save thousands in manual costs.",
    },
    {
      id: 7,
      title:
        "Will this work for non-tech industries like manufacturing or logistics?",
      desc:
        "Definitely. In fact, they benefit the most. We've automated reporting, communication, inventory, and workflow tracking for companies in these sectors.",
    },
    {
      id: 8,
      title: "How secure is the data and infrastructure?",
      desc:
        "All data is handled with enterprise-grade encryption and stored on secure, compliant cloud infrastructure (e.g., AWS, Google Cloud).",
    },
    {
      id: 9,
      title: "What kind of support do you offer after delivery?",
      desc:
        "We offer optional monthly support plans that include updates, monitoring, and ongoing improvements — or we can hand it off to your internal team.",
    },
    {
      id: 10,
      title: "How do we get started?",
      desc:
        "Click [Book a Free Discovery Call] — and let’s explore how AI can save you time, reduce costs, and unlock new growth.",
    },
  ];
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
          <div className="lg:col-span-4 md:mb-0 mb-8">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Have a question?
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto mb-6">
              Cut costs. Boost productivity. Eliminate inefficiencies. Your
              smart AI automation journey starts here.
            </p>

            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                Calendly.initPopupWidget({
                  url:
                    "https://calendly.com/c-kestir-pulpmedia/60-minute-meeting-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=fb923c",
                });
              }}
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 text-slate-900 dark:text-white hover:text-white rounded-md"
            >
              Contact Us
            </Link>
          </div>

          <div className="lg:col-span-8 md:mt-0 mt-8">
            {accordionData.map((item, index) => {
              return (
                <div
                  className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
                  key={index}
                >
                  <h2
                    className="text-base font-semibold"
                    id="accordion-collapse-heading-1"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(item.id)}
                      className={`${
                        activeIndex === item.id
                          ? "bg-gray-50 dark:bg-slate-800 text-emerald-400"
                          : ""
                      } flex justify-between items-center p-5 w-full font-medium text-start`}
                    >
                      <span>{item.title}</span>
                      <MdKeyboardArrowDown
                        className={`${
                          activeIndex === item.id ? "rotate-180" : ""
                        } w-4 h-4 shrink-0`}
                      />
                    </button>
                  </h2>
                  <div className={activeIndex === item.id ? "" : "hidden"}>
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
