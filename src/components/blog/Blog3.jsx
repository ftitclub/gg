import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
SwiperCore.use([Navigation, Pagination, Autoplay]);
export default function Blog3() {
  const blog3Slider = {
    slidesPerView: 2,
    speed: 1000,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    mousewheel: true,
    parallax: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".blog-prev3",
      prevEl: ".blog-next3",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <div className="blog-section3 bg-color2 pb-120">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="section-title4">
            <span>Blog News</span>
            <h2>Latest Blog &amp; News</h2>
            <img src="assets/images/icons/sec-title4-vector.svg" alt="image" />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-4">
            <div className="blog-single3-alpha">
              <img
                src="assets/images/blog/blog3-alpha.png"
                className="parralax-image img-fluid"
                alt="image"
              />
              <div className="blog-single3-date">
                {" "}
                August <span>18</span> 2022
              </div>
              <div className="blog-single3-content">
                <h3>
                  <Link href="/blog-details">
                    <a className="not-hide-cursor">
                      The Rise ofee Legendsi forenag thisi work hard.
                    </a>
                  </Link>
                </h3>
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
          <div className="col-xl-7 col-lg-8">
            <Swiper {...blog3Slider} className="swiper blog3-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="blog-single3-beta">
                    <div className="blog-single3-meta">
                      <div className="blog-author">Angunel John</div>
                      <div className="blog-star">
                        <img
                          src="assets/images/icons/h3-blog-star.svg"
                          alt="h3-blog-star"
                        />
                      </div>
                      <div className="blog-date">August 12, 2022</div>
                    </div>
                    <div className="blog-single3-content">
                      <h4>
                        <Link href="/blog-details">
                          <a className="not-hide-cursor">
                            sollicitudin, in lobortis felisl tincidunt.
                            Pellentesque.
                          </a>
                        </Link>
                      </h4>
                      <p>
                        Ni hao ma wo hen hao pretium eratoin one mattis nec.
                        Vestibulum ante ipsum primis in faucibusol.{" "}
                      </p>
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-single3-beta">
                    <div className="blog-single3-meta">
                      <div className="blog-author">Peter Doe</div>
                      <div className="blog-star">
                        <img
                          src="assets/images/icons/h3-blog-star.svg"
                          alt="h3-blog-star"
                        />
                      </div>
                      <div className="blog-date">August 14, 2022</div>
                    </div>
                    <div className="blog-single3-content">
                      <h4>
                        <Link href="/blog-details">
                          <a className="not-hide-cursor">
                            Duis vitae magna ligula and Donec luctus mi id.
                          </a>
                        </Link>
                      </h4>
                      <p>
                        Ni hao ma wo hen hao pretium eratoin one mattis nec.
                        Vestibulum ante ipsum primis in faucibusol.{" "}
                      </p>
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
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-arrows arrow-style-3 d-flex justify-content-between align-items-center mt-50">
              <div
                className="blog-prev3 swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <img src="assets/images/icons/prev3.svg" alt="image" />
                PREVIOUS
              </div>
              <div
                className="blog-next3 swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                NEXT
                <img src="assets/images/icons/next3.svg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
