import Searcher from "../../components/Searcher/Searcher";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import OffersGrid from "../../components/OffersGrid/OffersGrid";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import carru1 from "../../assets/images/carru1.png";
import carru2 from "../../assets/images/carru2.png";
import carru3 from "../../assets/images/carru3.png";

const images = [carru1, carru2, carru3];

const Home = () => {
  return (
    <>
      <Carousel images={images} interval={2000} />
      <Searcher />
      <ProductGrid />
      <OffersGrid />
      <Footer />
    </>
  );
};

export default Home;
