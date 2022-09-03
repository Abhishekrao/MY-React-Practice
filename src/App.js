import logo from './logo.svg';
import './App.css';
import  Welcome from './Welcome';
import Greeter from './Greeter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Welcome to React Js .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Greeter  name ="reactjs" age ={31} showNav={false} />
        <Greeter  name ="javaScripts"/> */}
        <Welcome/>
        <Welcome/>
        <Welcome/>
        <Welcome/>
        <Welcome/>
      </header>
    
    </div>
  );
}

export default App;
