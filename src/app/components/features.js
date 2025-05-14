import React from "react";
import Image from "next/image";

export default function Features({ classlist }) {
  const featuresData = [
    {
      image: "/images/hero/2.avif",
      title: "AI for Traditional Companies",
      desc:
        "Cut 30% of operational costs by automating inventory, reporting, and internal communications.",
    },
    {
      image: "/images/hero/1.avif",
      title: "AI for Crypto & Web3",
      desc:
        "Manage communities, automate support, and track key metrics with smart integrations.",
    },
    {
      image: "/images/hero/3.avif",
      title: "AI for Digital Transition",
      desc:
        "No tech team? No problem. Plug & play AI tools tailored for logistics, service, real estate, and more.",
    },
  ];
  return (
    <>
      <div className={classlist}>
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            <br />{" "}
            <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
              Make an Outstanding Move{" "}
            </span>
            for Your Company’s Future
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto"></p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {featuresData.map((item, index) => {
            return (
              <div
                className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800"
                key={index}
              >
                <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1"
                    alt=""
                  />
                </div>

                <div className="p-6">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
