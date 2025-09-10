import React from "react";
import TextType from "@/components/TextType";
import TiltedCard from "@/components/TiltedCard";
import profil from "@/assets/profil.jpg";
import Button from "@/components/Button";
import BlurText from "@/components/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function About() {
  return (
    <>
      <div className="flex justify-between items-center p-10 px-56 h-[51rem]">
        <div className="flex flex-col">
          <BlurText
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus autem, dicta perspiciatis eligendi sunt modi aliquid illum! Saepe, delectus consectetur?"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl w-[60rem] px-40 mb-8 text-white"
          />
        </div>
        <TiltedCard
          imageSrc={profil}
          altText="MART"
          captionText="MART"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text p-3 bg-white rounded-xl ">
              Mart Setepen Sinaga
            </p>
          }
        />
      </div>
    </>
  );
}

export default About;
