import logo from './logo.svg';
import './App.css';
import {useContext, useState, useEffect} from 'react'
import MyLi from "./my-li";
import Calculator from "./calculator";
import Button from "./button";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h2>Home Page component</h2>;
}

function About() {
  return <h2>About page component</h2>;
}

function Users() {
  return <h2>Users page component</h2>;
}



function App() {

  // state and hooks & props + forms + child components

  let firstName = 'John';
  let lastName = 'Doe';

  // state - the state of a component
  const [name, setName] = useState('John');

  const [list, setList] = useState(['John', 'Jane']);



  setTimeout(() => {
    firstName = 'Jane'
  }, 5000)

  const onParagraphClick = async () => {
    console.log('yay')

  };

  const onNameChange = async (ev) => {
    console.log(' this works!');
    console.log(ev.currentTarget.value)
    setName(ev.currentTarget.value)
  };

  const submitForm = async () => {
    console.log('form has been submitted and the value of the input element is', name)
    setList([...list, name]) // updating or adding to an array in the state variable array


  };

  return (
      <Router>
        <div className="App">
          {/*JSX*/}

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />


            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>



            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>



            <Button buttonText={'Submit'} />

            <Calculator numberOne={200} numberTwo={100} />




            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            <input type="text" onChange={onNameChange} value={name} placeholder={'Type your First Name'}/>
            <button onClick={submitForm}>Submit</button>

            <hr/>

            <ul>
              {list.map((listItem, idx) => {
                // return <li key={idx} style={{fontSize: '20px', fontWeight: 'bold', color: 'red'}}>{listItem}</li>
                return <MyLi key={idx} txt={listItem} />
              })}
            </ul>

            {/*ternary operator*/}
            {name=='John' && <p>Show this only when name is John</p>}

            <p style={{background: (name=='John' ? 'red' : 'green'), fontSize: (name=='John' ? '50px' : '20px')}}>
              the current value of the state variable name is: {name}
            </p>

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
      </Router>
  );
}

// class based components | functional components

export default App;
