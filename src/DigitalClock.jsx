// component to add a digital clock in the header that always displays the time and time zone in VAncouver, BC, Canada

// import useState and useEffect from react
import React, { useState, useEffect } from "react";

function DigitalClock() {
  // create variable for time (set to current moment using Date) and function setTime to update it
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // start a 1 second timer that updates setTime to current time, used for displaying seconds if needed
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // this cleanup function allows the current intervalID to be used, then cleared after that second is up
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // function to get data for specifically Vancouver using Intl.DateTimeFormat() which accesses the data through the browser
  function getVancouverParts() {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Vancouver",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      // hour12: false, // returns 24-hour format, converted to 12-hour manually in formatDigits(), but not needed since its not displayed
    });

    // use the formatter to turn the data into an array of structured objects, rather than a string
    const parts = formatter.formatToParts(time);

    // turns the objects into easily accesible variables to return
    const partMap = {};
    parts.forEach(({ type, value }) => {
      partMap[type] = value;
    });

    // return current hour/minutes/seconds
    return {
      hours: parseInt(partMap.hour, 10),
      minutes: parseInt(partMap.minute, 10),
      seconds: parseInt(partMap.second, 10),
    };
  }

  // function to format the digits using the padZero() function and display in "XX:XX" format
  function formatDigits() {
    const { hours: rawHours, minutes } = getVancouverParts();
    const hours = rawHours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}`;
  }

  // function to get the meridiem based on if hours is greater or lesser than 12
  // function formatMeridiem() {
  //   const { hours } = getVancouverParts();
  //   return hours >= 12 ? "PM" : "AM";
  // }

  // function to add zero to any single digits
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  // return the html to display the formatted clock digits in App.jsx
  return (
    <div className="clock flex justify-between min-w-fit sm:w-20 lg:w-30">
      <span className="tabular-nums ">
        {formatDigits()} {getTimezoneAbbr()}
      </span>
    </div>
  );
}

// function to get timezone from Intl.DateTimeFormat() because Vancouver changes between PDT and PST throughout the year
function getTimezoneAbbr() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Vancouver",
    timeZoneName: "short",
  });
  const parts = formatter.formatToParts(new Date());
  return parts.find((p) => p.type === "timeZoneName")?.value ?? "";
}

export default DigitalClock;
