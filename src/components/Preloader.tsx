import { useEffect, useState } from "react"
import "../css/Preloader.css"
import Logo from "../assets/logo.png"

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500); // Duration before fade starts

    const removeTimer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) preloader.style.display = "none";
    }, 2300); // Remove after fade animation

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div id="preloader" className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <img src={ Logo } alt="weizzx logo" className="preloader-logo" />
    </div>
  );
};

export default Preloader;
