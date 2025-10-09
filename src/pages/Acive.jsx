import React from "react";
import Carousel from "@/components/Carousel";

function Acive() {
  return (
    <div id="acive">
      <h1 className="text-center pt-40 pb-40 text-white">My Acivement</h1>
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
    </div>
  );
}

export default Acive;
