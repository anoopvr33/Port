import axios from "axios";
import "./style.css";
import { useEffect } from "react";

const Project = () => {
  const images = "/images/matrimony.jpg";

  // const formData = new formData();
  // formData.append('file');

  const Cloud = async () => {
    const formData = new FormData();

    // Iterate over the images array and upload each image
    {
      // Creating a form data object for each image
      formData.append("file", images);
      formData.append("upload_preset", "project_image"); // Replace with your preset

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dcj6kjciu/image/upload",
          formData
        );
        console.log("Image uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  useEffect(() => {
    Cloud();
  }, []);

  return (
    <div className="project-main">
      <h1>PROJECTS</h1>
      <div className="project">
        <section>
          <div className="project-head">
            <h2>ECommerce</h2>
            <p>
              clone model of flipcart by adding extra features.User can buy
              items using this site
            </p>
          </div>

          <img src="/shoping.jpg" alt="" />
          <div className="logo">
            <span id="mongo">M</span>
            <span id="expres">E</span>
            <span id="react">R</span>
            <span id="node">N</span>
          </div>
        </section>
        <section>
          <div className="project-head">
            <h2>Matrimony</h2>
            <p>
              A Matrimony website developed using MERN, Manage user, Profile,
              Search, Match and chat feature.
            </p>
          </div>
          <img className="s2-img-2" src="/matrimony.jpg" alt="" />{" "}
          <div className="logo">
            <span id="mongo">M</span>
            <span id="expres">E</span>
            <span id="react">R</span>
            <span id="node">N</span>
          </div>
          {/* <img src="/MERNLOGO.png" alt="" /> */}
        </section>
        <section>
          <div className="project-head">
            <h2>School Management</h2>
            <p>
              A School Management System developed using MERN, Manage
              Librarian,Staff,Students.
            </p>
          </div>
          <img src="/school.jpg" alt="" />{" "}
          <div className="logo">
            <span id="mongo">M</span>
            <span id="expres">E</span>
            <span id="react">R</span>
            <span id="node">N</span>
          </div>
          {/* <img src="/MERNLOGO.png" alt="" /> */}
        </section>
        <section>
          <div className="project-head">
            <h2>SalesBilling</h2>
            <p>
              Billing system use Real-Time connection for the accuracy,
              Automatic total value calulation of items
            </p>
          </div>
          <img src="/biling.jpg" alt="" />{" "}
          <div className="logo">
            <span id="mongo">M</span>
            <span id="expres">E</span>
            <span id="react">R</span>
            <span id="node">N</span>
          </div>
          {/* <img src="/MERNLOGO.png" alt="" /> */}
        </section>
      </div>
    </div>
  );
};

export default Project;
