import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Order from "./components/Order-Review/Order";
import Shop from "./components/Shop/Shop";
import RequareAuth from "./components/RequareAuth";
import Shipping from "./components/Order-Review/Shipping";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route
          path="/inventory"
          element={
            <RequareAuth>
              <Inventory></Inventory>
            </RequareAuth>
          }
        ></Route>
        <Route
          path="/shipping"
          element={
            <RequareAuth>
              <Shipping></Shipping>
            </RequareAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
