import { useEffect, useState } from "react";
import "./style.css";

const DarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    // setIsDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  const EnableDark = () => {
    setDark(!dark);
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="dark">
      <button onClick={EnableDark}>{dark ? "Dark Mode" : "Light Mode"}</button>
    </div>
  );
};

export default DarkMode;
