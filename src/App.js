import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={"¡Bienvenida Ana a nuestra tienda! 🧑‍🍳"}
              />
            }
          />

          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route
            path="/producto/:productId"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
