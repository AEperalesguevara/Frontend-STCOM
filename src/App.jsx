import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProductCategoryPage from "./pages/ProductCategoryPage/ProductCategoryPage";
import ProductBrandPage from "./pages/ProductBrandPage/ProductBrandPage";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import Catalog from "./pages/Catalog/Catalog";
import Nosotros from "./pages/Nosotros/Nosotros";
import ReservationSection from "./pages/Reserva/ReservationSection";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./Context/AuthContext";
import Admin from "./pages/Admin/Admin";

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route
              path="/category/:categoryName"
              element={<ProductCategoryPage />}
            />
            <Route path="/brand/:brandName" element={<ProductBrandPage />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/service" element={<ReservationSection />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
