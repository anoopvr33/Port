import { useCallback, useEffect, useState } from "react";
// import Education from "../Education/index.jsx";
import Education from "../../components/Education";
import About from "../../components/About";
import Message from "../../components/Message";
import Project from "../../components/Project";
import Profile from "../../components/Profile";
// import "../Education/style.css";
import "./style.css";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  const [social, setSocial] = useState(false);
  const [loop, setLoop] = useState(false);

  const GetList = useCallback(() => {
    setSocial((prev) => !prev);
    console.log("haaa");
  }, []);

  useEffect(() => {
    ///////////////////////////////////////////////////////// set interval for list icon////////
    const Interval = setInterval(() => {
      setLoop((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(Interval);
    };
  }, []);

  //////////////////////////////////////////////////////////// pop social icons selection/////////

  const Url = (Port) => {
    if (Port === "Inst") {
      return (window.location.href =
        "https://www.instagram.com/anoopvr.?igsh=MTlzMnhrYzM3NzV2aQ==");
    }
    if (Port === "Git") {
      return (window.location.href = "https://github.com/anoopvr33");
    }
    if (Port === "Link") {
      return (window.location.href =
        "https://www.linkedin.com/in/anoop-v-r-9b6b67275");
    }
    if (Port === "What") {
      return (window.location.href = "https://wa.me/qr/TQXJA5YVLEHVP1");
    }
  };

  //  ----------------------------------------------------------------------- return function ///////////

  return (
    <div className="home">
      <div className="section-container">
        {/*--------------------------------------------------------- profile  //////// */}
        <section id="sec1" className="section-1">
          <Profile></Profile>
        </section>

        {/* --------------------------------------------------------- about  //////// */}
        <section id="sec4" className="section-4">
          <About></About>
        </section>
        {/* --------------------------------------------------------- project  //////// */}

        <section id="sec2" className="section-2">
          <Project></Project>
        </section>

        {/* --------------------------------------------------------- education  //////// */}

        <section id="sec3" className="section-3">
          <Education></Education>{" "}
        </section>

        {/* --------------------------------------------------------- message  //////// */}

        <section id="sec5" className="section-5">
          <Message></Message>
        </section>
      </div>
      {/* ---------------------------------------------------------Social list bar  */}
      <div className="menu-bar">
        <span className={`${social ? "list-1" : loop ? "list-1" : "list-2"}`}>
          <i onClick={GetList} className="fa-solid fa-list "></i>{" "}
        </span>

        <div className={`${social ? "menu-bar-social" : "box"}`}>
          <i onClick={() => Url("Inst")} className="fa-brands fa-instagram"></i>
          <i onClick={() => Url("Git")} className="fa-brands fa-github"></i>
          <i onClick={() => Url("Link")} className="fa-brands fa-linkedin"></i>
          <i onClick={() => Url("What")} className="fa-brands fa-whatsapp"></i>
        </div>
      </div>

      {/* --------------------------------------------------------- section selection icon  */}
    </div>
  );
};

export default Home;
