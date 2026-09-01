// import react, { useState, useEffect } from "react";

// function DigitalClock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   function formatTime() {
//     let hours = time.getHours();
//     const minutes = time.getMinutes();
//     const seconds = time.getSeconds();
//     const meridiem = hours >= 12 ? "PM" : "AM";

//     hours = hours % 12 || 12;

//     // return `${hours}:${minutes} ${meridiem}`
//     return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
//   }

//   function padZero(number) {
//     return (number < 10 ? "0" : "") + number;
//   }

//   return (
//     <div className="clock">
//       <span>{formatTime()}</span>
//     </div>
//   );
// }
// export default DigitalClock;

import react, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatDigits() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}`;
    // return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function formatMeridiem() {
    return time.getHours() >= 12 ? "PM" : "AM";
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    // for time with seconds
    // <div className="clock flex justify-between min-w-fit  w-33 ">

    // for time without seconds
    <div className="clock flex justify-between min-w-fit w-25 ">
      <span className="tabular-nums ">{formatDigits()}</span>
      <span>{formatMeridiem()}</span>
    </div>
  );
}
export default DigitalClock;
