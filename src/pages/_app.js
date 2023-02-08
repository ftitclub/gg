import { useEffect } from "react";
import Script from "next/script";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import SmoothPageScroll from "../components/common/SmoothPageScroll";
import Cursor from "../components/common/cursore";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/all.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/swiper-bundle.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/odometer.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/style.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min.js");
  });
  return (
    <>
      <Cursor />
      <SmoothPageScroll />
      <LoadingScreen />
      <Component {...pageProps} />
      <Script id="simpleParallax" src="js/simpleParallax.min.js"></Script>
      <Script id="isotope" src="js/isotope.pkgd.min.js"></Script>
      <Script id="imageLoad" src="js/masonry.pkgd.min.js"></Script>
    </>
  );
}

export default MyApp;
