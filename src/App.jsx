import './App.css';
import React from 'react';
// import axios from 'axios';
import DoSomething from './Components/DoSomething.jsx';
import LookAtSomething from './Components/LookAtSomething.jsx';
import ThoughtForm from './Components/ThoughtForm.jsx';
import GratitudeForm from './Components/GratitudeForm.jsx';
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
          <LookAtSomething />
        </div>
        <div className="forms">
          <ThoughtForm />
          <GratitudeForm />
        </div>
        <div className="right-column">
          <ReadSomething />
          <ListenToSomthing />
        </div>

    </div>
    </div>
  );
}

export default App;
