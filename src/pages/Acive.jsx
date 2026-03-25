import React from "react";
import CircularGallery from "@/components/CircularGallery";

import foto1 from "@/assets/acive1.png";
import foto2 from "@/assets/acive2.png";
import foto3 from "@/assets/acive3.png";
import foto4 from "@/assets/acive4.png";
import foto5 from "@/assets/acive5.png";
import foto6 from "@/assets/acive6.png";
import foto7 from "@/assets/acive7.png";

const achievements = [
  {
    image: foto1,
    text: "Financial literacy",
  },
  { image: foto2, text: "financial " },
  { image: foto3, text: "Could And Gen Ai di AWS Dasar" },
  { image: foto4, text: "Javascript Dasar " },
  { image: foto5, text: "Front-Ent Web Dasar" },
  { image: foto6, text: "Dasar web" },
  { image: foto7, text: "Dasar WEB" },
];
function Acive() {
  return (
    <div id="acive">
      <h1 className="text-center pt-40 pb-14 text-white">My Achievement</h1>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          items={achievements}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </div>
  );
}

export default Acive;
