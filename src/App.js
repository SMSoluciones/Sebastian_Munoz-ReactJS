import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenida Ana a nuestra tienda!"} />
      <ItemDetailContainer />
    </>
  );
};

export default App;
