import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

function Sidebar() {
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    navSlide();
  });
  const navRef = useRef(null);
  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "collection":
        return { activeMenu: "collection" };
      case "blog":
        return { activeMenu: "blog" };
      case "pages":
        return { activeMenu: "pages" };
      default:
        return { activeMenu: "" };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="main-nav-wrapper">
      <div ref={navRef} className="main-nav">
        <div className="menu-close-btn">
          <i className="bi bi-x-lg" />
        </div>
        <div className="mobile-logo-area d-flex justify-content-start align-items-center">
          <div className="header-logo">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/images/icons/header1-logo.svg"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="sidebar-menu-area">
          <ul className="menu-list">
            <li className="menu-item-has-children menu-item">
              <Link href="#">
                <a
                  onClick={() => dispatch({ type: "homeOne" })}
                  className={
                    currentRoute === "/" ? "drop-down active" : "drop-down"
                  }
                  data-hover="Home"
                >
                  {" "}
                  Home{" "}
                </a>
              </Link>
              <i onClick={() => dispatch({ type: "homeOne" })} className={state.activeMenu === "homeOne"? "bi bi-dash-lg dropdown-icon":"bi bi-plus-lg dropdown-icon"} />
              <ul
                className={
                  state.activeMenu === "homeOne"
                    ? "sub-menu d-block"
                    : "sub-menu d-none"
                }
              >
                <li>
                  <Link href="/">
                    <a className={currentRoute === "/" ? "active" : "disable"}>
                      Home One
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/index2">
                    <a
                      className={
                        currentRoute === "/index2" ? "active" : "disable"
                      }
                    >
                      Home Two
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/index3">
                    <a
                      className={
                        currentRoute === "/index3" ? "active" : "disable"
                      }
                    >
                      Home Three
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="/about">
                <a
                  data-hover="About"
                  className={currentRoute === "/about" ? "active" : "disable"}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="menu-item-has-children menu-item">
              <Link href="#">
                <a
                  onClick={() => dispatch({ type: "collection" })}
                  data-hover="Collectoin"
                  className={
                    currentRoute === "/collection1" ||
                    currentRoute === "/collection2" ||
                    currentRoute === "/collection-details"
                      ? "active"
                      : "disable"
                  }
                >
                  Collectoin
                </a>
              </Link>
              <i onClick={() => dispatch({ type: "collection" })} className={state.activeMenu === "collection"? "bi bi-dash-lg dropdown-icon" : "bi bi-plus-lg dropdown-icon"} />
              <ul
                className={
                  state.activeMenu === "collection"
                    ? "sub-menu d-block"
                    : "sub-menu d-none"
                }
              >
                <li>
                  <Link href="/collection1">
                    <a
                      className={
                        currentRoute === "/collection1" ? "active" : "disable"
                      }
                    >
                      Collection 01
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/collection2">
                    <a
                      className={
                        currentRoute === "/collection2" ? "active" : "disable"
                      }
                    >
                      {" "}
                      Collection 02
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/collection-details">
                    <a
                      className={
                        currentRoute === "/collection-details"
                          ? "active"
                          : "disable"
                      }
                    >
                      Collection Details
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item">
              <Link href="#">
                <a
                  className={
                    currentRoute === "/roadmap" || currentRoute === "/faq"
                      ? "drop-down active"
                      : "drop-down"
                  }
                  data-hover="Pages"
                  onClick={() => dispatch({ type: "pages" })}
                >
                  Pages
                </a>
              </Link>
              <i onClick={() => dispatch({ type: "pages" })} className={state.activeMenu === "pages"? "bi bi-dash-lg dropdown-icon":"bi bi-plus-lg dropdown-icon"} />
              <ul
                className={
                  state.activeMenu === "pages"
                    ? "sub-menu d-block"
                    : "sub-menu d-none"
                }
              >
                <li>
                  <Link href="/roadmap">
                    <a
                      className={
                        currentRoute === "/roadmap" ? "active" : "disable"
                      }
                    >
                      Roadmap
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a
                      className={currentRoute === "/faq" ? "active" : "disable"}
                    >
                      Faq
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/error">
                    <a>Error</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item">
              <Link href="#">
                <a
                  onClick={() => dispatch({ type: "blog" })}
                  data-hover="Blog"
                  className={
                    currentRoute === "/blog-grid" ||
                    currentRoute === "//blog-standard" ||
                    currentRoute === "/blog-details"
                      ? "drop-down active"
                      : "drop-down"
                  }
                >
                  {" "}
                  Blog
                </a>
              </Link>
              <i onClick={() => dispatch({ type: "blog" })} className={state.activeMenu === "blog"? "bi bi-dash-lg dropdown-icon":"bi bi-plus-lg dropdown-icon"} />
              <ul
                className={
                  state.activeMenu === "blog"
                    ? "sub-menu d-block"
                    : "sub-menu d-none"
                }
              >
                <li>
                  <Link href="/blog-grid">
                    <a
                      className={
                        currentRoute === "/blog-grid" ? "active" : "disable"
                      }
                    >
                      Blog Grid
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-standard">
                    <a
                      className={
                        currentRoute === "/blog-standard" ? "active" : "disable"
                      }
                    >
                      Blog Standard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">
                    <a
                      className={
                        currentRoute === "/blog-details" ? "active" : "disable"
                      }
                    >
                      Blog Details
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="/contact">
                <a
                  data-hover="Contact"
                  className={currentRoute === "/contact" ? "active" : "disable"}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div className="sidebar-menu-contact d-flex justify-content-start">
            <a href="https://opensea.io/" data-cursor="Opensea">
              <img
                src="assets/images/icons/opensea-icon.svg"
                className="img-fluid"
                alt="image"
              />
            </a>
            <a href="https://discord.com/" data-cursor="Discord">
              <img
                src="assets/images/icons/discord-icon.svg"
                className="img-fluid"
                alt="image"
              />
            </a>
          </div>
        </div>
        <div className="sidebar-social d-flex justify-content-center gap-5">
          <a href="https://www.instagram.com/">
            <img src="assets/images/icons/instagram.svg" alt="image" />
          </a>
          <a href="https://www.dribbble.com/">
            <img src="assets/images/icons/dribbble.svg" alt="image" />
          </a>
          <a href="https://www.pinterest.com/">
            <img src="assets/images/icons/pinterest.svg" alt="image" />
          </a>
          <a href="https://www.twitter.com/">
            <img src="assets/images/icons/Twitter.svg" alt="image" />
          </a>
          <a href="https://www.behance.com/">
            <img src="assets/images/icons/behance.svg" alt="image" />
          </a>
        </div>
      </div>
    </div>
  );
}
const navSlide = () => {
  const burger = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav .menu-list .menu-item");

  const menuClose = document.querySelector(".menu-close-btn");

  burger.addEventListener("click", () => {
    nav.classList.add("show-menu");

    navLinks.forEach((link, index) => {
      if (link.classList) {
        link.classList.add("test");
      } else {
        link.classList.remove("test");
      }
    });
    // burger.classList.toggle("toggle");
  });

  menuClose.addEventListener("click", () => {
    nav.classList.remove("show-menu");

    navLinks.forEach((link, index) => {
      if (link.classList) {
        link.classList.remove("test");
      } else {
        link.classList.add("test");
      }
    });

    // burger.classList.toggle("toggle");
  });
};

export default Sidebar;
