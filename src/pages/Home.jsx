import React from "react";
import { useRef } from "react";
import Button from "@/components/Button";
import TextPressure from "@/components/TextPressure";
import DecryptedText from "@/components/DecryptedText";
import GlitchText from "@/components/GlitchText";
import VariableProximity from "@/components/VariableProximity";
import TextType from "@/components/TextType";
import TiltedCard from "@/components/TiltedCard";
import profil from "@/assets/profil.jpg";

function Home() {
  return (
    <>
      <div className="flex justify-between items-center p-10 px-56 h-[51rem]">
        <div className="flex flex-col gap-36">
          <TextType
            className="text-8xl w-[60rem]"
            text={[
              "Hey 👋 i'm Mart Setepen Sinaga",
              "I'M a Full Stack Devoloper",
              "Happy coding!",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <div>
            <Button btn="click" className="flex "></Button>
          </div>
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
      <h1>Ini Adalah Home</h1>
    </>
  );
}

export default Home;
