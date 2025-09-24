import React from "react";
import TextType from "@/components/TextType";
import TiltedCard from "@/components/TiltedCard";
import profil from "@/assets/profil.jpg";
import Button from "@/components/Button";
import BlurText from "@/components/BlurText";
import LogoLoop from "@/components/LogoLoop";
import AnimatedContent from "@/components/AnimatedContent";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function About() {
  return (
    <>
      <div
        id="about"
        className="flex justify-between items-center p-10 px-56 h-[51rem] "
      >
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
          className="animate-fadeInUp"
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
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="black"
          ariaLabel="Technology partners"
        />
      </div>
    </>
  );
}

export default About;
