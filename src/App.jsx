import './App.css';
import React from 'react';
// import axios from 'axios';
import DoSomething from './Components/DoSomething.jsx';
import LookAtSomething from './Components/LookAtSomething.jsx';
import ThoughtForm from './Components/ThoughtForm.jsx';
import ReadSomething from './Components/ReadSomething.jsx';
import ListenToSomthing from './Components/ListenToSomething';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Feeling Meh?</h1>
      </div>
      <div className="main">
        <div className="left-column">
          <DoSomething />
          <br></br>
          <LookAtSomething />
        </div>
        <div className="forms">
          <ThoughtForm />
        </div>
        <div className="right-column">
          <ReadSomething />
          <br></br>
          <ListenToSomthing />
        </div>

    </div>
    </div>
  );
}

export default App;
