import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Clients() {
  const clientData = [
    {
      image: "/images/client/01.jpg",
      name: "Ahmed R., Operations Manager (Dubai)",
      desc:
        "We automated 85% of our daily operations within 3 weeks. Incredible ROI.",
    },
    {
      image: "/images/client/02.jpg",
      name: "Fatima L., CEO, Logistics company (Abu Dhabi)",
      desc: "No more chaos. Our AI handles everything while we scale.",
    },
  ];
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            What Our Customers Says
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {clientData.map((item, index) => {
            return (
              <div className="grid grid-cols-1 gap-6 h-fit" key={index}>
                <div className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400 bg-white dark:bg-slate-900 h-fit">
                  <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                    <Image
                      src={item.image}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full shadow dark:shadow-gray-800"
                      alt=""
                    />

                    <div className="ps-4">
                      <Link
                        href=""
                        className="text-lg hover:text-amber-400 duration-500 ease-in-out"
                      >
                        {item.name}
                      </Link>
                      <p className="text-slate-400">User</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-slate-400">{item.desc}</p>
                    <ul className="list-none mb-0 text-amber-400 mt-2">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400 bg-white dark:bg-slate-900 h-fit">
                  <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                    <Image
                      src={item.image1}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full shadow dark:shadow-gray-800"
                      alt=""
                    />

                    <div className="ps-4">
                      <Link
                        href=""
                        className="text-lg hover:text-amber-400 duration-500 ease-in-out"
                      >
                        {item.name1}
                      </Link>
                      <p className="text-slate-400">User</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-slate-400">{item.desc1}</p>
                    <ul className="list-none mb-0 text-amber-400 mt-2">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
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
