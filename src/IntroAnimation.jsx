// component to add a logo animation when the site is refreshed

// imports
import { useState, useRef } from "react";
import logoAnimation from "./assets/logo-animation-v5.webm";

function IntroAnimation() {
  const [slideOut, setSlideOut] = useState(false); // checks if the overlay should be off screen
  const [done, setDone] = useState(false); // checks if logo animation is done

  // check if the video has ended so it can trigger the slideOut animation
  const handleVideoEnd = () => {
    setSlideOut(true);
    setTimeout(() => setDone(true), 300); // matches transition duration below so that it stops rendering once the transition is completely finished
  };

  if (done) return null; // stop rendering when done

  return (
    // return the html and tailwindcss for the overlay
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-cherry-500 transition-transform duration-300 ease-in-out ${
        slideOut ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <video
        className="w-24"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd} // starts the slideOut animation once the video is done by triggering handleVideoEnd
      >
        <source src={logoAnimation} type="video/webm" />
      </video>
    </div>
  );
}

export default IntroAnimation;
