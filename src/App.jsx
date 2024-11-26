import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import ItemListContainer from "./components/ItemListContainer"
import NavbarReactBootstrap from "./components/NavbarReactBootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";


function App() {
  return (
    <BrowserRouter>
      <NavbarReactBootstrap />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />} />
        <Route path="/products/:category" element={<ItemListContainer greeting="Categoria: " />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
