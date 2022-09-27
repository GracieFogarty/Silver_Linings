import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function DoSomething() {
  const [activity, setActivity] = useState('');
  const [accessibility, setAccessibility] = useState('');
  const [selectedAccessibility, setSelectedAccessibility] = useState('');
  const [type, setType] = useState('');
  const [participants, setParticipants] = useState('');
  const [price, setPrice] = useState('');

  function selectType (value) {
    if (value === "--Please choose an option--") {
      setType("");
    } else {
      setType(value);
    }
  };

  function selectAccessibility (value) {
    console.log(value);
    if(selectedAccessibility) {
      setSelectedAccessibility('');
    } else {
      setSelectedAccessibility(0.0);
    }
  }

  return (
    <div className="do-something">
      <h3>Find something fun to do!</h3>
      <div className="find-activity-form">
        <form>
          <label> Select an activity type:
            <select id="activity-category" onChange={(e) => selectType(e.target.value)}>
              <option>--Please choose an option--</option>
              <option>education</option>
              <option>recreational</option>
              <option>social</option>
              <option>diy</option>
              <option>charity</option>
              <option>cooking</option>
              <option>relaxation</option>
              <option>music</option>
              <option>busywork</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <label>Is accessibility a concern?
            <br></br>
            <label> yes
              <input type="checkbox" value="yes" onChange={(e) => selectAccessibility(e.target.value)}/>
            </label>
            <label> no
              <input type="checkbox" value="no" />
            </label>
          </label>
        </form>
      </div>
      <br></br>
      <div>
        <h4>Suggested Activity</h4>
        <span>activity: {activity}</span>
        <br></br>
        <br></br>
        <span>accessibility score (0 - 1): {accessibility}</span>
        <br></br>
        <span>number of participants: {participants}</span>
        <br></br>
        <span>price score (0-1): {price}</span>
      </div>
    </div>
  );
}

export default DoSomething;