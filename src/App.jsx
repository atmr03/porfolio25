import Navbar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Projeck from "./pages/Projeck";
import Acive from "./pages/Acive";
import Contact from "./pages/Contact";
import TargetCursor from "./components/TargetCursor";
import GooeyNav from "@/components/GooeyNav";
import Tmblbtn from "./components/Tmblbtn";

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
    <div className="scroll-smooth">
      <div className="bg-black ">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <div className="bg-blue-600">
          <div
            className="scroll-smooth text-center items-center flex justify-center"
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
