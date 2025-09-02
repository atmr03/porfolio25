import Container from "./pages/container";
import Footer from "./pages/footer";
import DotGrid from "./components/DotGrid";
function App() {
  return (
    <>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-white w-full h-full">
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
      <Container></Container>
      <Footer></Footer>
    </>
  );
}

export default App;
