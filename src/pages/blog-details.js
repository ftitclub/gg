import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";

export default function BlogDetailsPage() {
  return (
    <Layout>
      <Breadcrumb pageTitle="Blog Details" pageName="Blog Details" />
      <div className="blog-details pt-120 pb-120">
        <div className="container">
          <div className="row g-lg-5 g-4">
            <div className="col-lg-8">
              <div className="blog-st-wrap">
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
                          The rise of legends for thisi work hard &quot; hard.
                          Egestasoni eget dolor ut consectetur.
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="blog-img">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="assets/images/blog/blog-st1.png"
                        alt="blog-st1"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  Suspendisse bibendum efficitur orci, a pretium erat mattis
                  nec. Vestibulum ante ipsum primis inaetahsjanl faucibus orci
                  luctus et ultrices posuere cubilia curae; Curabitur volutpat
                  eleifend urna Aenean onewaryzo eleifend vitae tellus a
                  facilisis. Nunc posuere at augue eget porta. In odio tellus,
                  dignissim fermentumara purus nec, consequat dapibus
                  metus.Vivamus urna mauris, faucibus at egestas quis, fermentum
                  egetonav neque. Duis pharetra lectus nec risus pellentesque,
                  vitae aliquet nisi dapibus. Sed volutpat mi velit, ateng
                  maximus est eleifend ac. Fusce porttitor ex arcu. Phasellus
                  viverra lorem a nibh placerat tincidunt.bolgotai Aliquam
                  rutrum elementum urna, vel fringilla tellus varius ut. Morbi
                  non velit odio.
                </p>
                <blockquote>
                  <p>
                    &quot;I work with Alguneb Johnl on many projects, he always
                    toldagona exceeds my expectations with his quality work and
                    fastestopa tope service, very smooth and simple
                    communication.&quot;
                  </p>
                  <div className="author-area">
                    <h4>Leslie Alexander</h4>
                    <span>Customer</span>
                  </div>
                </blockquote>
                <h3>The rise of legends for work hard.</h3>
                <p>
                  Suspendisse bibendum efficitur orci, a pretium erat mattis
                  nec. Vestibulum ante ipsum primis inaetahsjanl faucibus orci
                  luctus et ultrices posuere cubilia curae; Curabitur volutpat
                  eleifend urna Aenean onewaryzo eleifend vitae tellus a
                  facilisis. Nunc posuere at augue eget porta. In odio tellus,
                  dignissim fermentumara purus nec, consequat dapibus
                  metus.Vivamus urna mauris, faucibus at egestas quis, fermentum
                  egetonav neque. Duis pharetra lectus nec risus pellentesque,
                  vitae aliquet nisi dapibus.
                </p>
                <div className="post-thumb">
                  <img src="assets/images//blog/blog-dt-1.png" alt="blog-dt1" />
                </div>
                <div className="blog-tag-social d-flex align-items-center justify-content-between">
                  <ul className="blog-tag d-flex align-items-center">
                    <li>
                      <Link href="/blog-grid">
                        <a>Artist</a>
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
                          Portfolio
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
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
                          Crypto
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a>
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
                          Digital Token
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <ul className="social-area d-flex align-items-center">
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-slider-btn-content">
                  <div className="slider-arrows twos d-flex justify-content-between align-items-center gap-4">
                    <div className="blog-dt-prev1 swiper-prev-arrow">
                      <img
                        src="assets/images/icons/roadmap-arrow-right.svg"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div className="blog-dt-next1 swiper-next-arrow">
                      <img
                        src="assets/images/icons/roadmap-arrow-left.svg"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="blog-dt-content-slider d-flex justify-content-between align-items-center">
                    <div className="blog-dt-slider-content">
                      <h5>
                        <Link href="/blog-details">
                          <a>
                            {" "}
                            The rise of legends for thisi work hard &apos; hard.
                            Egestasoni eget.
                          </a>
                        </Link>
                      </h5>
                    </div>
                    <div className="blog-dt-slider-content">
                      <h5>
                        <Link href="/blog-details">
                          <a>
                            The rise of legends for thisi work hard &apos; hard.
                            Egestasoni eget.
                          </a>
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="comments-area pt-120">
                  <div className="comment-title">
                    <h3>
                      2 Comment &nbsp;
                      <img
                        src="assets/images/icons/comment-title-star.svg"
                        alt="comment-title-star"
                      />
                    </h3>
                  </div>
                  <div className="comment-list-area mbb-70">
                    <ul className="comment-list">
                      <li>
                        <div className="single-comment d-flex justify-content-between flex-nowrap">
                          <div className="comment-image">
                            <img
                              src="assets/images/blog/comment-author.png"
                              alt="image"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="c-header">
                              <h5 className="mb-0">
                                <a href="#">Polard Girdet</a>
                              </h5>
                              <div className="c-date">February 21, 2022</div>
                            </div>
                            <div className="c-body">
                              <p>
                                Vestibulum eget mauris dui. Proin luctus est
                                lacus, eu lobortis orchivaone ahanderum
                                dignissimona atei. Ut nec vulputateri nisl.
                                Mauris vel dolor augue toidan. dolorcoulew
                                maximus a finibus eget.
                              </p>
                            </div>
                          </div>
                          <div className="replay-btn">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                        <ul className="comment-reply">
                          <li>
                            <div className="single-comment d-flex justify-content-between flex-nowrap">
                              <div className="comment-image">
                                <img
                                  src="assets/images/blog/comment-author2.png"
                                  alt="image"
                                />
                              </div>
                              <div className="comment-content">
                                <div className="c-header">
                                  <h5 className="mb-0">
                                    <a href="#">Ormania Fulen</a>
                                  </h5>
                                  <div className="c-date">
                                    February 22, 2022
                                  </div>
                                </div>
                                <div className="c-body">
                                  <p>
                                    Vestibulum eget mauris dui. Proin luctus est
                                    lacus, eu lobortis Maurisvel orchivaone
                                    ahanderum dignissimona atei. Ut nec
                                    vulputateri nisl.
                                  </p>
                                </div>
                              </div>
                              <div className="replay-btn">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li />
                    </ul>
                  </div>
                  <div className="comment-form">
                    <div className="comment-title">
                      <h3>
                        Leave A Comment &nbsp;
                        <img
                          src="assets/images/icons/comment-title-star.svg"
                          alt="comment-title-star"
                        />
                      </h3>
                    </div>
                    <form className="contact-form">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          <div className="form-inner">
                            <input
                              type="text"
                              name="fname"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-inner">
                            <input
                              type="email"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-inner">
                            <textarea
                              name="message"
                              rows={5}
                              placeholder="Your Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <button type="submit" className="submit-btn">
                            Connect Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="wc">
                        <span>August 12, 2022</span>
                        <h4>
                          <Link href="/blog-details">
                            <a>
                              {" "}
                              The Rise of Legends for. work hard &apos; Hard.
                            </a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-widgets widget_egns_tag">
                  <div className="widget-title">
                    <h3>Popular Tag</h3>
                  </div>
                  <ul className="wp-block-categoris-cloud d-flex align-items-center flex-wrap">
                    <li>
                      <Link href="/blog-gird">
                        <a>Artist</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-gird">
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
                      <Link href="/blog-gird">
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
                          Crypto
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-gird">
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
                          Digital Token
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-gird">
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
                          Blockchain NFT
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-gird">
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
                          Market Place
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-gird">
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
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook" />
                        <span>FACEBOOK</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-dribbble" />
                        <span>Dribbble</span>
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
