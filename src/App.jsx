import Footer from "./pages/Footer";
import Home from "./pages/home";
import DotGrid from "./components/DotGrid";
import Navbar from "./pages/navbar";
function App() {
  return (
    <>
      <div className="absolute top-0 right-0 left-0 bg-black bottom-0 w-full h-full">
        <Navbar></Navbar>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={150}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
