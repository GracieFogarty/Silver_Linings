import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Feeling Meh?</h1>
      </div>
      <div className="left-column">
        <doSomeething />
        <lookAtSomething />
      </div>
      <div className="forms">
        <thoughtForm />
        <gratitudeForm />
      </div>
      <div className="right-column">
        <readSomething />
        <listenToSomthing />
      </div>
    </div>
  );
}

export default App;
