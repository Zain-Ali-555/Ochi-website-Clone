import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marqee from "./Components/Marqee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full h-screen bg-[#f1f1f1] text-[#111]">
        <Navbar />
        <LandingPage />
        <Marqee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;
