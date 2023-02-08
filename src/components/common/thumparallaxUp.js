const thumparallaxUp = () => {
  
  let imageUp = document.getElementsByClassName("parralax-image");
  if (imageUp) {
    new simpleParallax(imageUp, {
      orientation: "right",
    delay: 0.4,
    });
  }
};

export default thumparallaxUp;
