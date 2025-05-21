import "./style.css";
import DarkMode from "../DarkMode/index.jsx";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div className="home-2">
        <div className="home-3">
          <div className="home-5">
            {/* <i className="fa-solid fa-house"></i> */}
            <a href="#sec4">
              <i className="fa-solid fa-align-center"></i> <h5>About</h5>
            </a>
            <a href="#sec2">
              <i className="fa-solid fa-gears"></i>
              <h5>Projects</h5>
            </a>

            <a href="#sec3">
              <i className="fa-solid fa-user-graduate"></i>
              <h5>Education</h5>
            </a>

            <a href="#sec5">
              <i className="fa-solid fa-comment"></i> <h5>Message</h5>
            </a>
          </div>

          <img src="/Anoop.jpg" alt="" />
        </div>
        <div className="home-4">
          <h2>Hi, I'm ANOOP VR</h2>
          <h1>
            <span>MERN</span> Developer
          </h1>
          <p>
            MERN developer with experience in building dynamic, scalable web
            applications
          </p>
          <label htmlFor="">
            <p className="p5">Skills</p>
            <div className="p4">
              React.js, Next.js, MonogDB, Express.js, Node.js, Redux, TailWind,
              Bootstrap, CSS <span> </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Profile;
