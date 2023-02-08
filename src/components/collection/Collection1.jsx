import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
export default function Collection1() {
  const collectionSlides = {
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
        slidesPerView: 1,
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
    <div className="collection-section1 bg-color1 pt-120 pb-120">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="section-title1" data-scroll>
              <span>Collection</span>
              <h2>Remarkable Collections</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...collectionSlides} className="swiper collection-slider1">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <Link href="/ollection-details">
                    <a>
                      <div className="collection-single1 custom-cursor">
                        <img
                          src="assets/images/collectoin/collection1.png"
                          alt="image"
                        />
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="/collection-details">
                    <a>
                      <div className="collection-single1 custom-cursor">
                        <img
                          src="assets/images/collectoin/collection2.png"
                          alt="image"
                        />
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="/collection-details">
                    <a>
                      {" "}
                      <div className="collection-single1 custom-cursor">
                        <img
                          src="assets/images/collectoin/collection3.png"
                          alt="image"
                        />
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="/collection-details">
                    <a>
                      <div className="collection-single1 custom-cursor">
                        <img
                          src="assets/images/collectoin/collection4.png"
                          alt="image"
                        />
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link
                    href="/collection-details"
                    data-cursor="View<br>Details"
                  >
                    <a>
                      <div className="collection-single1 custom-cursor">
                        <img
                          src="assets/images/collectoin/collection5.png"
                          alt="image"
                        />
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-70">
          <div className="slider-arrows coming-arrow d-flex justify-content-sm-between justify-content-center align-items-center">
            <div
              className="coming-prev1 swiper-prev-arrow d-sm-flex d-none"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <img src="assets/images/icons/arrow-left.svg" alt="image" />
            </div>
            <Link href="/collectoin1">
              <a className="eg-btn btn--primary-outline btn--lg">
                View All Collection
              </a>
            </Link>
            <div
              className="coming-next1 swiper-next-arrow d-sm-flex d-none"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <img src="assets/images/icons/arrow-right.svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
