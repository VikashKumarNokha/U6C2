import { Route, Routes } from "react-router-dom";
import "./App.css";
  import Navbar from "./components/Navbar/Navbar";
  import Home from "./pages/Home";
  import Products from "./components/Products/Products";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/products" element={<Products/>}></Route>
       </Routes>
      {
        // Code here
      }
    </div>
  );
}

export default App;
