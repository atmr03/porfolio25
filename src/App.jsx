import Footer from "./pages/Footer";
import Home from "./pages/home";
import DotGrid from "./components/DotGrid";
import Navbar from "./pages/navbar";
function App() {
  return (
    <div className="bg-black">
      <div className="bg-blue-600">
        <Navbar></Navbar>
      </div>
      <Home></Home>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
