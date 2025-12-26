import { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalId = useRef(null);
  const startTime = useRef(0);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime.current);
    }, 10);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTime.current = Date.now() - elapsedTime;
    console.log(startTime.current);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }
  function displayTime() {}

  return (
    <>
      <div className="stop-watch-container">
        <p className="time">00:00:00</p>
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
        </div>
      </div>
    </>
  );
}

export default StopWatch;
