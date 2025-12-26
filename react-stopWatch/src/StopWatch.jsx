function StopWatch() {
  return (
    <>
      <div className="stop-watch-container">
        <p className="time">00:00:00</p>
        <div className="controls">
          <button className="start-button">Start</button>
          <button className="stop-button">Stop</button>
          <button className="reset-button">Reset</button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
