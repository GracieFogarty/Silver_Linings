import React, { useState } from 'react';
import axios from 'axios';

function DoSomething() {
  const [activity, setActivity] = useState('');
  const [accessibility, setAccessibility] = useState('');
  const [selectedAccessibility, setSelectedAccessibility] = useState(undefined);
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
    if(selectedAccessibility !== undefined) {
      setSelectedAccessibility(undefined);
    } else {
      setSelectedAccessibility(0.0);
    }
  }

  function updateActivity (e) {
    e.preventDefault();
    console.log(type);
    console.log(selectedAccessibility);
    if(selectedAccessibility === 0) {
      axios.get(`http://www.boredapi.com/api/activity?type=${type}&accessibility=0.0`)
      .then((response) => {
        console.log(response);
        if(response.data.error) {
          setActivity(response.data.error)
        } else {
          setActivity(response.data.activity);
          setAccessibility(response.data.accessibility);
          setParticipants(response.data.participants);
          setPrice(response.data.price);
        }
      })
      .catch();
    } else {
      axios.get(`http://www.boredapi.com/api/activity?type=${type}`)
      .then((response) => {
        setActivity(response.data.activity);
        setAccessibility(response.data.accessibility);
        setParticipants(response.data.participants);
        setPrice(response.data.price);
      })
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
          <br></br>
          <br></br>
          <button type="submit" onClick={(e) => updateActivity(e)}>Find me a new activity!</button>
        </form>
      </div>
      <br></br>
      <div>
        <h4>Suggested Activity</h4>
        <h5>{activity}</h5>
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