import Navbar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Projeck from "./pages/Projeck";
import Acive from "./pages/Acive";
import Contact from "./pages/Contact";
import TargetCursor from "./components/TargetCursor";
import GooeyNav from "@/components/GooeyNav";
import Tmblbtn from "./components/Tmblbtn";
import PixelSnow from "./components/PixelSnow";
import Footer from "./pages/Footer";
import DotGrid from "./components/DotGrid";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projeck", href: "#projeck" },
  { label: "Achievement", href: "#acive" },
  { label: "Contact", href: "#contack" },
];

function App() {
  return (
    <div
      className="scroll-smooth"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <PixelSnow
        color="#fff"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        density={0.3}
        direction={125}
        brightness={1}
      />
      <div className="bg-black">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <div className="bg-blue-600 fixed top-0 left-0 right-0 z-30">
          <div
            className="scroll-smooth text-center items-center flex justify-center sm:bg-yellow-300 sm:text-2xl"
            // terakhir sini
            style={{ height: "100px", position: "relative" }}
          >
            <GooeyNav
              className="sm:bg-yellow-300 sm:flex-none"
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
        </div>
        <Home id="home"></Home>
        <About id="about"></About>
        <Projeck id="projeck"></Projeck>
        <Acive id="acive"></Acive>
        <Contact id="contack"></Contact>
        <Tmblbtn></Tmblbtn>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
}

export default App;
