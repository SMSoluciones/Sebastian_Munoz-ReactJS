import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { CustomProvider } from "./Context/CustomContext";
import { SalesForm } from "./components/Cart/SalesForm/SalesForm";
import { Login } from "./components/UserLogin/Login";
import { Register } from "./components/UserLogin/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CustomProvider>
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
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
