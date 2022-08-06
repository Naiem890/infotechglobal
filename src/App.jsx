import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Shared/Header";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
