import React, { useState } from 'react';
import axios from 'axios';

function LookAtSomething() {
  const [photo, setPhoto] = useState('https://wallpaperaccess.com/full/82712.jpg');

  function getCat(e) {
    e.preventDefault();
    axios.get('https://randomfox.ca/floof/')
    .then((response) => {
      setPhoto(response.data.image);
    })
    .catch()
  }

  return (
    <div className="activity">
      <h3>Look at something cute!</h3>
      <button type="submit" onClick={(e) => getCat(e)}>Show me something cute!</button>
      <br></br>
      <br></br>
      <img src={photo} alt="cute fox pic"></img>
    </div>
  );
}

export default LookAtSomething;