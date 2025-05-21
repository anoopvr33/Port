import { useState } from "react";
import "./style.css";
import axios from "axios";

const AddImage = () => {
  const [data, setData] = useState([]);

  const Cloud = async (file) => {
    const formData = new FormData();

    // Iterate over the images array and upload each image
    {
      // Creating a form data object for each image
      formData.append("file", file);
      formData.append("upload_preset", "project_image"); // Replace with your preset

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dcj6kjciu/image/upload",
          formData
        );
        console.log("Image uploaded successfully:", response.data);
        const imageUrl = response.data.secure_url;
        setData([...data, imageUrl]);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const OnInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      Cloud(file);
    }
  };

  return (
    <div className="image-main-1">
      <input type="file" onChange={OnInput} name="" id="" />
      {data.map((i, index) => {
        return (
          <div key={index} className="img123">
            <img style={{ width: "100px" }} src={i} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default AddImage;
