import React from "react";
import Button from "@/components/Button";
import TextPressure from "@/components/TextPressure";
function Home() {
  return (
    <>
      <div style={{ position: "relative", height: "300px" }}>
        <TextPressure
          text="I'M MART"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#000000"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      <h1>Ini Adalah Home</h1>
      <Button btn="click"></Button>
    </>
  );
}

export default Home;
