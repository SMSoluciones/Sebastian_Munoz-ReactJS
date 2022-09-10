import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenida Ana a nuestra tienda!"} />
    </>
  );
};

export default App;
