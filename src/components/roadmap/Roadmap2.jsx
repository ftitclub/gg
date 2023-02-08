import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import roadmapData from "../../data/roadmap_data.json";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);

export default function Roadmap2() {
  const roadmapSlider = {
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
      nextEl: ".roadmap-prev2",
      prevEl: ".roadmap-next2",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="roadmap-section2 pbb-120 bg-color2">
      <div className="container-fluid">
        <div className="row">
          <div className="section-title3 mb-60 text-md-start text-center">
            <h2>
              <img
                src="assets/images/icons/section-title-dot.svg"
                alt="image"
              />
              Re:Wired AI Roadmap
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 position-relative">
            <Swiper {...roadmapSlider} className="swiper roadmap-slider2">
              <div className="swiper-wrapper pb-80">
                {roadmapData.map((readmapData) => {
                  const { id, image, title, description, formate, date } =
                    readmapData;
                  return (
                    <SwiperSlide className="swiper-slide" key={id}>
                      {formate === "alpah" || formate === "beta" ? (
                        <div className="roadmap-single-alpha">
                          <div className="raodmap-image">
                            <img
                              src={image}
                              className="img-fluid"
                              alt="image"
                            />
                          </div>
                          <div className="roadmap-content">
                            <span className="date">{date}</span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="roadmap-single-beta">
                          <div className="roadmap-content">
                            <span className="date">{date}</span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                          </div>
                          <div className="raodmap-image">
                            <img
                              src={image}
                              className="img-fluid"
                              alt="image"
                            />
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
            <div className="slider-arrows coming-arrow d-xl-flex d-none flex-row flex-wrap justify-content-between align-items-center">
              <div
                className="roadmap-prev2 swiper-prev-arrow eg-btn btn--primary2 btn--sm"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <img src="assets/images/icons/arrow-left2.svg" alt="image" />
              </div>
              <div
                className="roadmap-next2 swiper-next-arrow eg-btn btn--primary2 btn--sm"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <img src="assets/images/icons/arrow-right2.svg " alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
