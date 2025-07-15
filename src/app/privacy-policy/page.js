"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavLight = dynamic(() => import("../components/navbar"));
const Footer = dynamic(() => import("../components/footer"));
const Switcher = dynamic(() => import("../components/switcher"));

export default function Privacy() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);
  return (
    <>
      <NavLight />
      <section className="relative md:pt-44 pt-32 pb-8 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div></div>
          </div>
        </div>
      </section>
      <section className="relative md:pb-24 pb-16">
        <div class="max-w-4xl mx-auto px-4 py-10 text-slate-800 dark:text-white">
          <h1 class="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p class="mb-4">
            <strong>Effective Date:</strong> 10.07.2023
          </p>

          <p class="mb-8">
            This Privacy Policy outlines how BIZARRE TECHNOLOGY TRADE LIMITED
            COMPANY (“we”, “our”, “us”) collects, uses, and protects your
            personal information when you interact with our website, services,
            and advertisements, including LinkedIn Lead Gen Forms.
          </p>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">1. Company Information</h2>
            <p>
              <strong>Company Name:</strong> BIZARRE TECHNOLOGY TRADE LIMITED
              COMPANY
            </p>
            <p>
              <strong>Registered Address:</strong> Eti Mah. Toros Sok., Building
              No: 27, Apartment No: 7, Cankaya, Ankara, Turkey
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@pulp.global" class="text-blue-500 underline">
                info@pulp.global
              </a>
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">
              2. What Information We Collect
            </h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Job title</li>
              <li>Company name</li>
              <li>Phone number</li>
              <li>Location (city, country)</li>
              <li>Any additional information you voluntarily provide</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <ul class="list-disc list-inside space-y-1">
              <li>To respond to your inquiries or service requests</li>
              <li>
                To provide information about our products, services, offers, or
                updates
              </li>
              <li>
                To contact you for potential collaboration or business purposes
              </li>
              <li>
                To improve our marketing strategies and campaign performance
              </li>
              <li>To comply with legal obligations</li>
            </ul>
            <p class="mt-2">
              We only process your data with your consent or under a legitimate
              business interest, in accordance with applicable data protection
              laws (e.g., GDPR, KVKK).
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">
              4. Legal Basis for Processing
            </h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Your explicit consent when you submit forms</li>
              <li>
                Our legitimate interest in business development and marketing
              </li>
              <li>Legal obligations where applicable</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">
              5. Sharing Your Information
            </h2>
            <ul class="list-disc list-inside space-y-1">
              <li>
                Marketing automation and CRM platforms we use (e.g., HubSpot,
                Mailchimp)
              </li>
              <li>
                Advertising platforms (e.g., LinkedIn) solely for campaign
                optimization
              </li>
              <li>
                Service providers and contractors who are bound by
                confidentiality
              </li>
            </ul>
            <p class="mt-2">We never sell your personal data.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">
              6. Data Storage & Security
            </h2>
            <p>
              Your information is stored securely in encrypted databases and
              systems. We use industry-standard security measures to prevent
              unauthorized access, alteration, or disclosure of your data.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">7. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to
              fulfill the purposes for which it was collected, or to comply with
              legal requirements. You may request deletion at any time.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">8. Your Rights</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw your consent at any time</li>
              <li>Object to data processing for marketing purposes</li>
              <li>
                Lodge a complaint with a data protection authority (e.g., KVKK
                or GDPR supervisory authority)
              </li>
            </ul>
            <p class="mt-2">
              To exercise your rights, please contact us at:{" "}
              <a href="mailto:info@pulp.global" class="text-blue-500 underline">
                info@pulp.global
              </a>
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The latest
              version will always be available on our website and will include
              the effective date.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-2">10. Contact Us</h2>
            <p>
              BIZARRE TECHNOLOGY TRADE LIMITED COMPANY
              <br />
              Eti Mah. Toros Sok., No: 27/7
              <br />
              Cankaya, Ankara, Turkey
              <br />
              Email:{" "}
              <a href="mailto:info@pulp.global" class="text-blue-500 underline">
                info@pulp.global
              </a>
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}
