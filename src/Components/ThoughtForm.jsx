import React, { useState } from 'react';
import axios from 'axios';

function ThoughtForm() {
  const [form, setForm] = useState('thoughts');
  const [text, setText] = useState('');
  const [oldThought, setOldThought] = useState('');
  const [oldDate, setOldDate] = useState('');

  function handleThoughts (e) {
    e.preventDefault();
    setForm('gratitude');
    setText('');
  }

  function getPreviousThought (e) {
    e.preventDefault();
    axios.get('/gratitude')
    .then((res) => {
      setOldThought(res.data.entry);
      setOldDate(res.data.date);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function submitGratitude (e) {
    e.preventDefault();
    axios.post('/gratitude', {
      entry: text,
      date: new Date(),
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
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
          <label> See what you were grateful for last time &#10132;
            <button type="submit" onClick={(e) => getPreviousThought(e)}>Show me!</button>
            <span>{oldThought}</span>
            <span>{oldDate}</span>
          </label>
        </form>
        <form>
          <textarea rows="10" cols="30" className="textarea" onChange={(e) => setText(e.target.value)} value={text}/>
          <br></br>
          <button type="submit" onClick={(e) => submitGratitude(e)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default ThoughtForm;