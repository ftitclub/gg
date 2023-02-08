import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from 'next/link';
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
export default function LatestCollection() {
    const latesCollectionSlider = {
        slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 5,
    loop: true,
    autoplay: true,
    // centeredSlides: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".latest-collection-prev1",
      prevEl: ".latest-collection-next1",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      576: {
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
    }
  return (
    <div className="latest-collection-section bg-color1 pt-120 pb-120 overflow-hidden">
  <div className="container-fluid">
    <div className="row">
      <div className="section-title3 mb-60 text-md-start text-center">
        <h2> <img src="assets/images/icons/section-title-dot.svg" alt="image" />Latest Collection</h2>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-10">
        <Swiper {...latesCollectionSlider} className="swiper latest-collection-slider">
          <div className="swiper-wrapper pb-80">
            <SwiperSlide className="swiper-slide">
              <div className="latest-collection-single1">
                <div className="latest-collection-image">
                  <div className="latest-image-overlay">
                    <Link href="/collection-details"><a  className="eg-btn btn--primary btn--sm">View Details</a></Link>
                  </div>
                  <img src="assets/images/collectoin/latest-coll-1.png" className="img-fluid" alt="image" />
                </div>
                <div className="latest-collection-title">
                  <Link href="/collectiond-details"><a>Avalle #5970</a></Link>
                </div>
                <span className="latest-collection-serial">01</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="latest-collection-single1">
                <div className="latest-collection-image">
                  <div className="latest-image-overlay">
                    <Link href="/collection-details"><a  className="eg-btn btn--primary btn--sm">View Details</a></Link>
                  </div>
                  <img src="assets/images/collectoin/latest-coll-2.png" className="img-fluid" alt="image" />
                </div>
                <div className="latest-collection-title">
                  <Link href="/collectiond-details"><a>Avalle #1234</a></Link>
                </div>
                <span className="latest-collection-serial">02</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="latest-collection-single1">
                <div className="latest-collection-image">
                  <div className="latest-image-overlay">
                    <Link href="/collection-details"><a  className="eg-btn btn--primary btn--sm">View Details</a></Link>
                  </div>
                  <img src="assets/images/collectoin/latest-coll-3.png" className="img-fluid" alt="image" />
                </div>
                <div className="latest-collection-title">
                  <Link href="/collectiond-details"><a>Avalle #5648</a></Link>
                </div>
                <span className="latest-collection-serial">03</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="latest-collection-single1">
                <div className="latest-collection-image">
                  <div className="latest-image-overlay">
                    <Link href="/collection-details"><a  className="eg-btn btn--primary btn--sm">View Details</a></Link>
                  </div>
                  <img src="assets/images/collectoin/latest-coll-4.png" className="img-fluid" alt="image" />
                </div>
                <div className="latest-collection-title">
                  <Link href="/collectiond-details"><a>Avalle #9101</a></Link>
                </div>
                <span className="latest-collection-serial">04</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="latest-collection-single1">
                <div className="latest-collection-image">
                  <div className="latest-image-overlay">
                    <Link href="/collection-details"><a  className="eg-btn btn--primary btn--sm">View Details</a></Link>
                  </div>
                  <img src="assets/images/collectoin/latest-coll-2.png" className="img-fluid" alt="image" />
                </div>
                <div className="latest-collection-title">
                  <Link href="/collectiond-details"><a>Avalle #1121</a></Link>
                </div>
                <span className="latest-collection-serial">05</span>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="col-lg-2">
        <div className="slider-arrows coming-arrow d-flex flex-lg-column flex-row flex-wrap justify-content-center align-items-center gap-5">
          <div className="latest-collection-prev1 swiper-prev-arrow eg-btn btn--primary2 btn--sm me-lg-5" tabIndex={0} role="button" aria-label="Previous slide"><img src="assets/images/icons/arrow-left2.svg" alt="image" /></div>
          <div className="latest-collection-next1 swiper-next-arrow eg-btn btn--primary2 btn--sm ms-lg-5" tabIndex={0} role="button" aria-label="Next slide"><img src="assets/images/icons/arrow-right2.svg " alt="image" /></div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
