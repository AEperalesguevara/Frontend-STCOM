import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Searcher from "./components/Searcher/Searcher";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import carru1 from "./assets/images/carru1.png";
import carru2 from "./assets/images/carru2.png";
import carru3 from "./assets/images/carru3.png";
import OffersGrid from "./components/OffersGrid/OffersGrid";

const images = [carru1, carru2, carru3];
const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Carousel images={images} interval={2000} />
        <Searcher />
        <ProductGrid />
        <OffersGrid />
        <Footer />
      </div>
    </>
  );
};

export default App;
