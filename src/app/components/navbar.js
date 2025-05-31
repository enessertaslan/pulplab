import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    activateMenu();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  /*********************/
  /*    Menu Active    */
  /*********************/
  function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }

  function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  }
  /*********************/
  /*  Clickable manu   */
  /*********************/
  if (typeof window !== "undefined") {
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  }

  return (
    <>
      <nav
        id="topnav"
        className={`${scroll ? "nav-sticky" : ""} defaultscroll is-sticky`}
      >
        <div className="container">
          <Link className="logo" href="/">
            <Image
              src="/images/pulp-logo.svg"
              width={100}
              height={75}
              className="h-7 inline-block pl-0 dark:hidden"
              alt=""
            />
            <Image
              src="/images/pulp-logo.svg"
              width={100}
              height={75}
              className="h-7 hidden pl-0 dark:inline-block"
              alt=""
            />
          </Link>

          <div className="menu-extras">
            <div className="menu-item">
              <Link
                href="#"
                className={`${toggleMenu ? "open" : ""} navbar-toggle`}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          <ul className="buy-button list-none mb-0">
            <li className="md:inline hidden ps-1 mb-0 ">
              <Link
                id="book"
                href=""
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                  Calendly.initPopupWidget({
                    url:
                      "https://calendly.com/c-kestir-pulpmedia/60-minute-meeting-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=fb923c",
                  });
                }}
                className="py-[6px] px-4 inline-block items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-emerald-400 hover:bg-emerald-500 border border-emerald-400 hover:border-emerald-500 text-white font-semibold"
              >
                Book A Call
              </Link>
            </li>
          </ul>
          <div id="navigation" className={`${toggleMenu ? "block" : ""}`}>
            <ul className="navigation-menu">
              <li className="has-submenu parent-menu-item">
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/aboutus" className="sub-menu-item">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/helpdesk" className="sub-menu-item">
                  Helpdesk{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
