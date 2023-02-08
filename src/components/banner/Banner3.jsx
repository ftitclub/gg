import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CircleType from "circletype";

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs, EffectFade } from "swiper";
import Script from "next/script";
export default function Banner3() {
  const circleInstance1 = useRef();
  useEffect(() => {
    new CircleType(circleInstance1.current).radius(15);
    setTimeout(() => {}, 1000);
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slider1 = {
    spaceBetween: 10,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  };
  const slider2 = {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    autoplay: true,
    watchSlidesProgress: true,
  };

  return (
    <>
      <div className="banner-section3">
        <div className="circle-text-common circel-tex-area3">
          <a href="https://opensea.io/">
            <img src="assets/images/icons/opensea-icon.svg" alt="image" />
          </a>
          <p ref={circleInstance1} className="circle-text">
            OPENSEAOPENSEAOPENSEA
          </p>
        </div>
        <div className="container-fluid px-0">
          <Swiper
            loop={true}
            spaceBetween={10}
            {...slider1}
            modules={[FreeMode, Navigation, Pagination, Thumbs, EffectFade]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="swiper mySwiper2"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="banner3-image-mobile d-lg-none d-block">
                  <img
                    src="assets/images/bg/banner31.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner3-content">
                      <h2>
                        Come to see my <br /> amazing nft collection.
                      </h2>
                      <Link href="/collection1">
                        <a className="eg-btn btn--primary-outline2 btn--lg">
                          View All Collection
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 d-lg-flex d-none">
                    <div className="banner3-image">
                      <img
                        src="assets/images/bg/banner31.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="banner3-image-mobile d-lg-none d-block">
                  <img
                    src="assets/images/bg/banner32.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner3-content">
                      <h2>
                        Come to see my <br /> Featured nft collection.
                      </h2>
                      <Link href="/collection1">
                        <a className="eg-btn btn--primary-outline2 btn--lg">
                          View All Collection
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 d-lg-flex d-none">
                    <div className="banner3-image">
                      <img
                        src="assets/images/bg/banner32.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="banner3-image-mobile d-lg-none d-block">
                  <img
                    src="assets/images/bg/banner33.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner3-content">
                      <h2>
                        Come to see my <br /> Popular nft collection.
                      </h2>
                      <Link href="/collection1">
                        <a className="eg-btn btn--primary-outline2 btn--lg">
                          View All Collection
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 d-lg-flex d-none">
                    <div className="banner3-image">
                      <img
                        src="assets/images/bg/banner33.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <Swiper
            {...slider2}
            onSwiper={setThumbsSwiper}
            loop={false}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            direction="vertical"
            autoplay={true}
            // watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper mySwiper smalll-image d-sm-flex d-none"
          >
            <div className="swiper-wrapper d-flex flex-column justify-content-center gap-4">
              <SwiperSlide className="swiper-slide">
                <img
                  src="assets/images/bg/banner31.png"
                  className="img-fluid"
                  alt="image"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="assets/images/bg/banner32.png"
                  className="img-fluid"
                  alt="image"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="assets/images/bg/banner33.png"
                  className="img-fluid"
                  alt="image"
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <Script id="isotope" src="js/isotope.pkgd.min.js"></Script>
    </>
  );
}
