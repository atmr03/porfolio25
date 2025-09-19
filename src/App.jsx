import Navbar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Projeck from "./pages/Projeck";
import Acive from "./pages/Acive";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import DotGrid from "./components/DotGrid";
function App() {
  return (
    <>
      <div className="bg-black">
        <div className="bg-blue-600">
          <Navbar></Navbar>
        </div>
        <Home></Home>
        <About></About>
        <Projeck></Projeck>
        <Acive></Acive>
        <Contact></Contact>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}

export default App;
