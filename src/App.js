import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";
import { SalesForm } from "./components/Cart/SalesForm/SalesForm";
import { Login } from "./components/UserLogin/Login";
import { Register } from "./components/UserLogin/Register";
import { Footer } from "./components/Footer/Footer";
// import { ProtectRoute } from "./components/ProtectRoute/ProtectRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    greeting={"¡Bienvenid@ a nuestra tienda! 👨‍🍳"}
                  />
                }
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/product/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/form" element={<SalesForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
