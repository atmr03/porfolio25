import Footer from "./pages/Footer";
import Home from "./pages/home";
import DotGrid from "./components/DotGrid";
import Navbar from "./pages/navbar";
import About from "./pages/About";
function App() {
  return (
    <div className="bg-black">
      <div className="bg-blue-600">
        <Navbar></Navbar>
      </div>
      <Home></Home>
      <About></About>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
