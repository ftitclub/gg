import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default function Testimonial1() {
  const testimonlSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 15,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".testi1-next",
      prevEl: ".testi1-prev",
    },
    pagination: false,
  };
  return (
    <>
      <div className="testimonial-section bg-color1 pt-120 pb-120">
        <div className="testimonial-image">
          <img
            src="assets/images/bg/testimonial-image.png"
            className="img-fluid"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="row justify-content-lg-end justify-content-center">
            <div className="col-lg-7 col-md-10">
              <div className="section-title1 text-start">
                <span>Testimonial</span>
                <h2>
                  See The Best Collector’s <br />
                  Compliments.
                </h2>
              </div>
              <Swiper
                {...testimonlSlider}
                className="swiper testimonial1-slider position-relative"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial1-single">
                      <div className="testimonial-content">
                        <p>
                          &ldquo;I work with Alguneb Johnl on many projects, he
                          always tolda exceeds my expectations with his quality
                          work and fastestopa service, very smooth and simple
                          communication.&rdquo;
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <h5>Leslie Alexander</h5>
                        <p>Collector</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial1-single">
                      <div className="testimonial-content">
                        <p>
                          &ldquo;But I must explain to you how all this mistaken
                          idea of denouncing pleasure and praising pain was born
                          and I will give you. Expectations with his work
                          fastestopa&rdquo;!
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <h5>Johan Martin Sr</h5>
                        <p>Collector</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial1-single">
                      <div className="testimonial-content">
                        <p>
                          &ldquo;combined with a handful of model sentence
                          structures, to generate Lorem Ipsum which looks
                          reasonable. The generated therefore this mistaken idea
                          of denouncing.&rdquo;
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <h5>Sara Johnson</h5>
                        <p>Collector</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="slider-arrows arrows-style-1 text-center d-md-flex d-none flex-row justify-content-center align-items-center gap-5">
                  <div
                    className="testi1-prev swiper-prev-arrow"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="bi bi-chevron-left" />
                  </div>
                  <div
                    className="testi1-next swiper-next-arrow"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="bi bi-chevron-right" />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
