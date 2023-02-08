import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);

export default function TrandingCollection1() {
  const trandingCollectionSliser = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".coming-prev1",
      prevEl: ".coming-next1",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div
      className="trending-collection bg-color1 pt-120 pb-120"
      data-scroll
      data-scroll-speed={3}
    >
      <div className="container">
        <div className="row align-items-center mb-60 g-4">
          <div className="col-lg-6 justify-content-lg-start justify-content-center">
            <div className="section-title1 text-lg-start text-center mb-0">
              <h2>Trending Collection</h2>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end text-center">
            <Link href="/collection2">
              <a className="eg-btn btn--primary-outline btn--lg">
                View All Collection
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Swiper
              {...trandingCollectionSliser}
              className="swiper trending-slider1"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <Link href="/collection-details">
                    <a>
                      <div className="trending-single1 custom-cursor">
                        <div className="trending-image">
                          <img
                            src="assets/images/tranding/tranding1.png"
                            alt="image"
                          />
                        </div>
                        <div className="trending-title">
                          <span>Avalle #5970</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="/collection-details">
                    <a>
                      <div className="trending-single1 custom-cursor">
                        <div className="trending-image">
                          <img
                            src="assets/images/tranding/tranding2.png"
                            alt="image"
                          />
                        </div>
                        <div className="trending-title">
                          <span>Avalle #1234</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="/collection-details">
                    <a>
                      <div className="trending-single1 custom-cursor">
                        <div className="trending-image">
                          <img
                            src="assets/images/tranding/tranding5.png"
                            alt="image"
                          />
                        </div>
                        <div className="trending-title">
                          <span>Avalle #5648</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="/collection-details">
                    <a>
                      <div className="trending-single1 custom-cursor">
                        <div className="trending-image">
                          <img
                            src="assets/images/tranding/tranding4.png"
                            alt="image"
                          />
                        </div>
                        <div className="trending-title">
                          <span>Avalle #9101</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="/collection-details">
                    <a>
                      <div className="trending-single1 custom-cursor">
                        <div className="trending-image">
                          <img
                            src="\assets\images\tranding\tranding5.png"
                            alt="image"
                          />
                        </div>
                        <div className="trending-title">
                          <span>Avalle #1121</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
