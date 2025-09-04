import React from "react";
import { useRef } from "react";
import Button from "@/components/Button";
import TextPressure from "@/components/TextPressure";
import DecryptedText from "@/components/DecryptedText";
import GlitchText from "@/components/GlitchText";
import VariableProximity from "@/components/VariableProximity";
import TextType from "@/components/TextType";

function Home() {
  return (
    <>
      <TextType
        className="text-red-600 size-72 bg-black"
        text={["Text typing effect", "for your websites", "Happy coding!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
      <h1>Ini Adalah Home</h1>
      <Button btn="click"></Button>
    </>
  );
}

export default Home;
