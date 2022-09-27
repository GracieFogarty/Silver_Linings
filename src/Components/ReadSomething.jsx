import React, { useState } from 'react';
import axios from 'axios';

function ReadSomething() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  axios.get('https://api.goprogram.ai/inspiration')
  .then((response) => {
    setQuote(response.data.quote);
    setAuthor(response.data.author);
  })

  return (
    <div className="read-something">
      <h3>Find inspiration!</h3>
      <div>{quote}</div>
      <br></br>
      <div>- {author}</div>
    </div>
  );
}

export default ReadSomething;