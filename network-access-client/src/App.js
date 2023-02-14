import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import TopicDetail from "./pages/TopicDetail";
import SelectedTopic from "./pages/SelectedTopic";
import RequireAuth from "./pages/RequireAuth";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/topicdetail/:tpicId"
          element={<TopicDetail></TopicDetail>}
        ></Route>
        <Route
          path="/selectedTopic"
          element={
            <RequireAuth>
              <SelectedTopic></SelectedTopic>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
