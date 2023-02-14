import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AppoinmentPage from "./pages/appoinment/AppoinmentPage";
import Header from "./pages/header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import "react-toastify/dist/ReactToastify.css";
import RequireRoute from "./pages/shared/RequireRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import MyAppoinment from "./pages/dashboard/MyAppoinment";
import MyRiview from "./pages/dashboard/MyRiview";
import AllUsers from "./pages/dashboard/AllUsers";
import RequireAdmin from "./pages/shared/RequireAdmin";
import AddDoctors from "./pages/dashboard/AddDoctors";
import ManageDoctors from "./pages/dashboard/ManageDoctors";

function App() {
  return (
    <div className="max-w-8xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/appoinment"
          element={
            <RequireRoute>
              <AppoinmentPage></AppoinmentPage>
            </RequireRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireRoute>
              <Dashboard></Dashboard>
            </RequireRoute>
          }
        >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="review" element={<MyRiview></MyRiview>}></Route>
          <Route
            path="allusers"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctors></AddDoctors>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctors></ManageDoctors>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
