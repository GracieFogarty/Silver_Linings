import './App.css';
import React, { useState } from 'react';
// import axios from 'axios';
import DoSomething from './Components/DoSomething.jsx';
import LookAtSomething from './Components/LookAtSomething.jsx';
import ThoughtForm from './Components/ThoughtForm.jsx';
import ReadSomething from './Components/ReadSomething.jsx';
import ListenToSomthing from './Components/ListenToSomething';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('');


  switch(selectedComponent) {
    default: return (
      <div className="App">
      <div>
        <h1>Silver Linings</h1>
      </div>
      <div className="main">
        <div className="left-column">
          <h2 className="selectActivity doSomething" onClick={() => setSelectedComponent("DoSomething")}>Find something to do!</h2>
          <br></br>
          <h2 className="selectActivity" onClick={() => setSelectedComponent("LookAtSomething")}>Look at something cute!</h2>
        </div>
        <div className="forms">
          <ThoughtForm />
        </div>
        <div className="right-column">
          <h2 className="selectActivity" onClick={() => setSelectedComponent("ReadSomething")}>Read something inspirational!</h2>
          <br></br>
          <h2 className="selectActivity listenToSomething" onClick={() => setSelectedComponent("ListenToSomething")}>Find peace and calm!</h2>
        </div>
    </div>
    </div>
    );
    case "DoSomething": return (
     <div>
      <button onClick={() => setSelectedComponent('')}>Back</button>
      <DoSomething />
     </div>
    );
    case "LookAtSomething": return (
      <div>
        <button onClick={() => setSelectedComponent('')}>Back</button>
        <LookAtSomething />
      </div>
    );
    case "ReadSomething": return (
      <div>
        <button onClick={() => setSelectedComponent('')}>Back</button>
        <ReadSomething />
      </div>
    );
    case "ListenToSomething": return (
      <div>
        <button onClick={() => setSelectedComponent('')}>Back</button>
        <ListenToSomthing />
      </div>
    );
  }
  // return (
  //   <div className="App">
  //     <div>
  //       <h1>Silver Linings</h1>
  //     </div>
  //     <div className="main">
  //       <div className="left-column">
  //         <DoSomething />
  //         <br></br>
  //         <LookAtSomething />
  //       </div>
  //       <div className="forms">
  //         <ThoughtForm />
  //       </div>
  //       <div className="right-column">
  //         <ReadSomething />
  //         <br></br>
  //         <ListenToSomthing />
  //       </div>

  //   </div>
  //   </div>
  // );
}

export default App;
