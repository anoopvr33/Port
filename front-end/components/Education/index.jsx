import { useEffect, useRef, useState } from "react";
import "./style.css";

const Education = () => {
  const [isVisible, setVisible] = useState(false);

  const sectionRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true); // Set to true when the element is in the viewport
  //       } else {
  //         setIsVisible(false); // Optionally reset visibility when out of view
  //       }
  //     },
  //     { threshold: 0.5 } // Trigger when 50% of the section is in view
  //   );},)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the target section
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up the observer when the component unmounts
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`${isVisible ? "visible" : "education"} `}>
      <h1>EDUCATION</h1>
      <div className="exp">
        <h2>Druv360</h2>
        <span>
          <p>Mern stack developer as Trainee</p>
          <p style={{ color: "rgb(195, 195, 195)", padding: "3px 0px" }}>
            July 2024 - Nov 2024
          </p>
        </span>
        <div className="shadow"></div>
      </div>
      <div className="exp">
        <h2> TechMindz</h2>
        <span>
          <p> six month MERN stack course</p>
          <p style={{ color: "rgb(195, 195, 195)", padding: "3px 0px" }}>
            Oct 2023 - Feb 2024
          </p>
        </span>{" "}
        <div className="shadow"></div>
      </div>
      <div className="exp">
        <h2>SreeRama Gov. College Triprayar</h2>
        <span>
          <p> Diploma in Computer Engineering</p>
          <p style={{ color: "rgb(195, 195, 195)", padding: "3px 0px" }}>
            2020-2023
          </p>
        </span>{" "}
        <div className="shadow"></div>
      </div>
      <div className="exp">
        <h2>Valapad HSS</h2>
        <span>
          <p>Computer Science</p>
          <p style={{ color: "rgb(195, 195, 195)", padding: "3px 0px" }}>
            2018-2020
          </p>
        </span>{" "}
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Education;
