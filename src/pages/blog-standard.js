import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";

export default function BlogStandardPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
      <div className="blog-standard pt-120 pb-120">
        <div className="container">
          <div className="row g-lg-5 g-4">
            <div className="col-lg-8">
              <div className="blog-st-wrap">
                <div className="blog-img">
                  <a href="blog-details">
                    <img src="assets/images/blog/blog-st1.png" alt="blog-st1" />
                  </a>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog-grid">
                        <a>Angunel John</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          August 12, 2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
                          {" "}
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          Art
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="blog-title">
                    <h3>
                      <Link href="/blog-details">
                        <a>
                          The rise of legends for thisi work hard &amp; hard.
                          Egestasoni eget dolor ut consectetur.
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read-more-btn">
                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
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
              <div className="blog-st-wrap">
                <div className="blog-img">
                  <a href="blog-details">
                    <img src="assets/images/blog/blog-st2.png" alt="blog-st2" />
                  </a>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog-grid">
                        <a>Angunel John</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
                          {" "}
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          August 12, 2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
                          {" "}
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          Art
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="blog-title">
                    <h3>
                      <Link href="/blog-details">
                        <a>
                          Morbi fringilla elit pellentesque, posuere nulla quis
                          egonai molestie nulla choke.
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read-more-btn">
                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
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
              <div className="blog-st-wrap">
                <div className="blog-img">
                  <a href="blog-details">
                    <img src="assets/images/blog/blog-st3.png" alt="blog-st3" />
                  </a>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog-grid">
                        <a>Angunel John</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
                          {" "}
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          August 12, 2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
                          {" "}
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          Art
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="blog-title">
                    <h3>
                      <Link href="/blog-details">
                        <a>
                          Etiam augue nibh eleifend sit amet porta sed tristique
                          eui sem then golipan.
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read-more-btn">
                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
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
              <div className="blog-st-wrap">
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="assets/images/blog/blog-st4.png"
                        alt="blog-st4"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog-grid">
                        <a>Angunel John</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          August 12, 2022
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
                          {" "}
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          Art
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="blog-title">
                    <h3>
                      <Link href="/blog-details">
                        <a>
                          Curabitur egestas lobortis pharetra. In nec risus sed
                          nisito semper convallis et non enim.
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read-more-btn">
                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
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
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <Link href="#" tabIndex={-1}>
                      <a className="page-link">
                        <svg
                          width={11}
                          height={16}
                          viewBox="0 0 11 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.3">
                            <path d="M-6.52757e-07 8.53333C5.21897 8.96 9.06071 13.6889 10.3292 16C11.4165 9.6 7.06735 8.53333 4.89278 8C13.0474 6.4 10.8728 1.6 10.3292 5.86426e-08C8.15464 5.86667 3.26185 7.46667 -6.52757e-07 8.53333Z" />
                          </g>
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <svg
                        width={11}
                        height={16}
                        viewBox="0 0 11 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 7.46667C5.78103 7.04 1.93929 2.31111 0.670793 0C-0.416491 6.4 3.93265 7.46667 6.10722 8C-2.04742 9.6 0.127151 14.4 0.670793 16C2.84536 10.1333 7.73815 8.53333 11 7.46667Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <div className="single-widgets widget_sidebar-author text-center">
                  <div className="author-img">
                    <img
                      src="assets/images/blog/blog-sidebar-author.png"
                      alt="blog-sidebar-author"
                    />
                  </div>
                  <div className="author-name">
                    <h4>Mr. Johan Lea</h4>
                    <span>NFT Artist</span>
                  </div>
                  <div className="author-content">
                    <p>
                      Suspendisse bibendum efficitur orcihaven pretium eratoin
                      mattis nec.
                    </p>
                  </div>
                </div>
                <div className="single-widgets widget_search">
                  <div className="widget-title">
                    <h3>Search</h3>
                  </div>
                  <div
                    className="input-with-btn"
                    data-scroll
                    data-scroll-speed={3}
                  >
                    <form>
                      <div className="form-inner">
                        <input type="text" placeholder="Search...." />
                        <button
                          type="submit"
                          className="eg-btn btn--lg btn--primary"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="single-widgets widget_egns_recent_post">
                  <div className="widget-title">
                    <h3>Newest Posts</h3>
                  </div>
                  <div className="recent-post-wraper">
                    <div className="widget-cnt">
                      <div className="wi">
                        <Link href="/blog-details">
                          <a>
                            <img
                              className="img-fluid"
                              src="assets/images/blog/blog-sb1.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="wc">
                        <span>August 12, 2022</span>
                        <h4>
                          <Link href="/blog-details">
                            <a>
                              The Rise of Legends for. work hard &amp; Hard.
                            </a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-widgets  widget_egns_tag">
                  <div className="widget-title">
                    <h3>Popular Tag</h3>
                  </div>
                  <ul className="wp-block-categoris-cloud d-flex align-items-center flex-wrap">
                    <li>
                      <Link href="/blog">
                        <a>Artist</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>
                          {" "}
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          Portfolio
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          Crypto
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          Digital Token
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          Blockchain NFT
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          Market Place
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>
                          <svg
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                            />
                          </svg>
                          NFT
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="single-widgets widget_egns_social">
                  <div className="widget-title">
                    <h3>Follow Us On</h3>
                  </div>
                  <ul className="social-link ">
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook" /> <span>FACEBOOK</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram" />{" "}
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-linkedin" /> <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter" /> <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-dribbble" /> <span>Dribbble</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
