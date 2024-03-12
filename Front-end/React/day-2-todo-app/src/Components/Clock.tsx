import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM
      hours = hours % 12 || 12; // Convert to 12-hour format
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const centerDivStyle = {
    justifyContent: "center",
    display: "flex",
  };

  return (
    <div style={centerDivStyle}>
      <div>{time}</div>
    </div>
  );
};

export default Clock;
