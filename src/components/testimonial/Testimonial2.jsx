import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default function Testimonial2() {
  const testimonialSlider2 = {
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
      nextEl: ".testi-next3",
      prevEl: ".testi-prev3",
    },
    pagination: false,
  };
  return (
    <div className="testimonial-section2 bg-color2 pt-120 pb-120">
      <div className="container">
        <div className="row mb-70">
          <div className="section-title3">
            <h2>
              <img
                src="assets/images/icons/section-title-dot.svg"
                alt="image"
              />
              Praising Words.
            </h2>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-lg-4 d-lg-flex d-none">
            <div className="testimonial-image">
              <img
                src="assets/images/bg/testi21.png"
                className="img-fludi parralax-image"
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <Swiper
              {...testimonialSlider2}
              className="swiper testimonial-slider2 position-relative"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single2">
                    <div className="testimonial-content">
                      <img
                        className="testi-quate"
                        src="assets/images/icons/quate.svg"
                        alt="quate"
                      />
                      <p>
                        &quot;;I work with Alguneb Johnl on many projects, he
                        always tolda exceeds my expectations with his quality
                        work and fastestopa service, very smooth and simple
                        communication. &quot;
                      </p>
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/bg/author21.png"
                            alt="image"
                          />
                        </div>
                        <div className="author-details">
                          <h5>Leslie Alexander</h5>
                          <p>Collector</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single2">
                    <div className="testimonial-content">
                      <img
                        className="testi-quate"
                        src="assets/images/icons/quate.svg"
                        alt="quate"
                      />
                      <p>
                        &quot;But I must explain to you how all this mistaken
                        idea of denouncing pleasure and praising pain was born
                        and I will give you. Expectations with his work
                        fastestopa &quot;!
                      </p>
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/bg/author21.png"
                            alt="image"
                          />
                        </div>
                        <div className="author-details">
                          <h5>Leslie Alexander</h5>
                          <p>Collector</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single2">
                    <div className="testimonial-content">
                      <img
                        className="testi-quate"
                        src="assets/images/icons/quate.svg"
                        alt="quate"
                      />
                      <p>
                        &quot;;combined with a handful of model sentence
                        structures,to generate Lorem Ipsum which looks
                        reasonable. The generated therefore this mistaken idea
                        of denouncing. &quot;
                      </p>
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/bg/author22.png"
                            alt="image"
                          />
                        </div>
                        <div className="author-details">
                          <h5>Tom Davies</h5>
                          <p>Collector</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-single2">
                    <div className="testimonial-content">
                      <img
                        className="testi-quate"
                        src="assets/images/icons/quate.svg"
                        alt="quate"
                      />
                      <p>
                        &quot;I work with Alguneb Johnl on many projects, he
                        always on tolda forn tha exceeds my expectations with
                        his quality work andani fastestopasn told up service,
                        very smooth and simple communication one the way to go
                        upe for my work experience. &quot;
                      </p>
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/bg/author23.png"
                            alt="image"
                          />
                        </div>
                        <div className="author-details">
                          <h5>Li Smith</h5>
                          <p>Collector</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="testi-arrow-2  arrows-style-2 d-flex flex-row flex-wrap justify-content-end align-items-center gap-5">
                <div
                  className="testi-prev3 swiper-prev-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <img src="assets/images/icons/arrow-left3.svg" alt="image" />
                </div>
                <div
                  className="testi-next3 swiper-next-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <img src="assets/images/icons/arrow-right3.svg" alt="image" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
