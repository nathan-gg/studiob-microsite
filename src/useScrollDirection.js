// hook to track scroll direction and distance to know if the header should be displayed
import { useState, useEffect, useRef } from "react";

function useScrollDirection() {
  const [hidden, setHidden] = useState(false); // track if header should be hidden
  const [scrollY, setScrollY] = useState(0); // track scrolling position
  const lastScrollY = useRef(0); // track last scrolling position to compare to current and see if user is scrolling up or down

  useEffect(() => {
    const threshold = 10; // threshold to prevent header from showing/hiding on small movements

    // function to fire constantly every time the user is scrolling
    const handleScroll = () => {
      // get and set current scroll position
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // check if user has scrolled upward larger than the threshold amount
      if (Math.abs(currentScrollY - lastScrollY.current) < threshold) {
        return;
      }

      // if the user has scrolled downward and is below 80 pixels, hide the header
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // update lastscrollY to new position
      lastScrollY.current = currentScrollY;
    };

    // event listener is used to constantly run handleScroll() while scrolling
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { hidden, scrollY };
}

export default useScrollDirection;
