import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Overview from "./components/Overview";
import Orders from "./components/Orders"; 
import OrderSummary from "./components/OrderSummary"; // Assuming this is the correct import path

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Overview />} />
          <Route path="orders" element={<Orders />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
