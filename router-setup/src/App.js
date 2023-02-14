import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import OrderReview from "./components/OrderReview";

export const RingContext = createContext();

function App() {
  return (
    <RingContext.Provider value='hello'>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/orders" element={<OrderReview></OrderReview>}></Route>
        </Routes>
      </div>
    </RingContext.Provider>
  );
}

export default App;
