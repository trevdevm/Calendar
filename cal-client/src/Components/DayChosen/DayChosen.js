import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Link, navigate } from "@reach/router";

import "./DayChosen.css";

const DayChosen = (props) => {
  const [day] = useState(props.selectedDate);
  const [times] = useState(props.times);
  const [verify, setVerify] = useState(false);
  const [sTime, setsTime] = useState("");
  const [temp, setTemp] = useState("Demo: Working with database..");
  const [countDown, setCount] = useState('');
  const headFormat = "MMMM d yyyy";
  const weekDay = "EEEE";

  const update = (time) => {
    setsTime(time);
    setVerify(true);
    veriMessage();
  };

  const veriMessage = () => {
    return (
      <div className="vMessage">
        <h2>Are you sure you would like an appointment for {format(day, headFormat)} @ {sTime}?</h2>
        <select><option onClick={(e) => yes()}>Yes</option><option onClick={(e) => no()}>No</option></select>
      </div>
    )
  }

  const no = () => {
    setVerify(false);
    setsTime("");
  }

  const yes = () => {
    props.update(sTime);
    setTemp("Demo: DATABASE UPDATED!");
    setVerify(false);
    setCount("Leaving in 5 seconds.");
    timedThx();
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
  }

  async function timedThx() {
    await delay(5000);
    navigate("/thx");
  }

  useEffect(() => {
    console.log(`${day}, ${times}`);
  }, [])

  return (
    <div className="dayChosen">
      <nav>
        <Link to="/"
          style={{
            textDecoration: "none",
            color: "seagreen",
            fontSize: "1.2rem",
          }}>Calendar</Link>
      </nav>
      <div className="dayHead">
        <h1>{format(day, headFormat)}</h1>
        <h1>{format(day, weekDay)}</h1>
      </div>
      <div className="times">
        <h2 className="tAv">Times Available:</h2>
        <div className="des">
          <em>Please select a time that you would be available for a zoom or phone conference</em>
        </div>
        <ul>
          {times.map((time, index) => (
            <li key={index.toString()} style={{ listStyle: "none" }}>
              <button
                style={{
                  color: "seagreen",
                  fontSize: "1.7em",
                  border: "0",
                }}
                onClick={(e) => update(time)}
              >
                {time}
              </button>
            </li>
          ))}
        </ul>
        <div className="veri">{verify ? (veriMessage()) : (<div className="unVeri">
          <h1>I Look Forward To Meeting You!</h1>
        </div>)}</div>
      </div>
      <div className="temp">{temp}</div>
      <div className="count">{countDown}</div>
    </div>
  );
};

export default DayChosen;
