import "./App.css";
import Header from "./pages/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer";
import ProductDetail from "./pages/Home/InstockProducts/ProductDetail";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import RequireAuth from "./pages/RequireAuth";
import ManageStock from "./pages/Home/InstockProducts/ManageStock";
import Blogs from "./pages/Blogs";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/manageproducts/:productId"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
        path="/managestock"
        element={
          <RequireAuth>
            <ManageStock></ManageStock>
          </RequireAuth>
        }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
