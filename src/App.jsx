// App.jsx
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
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
import CartPage from "./pages/CartPage/CartPage";
import CartProvider from "./Context/CartContext";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import { CartContext } from "./Context/CartContext";
import User from "./pages/User/User";

const stripePromise = loadStripe(
  "pk_test_51QTQ2oRwtUUOUrvvqkcaO413p3CTwfz82eLSDMLR1BbGnXNXqZnldMyZ9hVy3jvQMhaTCKQDTEmrpUe2IWMZtqMg00aIuOZix5"
);
const CheckoutComponent = () => {
  const { cart } = useContext(CartContext);

  const totalAmount = cart?.reduce(
    (total, item) => total + item.product_price * item.quantity,
    0
  );

  return <CheckoutForm totalAmount={totalAmount} />;
};
const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Elements stripe={stripePromise}>
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
                <Route path="/userpanel" element={<User />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route
                  path="/category/:categoryName"
                  element={<ProductCategoryPage />}
                />
                <Route
                  path="/brand/:brandName"
                  element={<ProductBrandPage />}
                />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/checkout" element={<CheckoutComponent />} />
                <Route path="/service" element={<ReservationSection />} />
              </Routes>
            </div>
          </div>
        </Elements>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
