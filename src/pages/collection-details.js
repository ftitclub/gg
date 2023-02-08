import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs, EffectFade } from "swiper";
export default function CollectionDetailsPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const collectionSlider2 = {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  };
  const slider1Thumb = {
    loop: true,
    freeMode: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  };
  return (
    <Layout>
      <Breadcrumb
        pageName="Collection Details"
        pageTitle="Collection Details"
      />
      <div className="collection-details bg-color2 pt-120 pb-120">
        <div className="container">
          <div className="row g-lg-5 g-4">
            <div className="col-lg-6">
              <div className="collection-thumb-slider">
                <Swiper
                  {...slider1Thumb}
                  loop={true}
                  spaceBetween={10}
                  modules={[
                    FreeMode,
                    Navigation,
                    Pagination,
                    Thumbs,
                    EffectFade,
                  ]}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  className="swiper collection-thumb-slider01"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/collectoin/collection-thumb-big-01.png"
                        alt="collection-thumb-big1"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/collectoin/collection-thumb-big-02.png"
                        alt="collection-thumb-big2"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/collectoin/collection-thumb-big-04.png"
                        alt="collection-thumb-big3"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/collectoin/collection-thumb-big-03.png"
                        alt="collection-thumb-big4"
                      />
                    </SwiperSlide>
                  </div>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={false}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  autoplay={true}
                  // watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="swiper collection-thumb-slider02"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/collectoin/collection-thumb-1.png"
                        alt="collection-thumb-1"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/collectoin/collection-thumb-2.png"
                        alt="collection-thumb-2"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/collectoin/collection-thumb-3.png"
                        alt="collection-thumb-3"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="assets/images/collectoin/collection-thumb-4.png"
                        alt="collection-thumb-4"
                      />
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="slider-btn d-flex align-items-center justify-content-md-between justify-content-center gap-5">
                  <div className="swiper-button-next1">
                    <i className="bi bi-chevron-left" />
                  </div>
                  <div className="swiper-button-prev1">
                    <i className="bi bi-chevron-right" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="collection-details-content">
                <div className="section-title">
                  <h3>
                    Price: <span>0.15 ETH</span>
                  </h3>
                  <h4>Avalle #1234</h4>
                </div>
                <p>
                  Suspendisse bibendum efficitur orci, a pretium erat mattis
                  nec. Vestibulum antegou ipsum primis in faucibus orci luctus
                  et ultrices posuere cubilia curae; Curabitur vou volutpat
                  eleifend urna Aenean eleifend vitae tellus a facilisis.
                </p>
                <div className="collection-feature">
                  <div className="section-title">
                    <h3>Feature</h3>
                  </div>
                  <ul className="features ">
                    <li>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                        ></path>
                      </svg>
                      &nbsp;Suspendisse bibendum efficitur.
                    </li>
                    <li>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                        ></path>
                      </svg>
                      &nbsp;Fusce porttitor ex arculabent.
                    </li>
                    <li>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                        ></path>
                      </svg>
                      &nbsp;Morbi vitae arcu luctus faucib.
                    </li>
                    <li>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M6.55462 2.78571L8.52101 0L8.63025 3.59821L11.7983 2.55357L9.83193 5.40592L13 6.61607L9.83193 7.66071L11.7983 10.5625L8.52101 9.40179V13L6.44538 10.0982L4.47899 13L4.36975 9.40179L1.20168 10.4464L3.16807 7.66071L0 6.5L3.16807 5.33929L1.20168 2.55357L4.47899 3.48214V0L6.55462 2.78571Z"
                        ></path>
                      </svg>
                      &nbsp;Interdum et malesuada fames.
                    </li>
                  </ul>
                  <div className="row justify-content-center g-4">
                    <div className="col-lg-4 col-md-4 col-6">
                      <div className="single-features">
                        <span>Clothing</span>
                        <h5>Blank</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6">
                      <div className="single-features">
                        <span>Eyes</span>
                        <h5>Mix</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6">
                      <div className="single-features">
                        <span>Face</span>
                        <h5>Gray</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6">
                      <div className="single-features">
                        <span>Skin</span>
                        <h5>Gray</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6">
                      <div className="single-features">
                        <span>Background</span>
                        <h5>Blank</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6">
                      <div className="single-features">
                        <span>Special</span>
                        <h5>Art</h5>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="open-btn">
                        <a href="https://opensea.io/">
                          <img
                            src="assets/images/icons/openSea-logo.svg"
                            alt="image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
