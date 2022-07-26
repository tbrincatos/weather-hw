import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
        <br />
        <footer>
          <a
            href="https://github.com/tbrincatos/weather-hw"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>{" "}
          coded by Tamsin Brincat👩🏻‍🦰
        </footer>
      </header>
    </div>
  );
}

export default App;
