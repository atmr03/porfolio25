import React from "react";
import SpotlightCard from "@/components/SpotlightCard";
import gambar1 from "@/assets/projeck25.png";

function Projeck() {
  return (
    <div id="projeck">
      <h1 className="text-center pt-10 p-5 pb-48 text-white">My Projeck</h1>
      <div className="flex justify-center gap-11 h-[38em]">
        <SpotlightCard
          className="custom-spotlight-card w-4/6 h-{2000em}"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          {/* Tambahkan gambar di sini ↓ */}
          <img
            src={gambar1}
            alt="Projeck Satu"
            className="w-full h-68 object-cover rounded-lg"
          />

          <div className="mt-3">
            <h1 className="text-white font-bold">Projeck Satu</h1>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Projeck;
