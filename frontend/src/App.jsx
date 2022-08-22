import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
