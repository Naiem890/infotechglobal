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
import ContactUs from "./components/ContactUs/ContactUs";
import Services from "./components/Services/Services";
import QAService from "./components/Services/QAService";
import ServiceDetails from "./components/Services/ServiceDetails";
import AppDevService from "./components/Services/AppDevService";
import ITProService from "./components/Services/ITProService";
import BiReportService from "./components/Services/BiReportService";
import MSService from "./components/Services/MSService";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />}>
          <Route path="application-development" element={<AppDevService />} />
          <Route path="it-professional" element={<ITProService />} />
          <Route path="qa-services" element={<QAService />} />
          <Route path="bi-reporting" element={<BiReportService />} />
          <Route path="ms-services" element={<MSService />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
