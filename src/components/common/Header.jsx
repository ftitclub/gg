import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Header() {
  const currentRoute = useRouter().pathname;
  return (
    <header className="header-area style-1 bg-color2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
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
        <div className="main-menu">
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <Link href="/">
                <a>
                  <img alt="image" src="assets/images/icons/header1-logo.svg" />
                </a>
              </Link>
            </div>
            <div className="mobile-menu-close-btn">
              <i className="bi bi-x-lg text-dark" />
            </div>
          </div>
          <ul className="menu-list">
            <li className="menu-item-has-children">
              <Link href="/">
                <a
                  className={
                    currentRoute === "/" ? "drop-down active" : "drop-down"
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={
                    currentRoute === "/about" ? "drop-down active" : "drop-down"
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="/collection1">
                <a
                  className={
                    currentRoute === "/collection1" ||
                    currentRoute === "/collection2" ||
                    currentRoute === "/collection-details"
                      ? "active"
                      : "disable"
                  }
                >
                  Collection
                </a>
              </Link>
              <i className="bi bi-circle-fill" />
              <ul className="sub-menu">
                <li>
                  <Link href="/collection1">
                    <a className={
                        currentRoute === "/collection1" ? "active" : "disable"
                      }>Collection 01</a>
                  </Link>
                </li>
                <li>
                  <Link href="/collection2">
                    <a
                      className={
                        currentRoute === "/collection2" ? "active" : "disable"
                      }
                    >
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
            <li className="menu-item-has-children">
              <Link href="#">
                <a
                  className={
                    currentRoute === "/roadmap" || currentRoute === "/faq" 
                      ? "drop-down active"
                      : "drop-down"
                  }
                >
                  Pages
                </a>
              </Link>
              <i className="bi bi-circle-fill" />
              <ul className="sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="/blog-grid">
                <a
                  className={
                    currentRoute === "/blog-grid" ||
                    currentRoute === "//blog-standard" ||
                    currentRoute === "/blog-details"
                      ? "drop-down active"
                      : "drop-down"
                  }
                >
                  Blog
                </a>
              </Link>
              <i className="bi bi-circle-fill" />
              <ul className="sub-menu">
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
            <li>
              <Link href="/contact">
                <a
                  className={currentRoute === "/contact" ? "active" : "disable"}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <Link href="/contact">
            <a className="eg-btn btn--primary-outline btn--lg d-xl-flex d-none">
              Connect Now
            </a>
          </Link>
          <div className="sidebar-button mobile-menu-btn ">
            <div className="sidebar-icon-border">
              <svg
                width={51}
                height={51}
                viewBox="0 0 51 51"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5968 50C19.5284 49.6696 16.6724 48.7962 14.0289 47.3801C11.3854 45.9639 9.09586 44.1582 7.16041 41.9632C5.22495 39.7681 3.71435 37.2543 2.62861 34.422C1.54287 31.5896 1 28.6156 1 25.5C1 19.1744 3.05347 13.6749 7.16041 9.00145C11.2673 4.32804 16.4364 1.66089 22.6676 1V2.5578C16.9085 3.36031 12.1171 5.92124 8.29335 10.2406C4.46965 14.56 2.5578 19.6464 2.5578 25.5C2.5578 31.3064 4.45785 36.381 8.25795 40.724C12.058 45.067 16.8377 47.6397 22.5968 48.4422V50ZM28.474 50V48.4422C30.5039 48.159 32.4747 47.6515 34.3866 46.9198C36.2984 46.1881 38.0804 45.1614 39.7327 43.8396L41.0072 44.9725C39.119 46.2943 37.1245 47.3801 35.0238 48.2298C32.9232 49.0795 30.7399 49.6696 28.474 50ZM39.8743 7.30202C38.1749 6.07466 36.3692 5.04793 34.4574 4.22182C32.5455 3.39571 30.5511 2.84104 28.474 2.5578V1C30.7399 1.33044 32.9114 1.92052 34.9884 2.77023C37.0655 3.61994 39.0718 4.72929 41.0072 6.09827L39.8743 7.30202ZM44.9725 40.724L43.8396 39.6619C45.1142 38.0096 46.1291 36.2276 46.8844 34.3158C47.6397 32.4039 48.159 30.4094 48.4422 28.3324H50C49.7168 30.5983 49.1503 32.7816 48.3006 34.8822C47.4509 36.9829 46.3415 38.9302 44.9725 40.724ZM48.4422 22.6676C48.159 20.5906 47.6397 18.5961 46.8844 16.6842C46.1291 14.7724 45.1142 12.9904 43.8396 11.3382L45.185 10.1344C46.4123 12.0226 47.4273 14.0171 48.2298 16.1178C49.0323 18.2184 49.6224 20.4017 50 22.6676H48.4422Z"
                  stroke="#0A0A0A"
                  strokeWidth="0.7"
                />
              </svg>
            </div>
            <div className="sidebar-icon">
              <svg
                width={24}
                height={20}
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9998 7H5.88867"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 1H1"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 13H1"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.9998 19H5.88867"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
