import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
};

export default App;
