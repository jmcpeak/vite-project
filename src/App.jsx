import { ThemeProvider } from '@mui/material/styles';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import './App.css';
import logo from './logo.svg';
import useToggleTheme from './useToggleTheme';
import { BottomNavigation, LeftNavigation } from './Navigation';

Amplify.configure(config);

function App() {
  const [theme, mode, handleToggleTheme] = useToggleTheme();

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation mode={mode} onToggleTheme={handleToggleTheme} />
      <LeftNavigation mode={mode} onToggleTheme={handleToggleTheme} />
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
    </ThemeProvider>
  );
}

export default App;
