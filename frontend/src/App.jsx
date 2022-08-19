import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Store from "./pages/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
