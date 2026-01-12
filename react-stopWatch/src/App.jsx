import "./App.css";
import StopWatch from "./stopWatch";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <StopWatch />
      </ThemeProvider>
    </>
  );
}

export default App;
