import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Shared/Header";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Shared/Footer";
import Career from "./components/Career/Career";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
