import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting={"¡Bienvenida Ana a nuestra tienda! 🧑‍🍳"} />
        <ItemDetailContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
