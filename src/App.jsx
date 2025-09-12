import Footer from "./pages/Footer";
import Home from "./pages/home";
import DotGrid from "./components/DotGrid";
import Navbar from "./pages/navbar";
import About from "./pages/About";
function App() {
  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="bg-black">
        <div className="bg-blue-600">
          <Navbar></Navbar>
        </div>
        <Home></Home>
        <About></About>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}

export default App;
