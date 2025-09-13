import React from "react";
import Carousel from "@/components/Carousel";

function Projeck() {
  return (
    <>
      <div style={{ height: "600px", position: "relative" }}>
        <div className="flex gap-10 justify-center hei">
          <Carousel
            baseWidth={400}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
          <Carousel
            baseWidth={400}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
          <Carousel
            baseWidth={400}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
          <Carousel
            baseWidth={400}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </>
  );
}

export default Projeck;
