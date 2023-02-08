import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Script from "next/script";
import Link from "next/link";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);

export default function LatestCollection2() {
  function masonarytest() {
    var elem = document.querySelector(".grid");
    if (elem) {
      var msnry = new Masonry(elem, {
        // options
        itemSelector: ".grid-item",
        columnWidth: 200,
      });
    }

    // element argument can be a selector string
    //   for an individual element
    var msnry = new Masonry(".grid", {
      // options
    });
  }
  useEffect(() => {
    setTimeout(() => {
      if (window.Masonry) masonarytest();
    }, 1000);
  });

  const slider1 = {
    slidesPerView: "auto",
    speed: 700,
    spaceBetween: 15,
    effect: "creative",
    parallax: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, "100%"],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    autoplay: true,
    loop: true,
    pagination: false,
  };
  const slider2 = {
    speed: 1000,
  };
  return (
    <>
      <div className="latest-collection-setion3 bg-color2 pt-120">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="section-title4">
              <span>Collection</span>
              <h2>Latest Collection</h2>
              <img
                src="assets/images/icons/sec-title4-vector.svg"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="row grid g-4" id="imageLoad">
            <div className="col-lg-4 col-md-6 col-sm-6 grid-item">
              <Link href="/collection-details" data-cursor="View<br>Details">
                <a>
                  <div className="latest-singl2">
                    <img
                      src="assets/images/collectoin/latest-coll-21.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 grid-item">
              <Link href="/collection-details" data-cursor="View<br>Details">
                <a>
                  <div className="latest-singl2">
                    <Swiper
                      {...slider1}
                      className="swiper latest-single-slider"
                    >
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <img
                            src="assets/images/collectoin/latest-coll-221.png"
                            className="img-fluid"
                            alt="image"
                          />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <img
                            src="assets/images/collectoin/latest-coll-222.png"
                            className="img-fluid"
                            alt="image"
                          />
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 grid-item">
              <Link href="/collection-details" data-cursor="View<br>Details">
                <a>
                  <div className="latest-singl2 sibling-2">
                    <img
                      src="assets/images/collectoin/latest-coll-23.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 grid-item">
              <Link href="/collection-details" data-cursor="View<br>Details">
                <a>
                  <div className="latest-singl2">
                    <img
                      src="assets/images/collectoin/latest-coll-24.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 grid-item">
              <Link href="/collection-details" data-cursor="View<br>Details">
                <a>
                  <div className="latest-singl2">
                    <img
                      src="assets/images/collectoin/latest-coll-26.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 grid-item">
              <Link href="/collection-details" data-cursor="View<br>Details">
                <a>
                  <div className="latest-singl2 sibling-2">
                    <Swiper
                      {...slider1}
                      {...slider2}
                      className="swiper latest-single-slider2"
                    >
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <img
                            src="assets/images/collectoin/latest-coll-251.png"
                            className="img-fluid"
                            alt="image"
                          />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <img
                            src="assets/images/collectoin/latest-coll-252.png"
                            className="img-fluid"
                            alt="image"
                          />
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 grid-item">
              <Link href="/collection-details" data-cursor="View<br>Details">
                <a>
                  <div className="latest-singl2">
                    <img
                      src="assets/images/collectoin/latest-coll-27.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 grid-item">
              <Link href="/collection-details" data-cursor="View<br>Details">
                <a>
                  <div className="latest-singl2 sibling-2">
                    <img
                      src="assets/images/collectoin/latest-coll-28.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="row pt-80">
            <div className="col-12 d-flex justify-content-center">
              <Link href="/collection-details">
                <a className="eg-btn btn--primary-outline2 btn--lg">
                  View All Collection
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Script src="/js/masonry.pkgd.min.js" />
    </>
  );
}
