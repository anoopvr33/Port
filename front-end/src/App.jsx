import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../router/Home";
import Apple from "../router/Admin";
import AdminLogin from "../router/AdminLogin";
import AddImage from "../components/AddImage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin-home" element={<Apple />}></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
        <Route path="/add-image" element={<AddImage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
