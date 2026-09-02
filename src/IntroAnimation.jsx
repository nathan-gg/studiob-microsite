import { useState, useRef } from "react";
import logoAnimation from "./assets/logo-animation-v5.webm";

function IntroAnimation() {
  const [slideOut, setSlideOut] = useState(false);
  const [done, setDone] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setSlideOut(true);
    setTimeout(() => setDone(true), 700); // matches transition duration below
  };

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-cherry-500 transition-transform duration-300 ease-in-out  ${
        slideOut ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <video
        ref={videoRef}
        className="w-24"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={logoAnimation} type="video/mp4" />
      </video>
    </div>
  );
}

export default IntroAnimation;
