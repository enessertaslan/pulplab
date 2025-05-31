import React from "react";
import Link from "next/link";
import {
  FiFileText,
  FiVideo,
  FiPauseCircle,
  FiCamera,
  FiLayout,
  FiMessageCircle,
  FiHexagon,
} from "../assets/icons/vander";
export default function AmazingFeatures() {
  const casesData = [
    {
      icon: FiFileText,
      title: " AI-Powered Workflow Automation",
      desc:
        "Automate your daily business processes, from task assignments to approvals, without writing a single line of code.",
    },
    {
      icon: FiVideo,
      title: " Smart Email & Message Responders",
      desc:
        "Let AI instantly handle repetitive support requests via email, WhatsApp, or Telegram — so your team can focus on what matters.",
    },
    {
      icon: FiPauseCircle,
      title: "Real-Time Analytics & Business Insights",
      desc:
        "Get a live dashboard that shows your KPIs, performance bottlenecks, and growth opportunities — powered by AI.",
    },
    {
      icon: FiCamera,
      title: "AI Assistants for Web3 Projects",
      desc:
        "From Discord community moderation to automated airdrop management — we build AI tools tailor-made for crypto & Web3 needs.",
    },
    {
      icon: FiLayout,
      title: "Voice & Chat AI Assistants for Your Team",
      desc:
        "Empower your internal operations with multilingual voice/chatbots that help employees complete tasks faster and smarter.",
    },
    {
      icon: FiMessageCircle,
      title: "Custom AI Solutions for Any Business",
      desc:
        "Whether you're in logistics, retail, finance, or manufacturing — we design AI solutions that match your exact workflow and goals.",
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
          {casesData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                className="p-6 rounded-md shadow dark:shadow-gray-800 group bg-white dark:bg-slate-900 hover:bg-amber-400/5 dark:hover:bg-amber-400/5 duration-500"
                key={index}
              >
                <div className="relative overflow-hidden text-transparent -m-3">
                  <FiHexagon className="h-24 w-24 fill-emerald-400/10 group-hover:fill-emerald-400/20 duration-500" />
                  <div className="absolute top-2/4 -translate-y-2/4 start-9 text-emerald-400 rounded-xl text-2xl flex align-middle justify-center items-center">
                    <Icon />
                  </div>
                </div>

                <div className="content mt-6">
                  <p className="font-semibold text-xl cursor-pointer hover:text-emerald-400">
                    {item.title}
                  </p>
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                  <div className="mt-4">
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
                      className="hover:text-emerald-400 font-medium duration-500"
                    >
                      Book A Call{" "}
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
