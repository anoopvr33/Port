import { useState } from "react";
import "./style.css";
import axios from "../../autils/axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const OnInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const OnButton = async () => {
    const response = await axios.post("/admin/login", data);

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      navigate("/admin-home");
    } else {
      alert("email or password incorrect");
    }
  };

  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <input name="email" onChange={OnInput} type="text" placeholder="E-mail" />
      <input
        name="password"
        onChange={OnInput}
        type="password"
        placeholder="password"
      />
      <button onClick={OnButton}>Login</button>
    </div>
  );
};

export default AdminLogin;
