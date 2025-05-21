import { useEffect, useState } from "react";
import "./style.css"; // Import your CSS file
import axios from "../../autils/axios";

const Apple = () => {
  const [data, setData] = useState([]);

  const GetData = async () => {
    const response = await axios.get("/guest/get-message");

    console.log(response);
    // console.log("ha", token);
    setData(response.data);
  };

  useEffect(() => {
    console.log("render");
    GetData();
  }, []);
  useEffect(() => {}, [data]);

  return (
    <div className="apple">
      <h1>Hi Im Admin</h1>
      {data.map((i, index) => {
        return (
          <div key={index} className="data-msg">
            <h1>{i.name}</h1>
            <h2>{i.email}</h2>
            <p>{i.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Apple;
