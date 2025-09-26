import React from "react";
import GooeyNav from "@/components/GooeyNav";

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Projeck", href: "#" },
  { label: "Achievement", href: "#" },
  { label: "Contact", href: "#" },
];

function Navbar(props) {
  return (
    <div
      className="text-center items-center flex justify-center"
      style={{ height: "100px", position: "relative" }}
    >
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}

export default Navbar;
