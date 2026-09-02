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

  function getVancouverParts() {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Vancouver",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });

    const parts = formatter.formatToParts(time);
    const partMap = {};
    parts.forEach(({ type, value }) => {
      partMap[type] = value;
    });

    return {
      hours: parseInt(partMap.hour, 10),
      minutes: parseInt(partMap.minute, 10),
      seconds: parseInt(partMap.second, 10),
    };
  }

  function formatDigits() {
    const { hours: rawHours, minutes } = getVancouverParts();
    const hours = rawHours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}`;
  }

  function formatMeridiem() {
    const { hours } = getVancouverParts();
    return hours >= 12 ? "PM" : "AM";
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock flex justify-between min-w-fit sm:w-28 lg:w-40 ">
      <span className="tabular-nums ">
        {formatDigits()} {formatMeridiem()} {getTimezoneAbbr()}
      </span>
    </div>
  );
}

function getTimezoneAbbr() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Vancouver",
    timeZoneName: "short",
  });
  const parts = formatter.formatToParts(new Date());
  return parts.find((p) => p.type === "timeZoneName")?.value ?? "";
}

export default DigitalClock;
