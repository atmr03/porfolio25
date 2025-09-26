import React from "react";
import Button from "@/components/Button";
import TextType from "@/components/TextType";
import AnimatedContent from "@/components/AnimatedContent";
function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col gap-10 justify-center text-center items-center p-10 px-56 h-[51rem]"
      >
        <TextType
          className="text-6xl"
          text={["Hi, 👋 i'm Mart", "Full Stack Developer"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        ></TextType>
        <div className="gap-3 flex">
          <span className="bg-white px-4 py-2 rounded-xl">View CV </span>
          <span className="bg-white px-4 py-2 rounded-xl">Download CV</span>
        </div>
      </div>
    </>
  );
}

export default Home;
