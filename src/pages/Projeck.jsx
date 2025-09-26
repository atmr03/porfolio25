import React from "react";
import Carousel from "@/components/Carousel";
import SpotlightCard from "@/components/SpotlightCard";

function Projeck() {
  return (
    <div id="projeck">
      <h1 className="text-center p-5 pb-48 text-white">My Projeck</h1>
      <div className="flex justify-center gap-11 h-[38em]">
        <SpotlightCard
          className="custom-spotlight-card w-96 h-80"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div>
            <h1>Projeck Satu</h1>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card w-96 h-80"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div>
            <h1>Projeck Satu</h1>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card w-96 h-80"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div>
            <h1>Projeck Satu</h1>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Projeck;
