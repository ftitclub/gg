import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
export default function Roadmap() {
    const roadmapBig = {
        loop: true,
        spaceBetween: 10,
        speed: 1400,
        slidesPerView: 1,
        allowTouchMove: false,
        navigation: {
          nextEl: ".roadmap-next1",
          prevEl: ".roadmap-prev1",
        },
    }
    const roadmapSmall = {
        loop: true,
        spaceBetween: 10,
        speed: 1400,
        slidesPerView: 3,
        navigation: {
          nextEl: ".roadmap-next1",
          prevEl: ".roadmap-prev1",
        },
        centeredSlides: true,
        breakpoints: {
          280: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
        },
    }
  return (
    <div className="roadmap-section bg-color2 pt-120 pb-120 overflow-hidden" data-scroll data-scroll-speed={3}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="section-title1">
          <span>Re:Wired AI Roadmap</span>
          <h2>My Following Roadmap.</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row justify-content-center d-flex align-items-center">
      <div className="col-lg-12 position-relative">
        <Swiper {...roadmapSmall} className="swiper swiper-roadmap-small">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="pagenation-stat">
                <svg width={26} height={25} viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0588 6.5L16.3765 2L16.5608 7.8125L21.9059 6.125L18.5882 10.7326L23.9333 12.6875L18.5882 14.375L21.9059 19.0625L16.3765 17.1875V23L12.8745 18.3125L9.55686 23L9.37255 17.1875L4.02745 18.875L7.3451 14.375L2 12.5L7.3451 10.625L4.02745 6.125L9.55686 7.625V2L13.0588 6.5Z" />
                  <circle cx="12.9668" cy="12.5" r="3.5" />
                </svg>
              </div>
              <button className="slider-button">August 20, 2022</button>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="pagenation-stat">
                <svg width={26} height={25} viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0588 6.5L16.3765 2L16.5608 7.8125L21.9059 6.125L18.5882 10.7326L23.9333 12.6875L18.5882 14.375L21.9059 19.0625L16.3765 17.1875V23L12.8745 18.3125L9.55686 23L9.37255 17.1875L4.02745 18.875L7.3451 14.375L2 12.5L7.3451 10.625L4.02745 6.125L9.55686 7.625V2L13.0588 6.5Z" />
                  <circle cx="12.9668" cy="12.5" r="3.5" />
                </svg>
              </div>
              <button className="slider-button">August 05, 2022</button>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="pagenation-stat">
                <svg width={26} height={25} viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0588 6.5L16.3765 2L16.5608 7.8125L21.9059 6.125L18.5882 10.7326L23.9333 12.6875L18.5882 14.375L21.9059 19.0625L16.3765 17.1875V23L12.8745 18.3125L9.55686 23L9.37255 17.1875L4.02745 18.875L7.3451 14.375L2 12.5L7.3451 10.625L4.02745 6.125L9.55686 7.625V2L13.0588 6.5Z" />
                  <circle cx="12.9668" cy="12.5" r="3.5" />
                </svg>
              </div>
              <button className="slider-button">July 30, 2022</button>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="pagenation-stat">
                <svg width={26} height={25} viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0588 6.5L16.3765 2L16.5608 7.8125L21.9059 6.125L18.5882 10.7326L23.9333 12.6875L18.5882 14.375L21.9059 19.0625L16.3765 17.1875V23L12.8745 18.3125L9.55686 23L9.37255 17.1875L4.02745 18.875L7.3451 14.375L2 12.5L7.3451 10.625L4.02745 6.125L9.55686 7.625V2L13.0588 6.5Z" />
                  <circle cx="12.9668" cy="12.5" r="3.5" />
                </svg>
              </div>
              <button className="slider-button">June 07, 2022</button>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="pagenation-stat">
                <svg width={26} height={25} viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0588 6.5L16.3765 2L16.5608 7.8125L21.9059 6.125L18.5882 10.7326L23.9333 12.6875L18.5882 14.375L21.9059 19.0625L16.3765 17.1875V23L12.8745 18.3125L9.55686 23L9.37255 17.1875L4.02745 18.875L7.3451 14.375L2 12.5L7.3451 10.625L4.02745 6.125L9.55686 7.625V2L13.0588 6.5Z" />
                  <circle cx="12.9668" cy="12.5" r="3.5" />
                </svg>
              </div>
              <button className="slider-button">May 08, 2022</button>
            </SwiperSlide>
          </div>
        </Swiper>
        <Swiper {...roadmapBig} className="swiper swiper-roadmap-big">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="roadmap-single">
                <div className="roadmap-content">
                  <span>August 20, 2022</span>
                  <h3>Creative Arts Set to follow up.</h3>
                  <p>Suspendisse bibendum efficitur orci, a pretium eratoin mattis nec.
                    Vestibuluma ante ipsum primis in faucibusol orci luctus et ultrices posuere
                    cubilia curaenan Curabitura volutpat.</p>
                  <ol className="roadmap-list">
                    <li>polvinar felis ut ullamcorp. </li>
                    <li>Vivamus ante diam hendr. </li>
                    <li>Donec sodales ligula ina. </li>
                    <li>Quisque non vestibulumer.</li>
                  </ol>
                </div>
                <div className="roadmap-image">
                  <img src="assets/images/bg/roadmap1.png" className="img-fluid parralax-image" alt="image" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="roadmap-single">
                <div className="roadmap-content">
                  <span>August 05, 2022</span>
                  <h3>Creative Arts Set to follow up.</h3>
                  <p>Suspendisse bibendum efficitur orci, a pretium eratoin mattis nec.
                    Vestibuluma ante ipsum primis in faucibusol orci luctus et ultrices posuere
                    cubilia curaenan Curabitura volutpat.</p>
                  <ol className="roadmap-list">
                    <li>polvinar felis ut ullamcorp. </li>
                    <li>Vivamus ante diam hendr. </li>
                    <li>Donec sodales ligula ina. </li>
                    <li>Quisque non vestibulumer.</li>
                  </ol>
                </div>
                <div className="roadmap-image">
                  <img src="assets/images/bg/roadmap2.png" className="img-fluid parralax-image" alt="image" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="roadmap-single">
                <div className="roadmap-content">
                  <span>July 30, 2022</span>
                  <h3>Creative Arts Set to follow up.</h3>
                  <p>Suspendisse bibendum efficitur orci, a pretium eratoin mattis nec.
                    Vestibuluma ante ipsum primis in faucibusol orci luctus et ultrices posuere
                    cubilia curaenan Curabitura volutpat.</p>
                  <ol className="roadmap-list">
                    <li>polvinar felis ut ullamcorp. </li>
                    <li>Vivamus ante diam hendr. </li>
                    <li>Donec sodales ligula ina. </li>
                    <li>Quisque non vestibulumer.</li>
                  </ol>
                </div>
                <div className="roadmap-image">
                  <img src="assets/images/bg/roadmap3.png" className="img-fluid parralax-image" alt="image" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="roadmap-single">
                <div className="roadmap-content">
                  <span>June 07, 2022</span>
                  <h3>Creative Arts Set to follow up.</h3>
                  <p>Suspendisse bibendum efficitur orci, a pretium eratoin mattis nec.
                    Vestibuluma ante ipsum primis in faucibusol orci luctus et ultrices posuere
                    cubilia curaenan Curabitura volutpat.</p>
                  <ol className="roadmap-list">
                    <li>polvinar felis ut ullamcorp. </li>
                    <li>Vivamus ante diam hendr. </li>
                    <li>Donec sodales ligula ina. </li>
                    <li>Quisque non vestibulumer.</li>
                  </ol>
                </div>
                <div className="roadmap-image">
                  <img src="assets/images/bg/roadmap4.png" className="img-fluid parralax-image" alt="image" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="roadmap-single">
                <div className="roadmap-content">
                  <span>May 08, 2022</span>
                  <h3>Creative Arts Set to follow up.</h3>
                  <p>Suspendisse bibendum efficitur orci, a pretium eratoin mattis nec.
                    Vestibuluma ante ipsum primis in faucibusol orci luctus et ultrices posuere
                    cubilia curaenan Curabitura volutpat.</p>
                  <ol className="roadmap-list">
                    <li>polvinar felis ut ullamcorp. </li>
                    <li>Vivamus ante diam hendr. </li>
                    <li>Donec sodales ligula ina. </li>
                    <li>Quisque non vestibulumer.</li>
                  </ol>
                </div>
                <div className="roadmap-image">
                  <img src="assets/images/bg/roadmap3.png" className="img-fluid parralax-image" alt="image" />
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
    <div className="container">
      <div className="row mt-70 justify-content-center">
        <div className="col-lg-11">
          <div className="slider-arrows twos  d-md-flex d-none justify-content-lg-between justify-content-center align-items-center gap-4">
            <div className="roadmap-prev1 swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide"><img src="assets/images/icons/roadmap-arrow-right.svg" className="img-fluid" alt="image" /></div>
            <div className="roadmap-next1 swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide">
              <img src="assets/images/icons/roadmap-arrow-left.svg" alt="image" className="img-fluid" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
