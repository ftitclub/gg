import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Testimonial3() {
  useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = useState(false);
  const testmonial3Slider = {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
  };
  return (
    <div className="testimonial-section3 pt-120">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="section-title4">
            <span>Testimonial</span>
            <h2>Regards Of Collectors.</h2>
            <img
              src="assets/images/icons/sec-title4-vector.svg"
              className="img-fluid"
              alt="image"
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center position-relative">
          <div className="col-lg-4 order-lg-1 order-2 position-relative">
            <div className="video-single">
              <div className="video-play">
                <div
                  onClick={() => setOpen(true)}
                  style={{ cursor: "pointer" }}
                  className="popup-youtube video-icon not-hide-cursor"
                  data-cursor="Open <br>Video"
                >
                  <i className="bi bi-play" />
                </div>
              </div>
              <img
                src="assets/images/bg/testi3-video.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-8 order-lg-2 order-1 mbb-120">
            <Swiper
              {...testmonial3Slider}
              className="swiper testimonial3-slider position-relative"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial3-single">
                    <div className="testimonial-content">
                      <p>
                        &ldquo;I work with Alguneb Johnl on many projects, he
                        always tolda exceeds my expectations with his quality
                        work and fastestopa service, very smooth and simple
                        communication.&rdquo;
                      </p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img
                          src="assets/images/bg/testi-author31.png"
                          alt="image"
                        />
                      </div>
                      <div className="author-designation">
                        <h5>Leslie Alexander</h5>
                        <p>Collector</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial3-single">
                    <div className="testimonial-content">
                      <p>
                        &ldquo;But I must explain to you how all this mistaken
                        idea of denouncing pleasure and praising pain was born
                        and I will give you. Expectations with his work
                        fastestopa&rdquo;!!
                      </p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img
                          src="assets/images/bg/testi-author32.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                      <div className="author-designation">
                        <h5>Alex Jordan</h5>
                        <p>Collector</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial3-single">
                    <div className="testimonial-content">
                      <p>
                        &ldquo;combined with a handful of model sentence
                        structures,to generate Lorem Ipsum which looks
                        reasonable. The generated therefore this mistaken idea
                        of denouncing.&rdquo;
                      </p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img
                          src="assets/images/bg/testi-author33.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                      <div className="author-designation">
                        <h5>Sandy Marlon</h5>
                        <p>Artist</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="swiper-pagination d-lg-flex d-none" />
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="127203262"
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
