import React from "react";
import Link from "next/link";

export default function AmazingFeatures() {
  const featureData = [
    {
      icon: "mdi mdi-alarm-plus",
      title: " Automated Workflow Builder",
      desc:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      icon: "mdi mdi-email-edit-outline",
      title: "Email & Messaging Bot Integration",
      desc:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      icon: "mdi mdi-monitor-dashboard",
      title: "Real-Time Analytics & Dashboards",
      desc:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      icon: "mdi mdi-send",
      title: "CRM, Discord, Telegram Integrations",
      desc:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      icon: "mdi mdi-translate",
      title: " Multi-Language AI Assistants",
      desc:
        " Support your global teams and customers with AI-powered responses in 20+ languages.",
    },
    {
      icon: "mdi mdi-account-group",
      title: " Role-Based Access & Team Collaboration",
      desc:
        " Assign roles, manage permissions, and streamline collaboration across departments securely.",
    },
  ];
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Everything You Need to Automate Smarter
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            From intelligent workflows to real-time insights, our AI system
            comes packed with powerful features to help your business scale
            faster, leaner, and smarter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {featureData.map((item, index) => {
            return (
              <div
                className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg bg-white dark:bg-slate-900"
                key={index}
              >
                <i
                  className={`${item.icon} text-4xl bg-gradient-to-tl to-amber-400 from-fuchsia-600 text-transparent bg-clip-text`}
                ></i>

                <div className="content mt-7">
                  <Link
                    href=""
                    className="title h5 text-lg font-medium hover:text-amber-400 duration-500"
                  >
                    {item.title}
                  </Link>
                  <p className="text-slate-400 mt-3">{item.desc}</p>

                  <div className="mt-5">
                    <Link
                      href=""
                      className="hover:text-amber-400 font-medium duration-500"
                    >
                      Read More{" "}
                      <i className="mdi mdi-arrow-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
