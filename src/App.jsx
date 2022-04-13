import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Parallax pages={2}>
      <ParallaxLayer speed={1.0}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.5}>
        <h2>Hi there</h2>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
