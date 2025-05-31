import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiCheckCircle, MdKeyboardArrowRight } from "../assets/icons/vander";

export default function AboutTwo() {
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
          <div className="relative order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 pe-6 pt-6 lg:ms-8">
              <Image
                src="/images/featuretab/a2.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="ltr:rounded-tr-lg rtl:rounded-tl-lg"
                alt=""
              />
            </div>
          </div>

          <div className="order-2 md:order-1">
            <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Automate Workflows, <br /> Reports & Communication <br />
              Without Writing a Single Line of Code
            </h4>
            <p className="text-slate-400">
              Our team used to spend hours every day on basic reporting and
              admin tasks. With Pulp, AI now does it all — faster, more
              accurately, and 24/7.”
            </p>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-emerald-400 h-5 w-5 me-2" />{" "}
                Automate your invoices, daily reports, and employee
                notifications
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-emerald-400 h-5 w-5 me-2" /> Our
                Customize workflows that match your unique business structure
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-emerald-400 h-5 w-5 me-2" /> Sync
                with your tools like Slack, Gmail, Discord, CRM & more
              </li>
            </ul>

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
                className="hover:text-emerald-400 font-medium duration-500 inline-flex items-center"
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
