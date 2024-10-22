import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100); // Increment time by 100ms
      }, 100);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    return String(seconds);
  };

  return (
    <div className="stopwatch">
      <h1>Timer</h1>
      <h1 className="time-display">{formatTime(time)}s</h1>
      <div className="buttons">
        <button
          className="start-stop-button"
          type="button"
          onClick={handleStartStop}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <button className="reset-button" type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
