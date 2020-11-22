import logo from './logo.svg';
import './App.css';
import Jumbotron from './Jumbotron';
import Profile from './profile';
import { Container } from 'react-bootstrap';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. test lagiiii
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
      <body>

      <Container id="mycontainer">
        <Jumbotron name={"PAULIN CHARISMA"} age={22}></Jumbotron>
        <Profile />
      </Container>
        
      </body>
    </div>
  );
}

export default App;
