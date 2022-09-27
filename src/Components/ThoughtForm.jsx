import React, { useState } from 'react';
// import axios from 'axios';

function ThoughtForm() {
  const [form, setForm] = useState('thoughts')
  const [text, setText] = useState('')

  function handleThoughts (e) {
    e.preventDefault();
    setForm('gratitude');
    setText('');
  }

  switch(form) {
    default: return (
      <div className="thought-form">
        <h3>Release your negative thoughts to the clouds:</h3>
        <form>
          <textarea rows="10" cols="30" className="textarea"/>
          <br></br>
          <button type="submit" onClick={(e) => handleThoughts(e)}>Submit</button>
        </form>
      </div>
    );
    case "gratitude": return (
      <div className="gratitude-form">
        <h3>What is something you are grateful for?</h3>
        <form>
          <textarea rows="10" cols="30" className="textarea" onChange={(e) => setText(e.target.value)} value={text}/>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ThoughtForm;