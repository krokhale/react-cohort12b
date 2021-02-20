import logo from './logo.svg';
import './App.css';

function App() {

  // state and hooks & props + forms + child components

  let firstName = 'John';
  let lastName = 'Doe';


  setTimeout(() => {
    firstName = 'Jane'
  }, 5000)

  const onParagraphClick = async () => {
    console.log('yay')

  };

  return (
    <div className="App">
      {/*JSX*/}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          {firstName} {lastName}
        </p>

        <p style={{fontSize: '70px'}} onClick={onParagraphClick}>
          Edit this code <code>src/App.js</code> and save to reload.
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
  );
}

// class based components | functional components

export default App;
