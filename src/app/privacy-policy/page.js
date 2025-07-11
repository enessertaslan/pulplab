"use client"
import React,{useEffect} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavLight = dynamic(()=>import('../components/navbar'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

export default function Privacy(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }, []);
    return(
        <>
        <NavLight/>
        <section className="relative md:pt-44 pt-32 pb-8 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-6">
                    <div>
                        <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">Privacy Policy</h5>
                    </div>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
                        <li className="inline-block capitalize font-medium duration-500 ease-in-out hover:text-amber-400"><Link href="/">PulpLab.Ai</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize font-medium duration-500 ease-in-out text-amber-400" aria-current="page">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                        Pulp AI Laboratory collects your name, email, company, and job title solely for the purpose of offering you personalized information and scheduling your requested AI automation session.
We do not sell, share, or transfer your data to third parties.
You can request deletion of your data at any time by contacting: <a href="mailto:info@pulplab.io">info@pulplab.io</a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer/>
        </>
    )
}