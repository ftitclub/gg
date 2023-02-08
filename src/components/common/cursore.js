import Script from "next/script";
import React, { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    setTimeout(() => {
      const cursor = document.querySelector(".cursor");
      const follower = document.querySelector(".cursor-follower");
      const card = document.querySelectorAll(".custom-cursor");

      let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

      TweenMax.to({}, 0.02, {
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          TweenMax.set(follower, {
            css: {
              left: posX - 20,
              top: posY - 20,
            },
          });

          TweenMax.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      });

      document.addEventListener("mousemove", (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
      });

      card.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.classList.add("active");
          follower.classList.add("active");
        });

        el.addEventListener("mouseleave", () => {
          cursor.classList.remove("active");
          follower.classList.remove("active");
        });
      });
    }, 1000);
  });
  return (
    <>
      <div className="relative z-10">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      {/* <Script src="js/tweenMax.min.js" /> */}
      <Script src="js/gsap.min.js" />
    </>
  );
}
