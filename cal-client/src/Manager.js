import React from "react";

const Manager = () => {
  return (
    <div>
      <h1>Enter Date (yyyy-mm-dd):</h1>
      <input placeholder="date goes here"></input>
      <br/>
      <h1>Enter Time (ex. 01:00)</h1>
      <input placeholder="time goes here"></input>
    </div>
  );
};

export default Manager;
