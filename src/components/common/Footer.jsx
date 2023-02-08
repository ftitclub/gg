import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Footer() {
  const currentRoute = useRouter().pathname;
  return (
    <div className="footer-section bg-color2">
      {currentRoute === "/index2" ||
      currentRoute === "/index3" ? (
       ""
      ) : (
        <>
        {" "}
        <div className="section-star">
          <img src="assets/images/icons/star.svg" alt="image" />
        </div>
        <div className="newsletter-area pt-120">
          <div className="container">
            <div className="row align-items-center g-4 mb-200">
              <div className="col-lg-6">
                <div className="section-title2">
                  <span>Subscribe</span>
                  <h2>Our Newsletter</h2>
                  <p>
                    Suspendisse bibendum efficitur orci, a pretium eratoin one
                    mattis nec. Vestibulum ante ipsum primis in.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="input-with-btn"
                  data-scroll
                  data-scroll-speed={3}
                >
                  <form>
                    <div className="form-inner">
                      <input type="text" placeholder="Email Here...." />
                      <button
                        type="submit"
                        className="eg-btn btn--lg btn--primary"
                      >
                        SUBSCRIBE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="background-text d-md-flex d-none">
              <ul>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
                <li>
                  <a href="#">Get In Touch</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
      )}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-text-area">
            <Link href="/">
              <a><img src="assets/images/icons/footer-logo.svg" alt="images" /></a>
            </Link>
            <h3>
              <span>Feel</span> Free To <br />
              <span>Contact</span> Me, Anytime.
            </h3>
          </div>
          <div className="footer-link-area">
            <ul className="footer-list">
              <li>
                <Link href="/"><a>Home</a></Link>
              </li>
              <li>
                <Link href="/about"><a>About</a></Link>
              </li>
              <li>
                <Link href="/collection1"><a>About</a></Link>
              </li>
              <li>
                <Link href="/roadmap"><a>Roadmap</a></Link>
              </li>
              <li>
                <Link href="/blog"><a>Blog</a></Link>
              </li>
              <li>
                <Link href="/contact"><a>Contact</a></Link>
              </li>
            </ul>
          </div>
          <div className="copyright-area">
            <div className="row g-4">
              <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                <div className="copyright">
                  <p>
                    © 2023 &nbsp;
                    <a href="#" className="egns-lab">
                      Re:Wired &nbsp;
                    </a>
                    is Proudly Powered by
                    <a
                      href="https://themeforest.net/category/site-templates?term=egenslab"
                      className="egns-lab"
                    >
                      AI
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="col-lg-6 justify-content-lg-end justify-content-center">
                <ul className="footer-social">
                  <li>
                    <img src="assets/images/icons/instagram.svg" alt="image" />
                    <a href="https://www.instagram.com/">IN</a>
                  </li>
                  <li>
                    <img src="assets/images/icons/dribbble.svg" alt="image" />
                    <a href="https://www.dribbble.com/">DB</a>
                  </li>
                  <li>
                    <img src="assets/images/icons/pinterest.svg" alt="image" />
                    <a href="https://www.pinterest.com/">PI</a>
                  </li>
                  <li>
                    <img src="assets/images/icons/Twitter.svg" alt="image" />
                    <a href="https://www.twitter.com/">TW</a>
                  </li>
                  <li>
                    <img src="assets/images/icons/behance.svg" alt="image" />
                    <a href="https://www.behance.com/">BE</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        0
      </div>
    </div>
  );
}
