import { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const StartTimeRef = useRef(0);
  let [lapTimeArr, setLapTimeArr] = useState([]);

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

  function reset() {
    setElapsedTime(0);
    StartTimeRef.current = 0;
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setLapTimeArr([]);
  }

  function displayTime(ms) {
    let minutes = Math.floor((ms / 1000 / 60) % 60);
    let seconds = Math.floor((ms / 1000) % 60);
    let miliseconds = Math.floor((ms % 1000) / 10);

    const format = (n) => String(n).padStart(2, "0");

    return `${format(minutes)}:${format(seconds)}:${format(miliseconds)}`;
  }

  return (
    <>
      <div className="stop-watch-container">
        <div className="time">{displayTime(elapsedTime)}</div>
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
