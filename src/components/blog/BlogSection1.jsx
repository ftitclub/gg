import Link from "next/link";
import React, { useEffect } from "react";
import thumparallaxUp from "../../components/common/thumparallaxUp";

export default function BlogSection1() {
  useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <div className="blog-section bg-color2 pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center mb-60 g-4">
            <div className="col-lg-6 justify-content-lg-start justify-content-center">
              <div className="section-title1 text-lg-start text-cetner mb-0">
                <span>Blog</span>
                <h2>Newest Article.</h2>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end text-center">
              <Link href="/blog-grid">
                <a className="eg-btn btn--primary-outline btn--lg">
                  View All Blog
                </a>
              </Link>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-7 col-sm-10 order-xl-1 order-2">
              <div className="blog-single1-alpha">
                <div className="blog-single1-image">
                  <img
                    src="assets/images/blog/blog1-alpha.png"
                    className="img-fluid parralax-image"
                    alt="image"
                  />
                </div>
                <div className="blog-single1-content">
                  <ul className="blog-meta-list">
                    <li>Angunel John</li>
                    <li>August 13, 2022</li>
                    <li>Portfolio</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>Curabitur egestas lobortis pharetra In nec risus.</a>
                    </Link>
                  </h3>
                  <Link href="/blog-details">
                    <a className="read-more-btn">
                      READ MORE
                      <svg
                        width={51}
                        height={10}
                        viewBox="0 0 51 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 5L50 5" stroke="#BE05FF" />
                        <path
                          d="M45 9L50 5L45 1"
                          stroke="#BE05FF"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6 col-md-7 col-sm-10 order-xl-2 order-1">
              <div className="blog-single1-gamma">
                <div className="blog-single1-content">
                  <ul className="blog-meta-list">
                    <li>James Anderson</li>
                    <li>August 05, 2022</li>
                    <li>Art</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        The Rise of Legends for thisi work hard &amp; Hard and
                        we are work smoth &amp; Clean For You.
                      </a>
                    </Link>
                  </h3>
                  <Link href="/blog-details">
                    <a className="read-more-btn">
                      READ MORE
                      <svg
                        width={51}
                        height={10}
                        viewBox="0 0 51 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 5L50 5" stroke="#BE05FF" />
                        <path
                          d="M45 9L50 5L45 1"
                          stroke="#BE05FF"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog-single1-beta">
                <div className="blog-single1-image">
                  <img
                    src="assets/images/blog/blog1-beta.png"
                    className="parralax-image"
                    alt="image"
                  />
                </div>
                <div className="blog-single1-content">
                  <ul className="blog-meta-list">
                    <li>James Anderson</li>
                    <li>August 05, 2022</li>
                    <li>Art</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>Nunc a commodo tortoruas sed scelerisque tell.</a>
                    </Link>
                  </h3>
                  <Link href="/blog-details">
                    <a className="read-more-btn">
                      READ MORE
                      <svg
                        width={51}
                        height={10}
                        viewBox="0 0 51 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 5L50 5" stroke="#BE05FF" />
                        <path
                          d="M45 9L50 5L45 1"
                          stroke="#BE05FF"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
