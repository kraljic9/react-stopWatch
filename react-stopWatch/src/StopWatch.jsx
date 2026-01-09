import { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const StartTimeRef = useRef(0);
  let lapTimeArr = useState([]);

  useEffect(() => {
    return () => {};
  }, []);

  function start() {
    if (intervalIdRef.current) return;

    StartTimeRef.current = Date.now() - elapsedTime;

    intervalIdRef.current = setInterval(() => {
      setElapsedTime(Date.now() - StartTimeRef.current);
    }, 50);
  }

  function stop() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }

  function reset() {}

  function displayTime() {
    let minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${miliseconds}`;
  }

  return (
    <>
      <div className="stop-watch-container">
        <div className="time">{displayTime()}</div>
        <div className="controls">
          <button className="start-button" onClick={start}>
            Start
          </button>
          <button className="stop-button" onClick={stop}>
            Stop
          </button>
          <button className="reset-button" onClick={reset}>
            Reset
          </button>
          <button className="reset-button">Lap</button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
