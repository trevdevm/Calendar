import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Link, navigate } from "@reach/router";
import { isMobile } from "react-device-detect";

import "./DayChosen.css";

const DayChosen = (props) => {
  const [day] = useState(props.selectedDate);
  const [times] = useState(props.times);
  const [verify, setVerify] = useState(false);
  const [cancSho, setCancSho] = useState(false);
  const [sTime, setsTime] = useState("");
  const [counter, setCount] = useState(8);
  const [yeep, setYeep] = useState(false);
  const [loaded, setLoaded] = useState([]);
  const headFormat = "MMMM d, yyyy";
  const weekDay = "EEEE";

  useEffect(() => {
    setLoaded(require("../../../public/winksC.png"))
  }, [])

  const update = (time) => {
    setsTime(time);
    setVerify(true);
    veriMessage();
  };

  const veriMessage = () => {
    let timeOf = "";
    if (sTime == "9:00" || sTime == "10:00" || sTime == "11:00")
      timeOf = "A.M.";
    else
      timeOf = "P.M.";

    const vRen = () => {
      if (isMobile) {
        return (
          <div className="vMessage">
            <h2>Are you sure you would like an appointment for {format(day, headFormat)} @ {sTime} {timeOf}?</h2>
            <button id="yesButton" onClick={(e) => yes()}>Yes</button>
            <button id="noButton" onClick={(e) => no()}>No</button>
          </div>
        )
      }
      return (
        <div className="vMessage">
          <h2>Are you sure you would like an appointment for {format(day, headFormat)} @ {sTime} {timeOf}?</h2>
          <select><option onClick={(e) => yes()}>Yes</option><option onClick={(e) => no()}>No</option></select>
        </div>
      )
    }
    return vRen();
  }

  const no = () => {
    setVerify(false);
    setsTime("");
    cancel();
  }

  const cancel = async () => {
    setCancSho(true);
    await delay(2000);
    setCancSho(false);
  }

  const yes = () => {
    props.update(sTime);
    setVerify(false);
    timedThx();
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
  }

  async function timedThx() {
    setYeep(true);
    await delay(8000);
    navigate("/thx");
  }


  useEffect(() => {
    if (yeep) {
      const timer =
        counter > 0 && setInterval(() => setCount(counter - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [yeep, counter]);

  const countEl = () => {
    if (yeep) {
      return (
        <div className="count"><h2>Demo: DATABASE UPDATED! Your choice of {sTime} saved.</h2><img src={loaded} alt="Wink Emoji" /><p>Leaving in {counter} seconds...</p></div>
      )
    }

    return (
      <div className="count"><h2>Demo: Working with database..</h2></div>
    )
  }

  const onNope = () => {
    if (cancSho) {
      return (
        <div className="canCel"><h2 className="fadeInBottom">Choice cancelled.</h2></div>
      )
    }
    else {
      return (
        <div className="unVeri">
          <h1>I Look Forward To Meeting You!</h1>
        </div>
      )
    }
  }

  return (
    <div className="dayChosen">
      <nav>
        <Link to="/cal"
          className="dcLink">Calendar</Link>
      </nav>
      <div className="dayHead">
        <h1>{format(day, headFormat)}</h1>
        <h1>{format(day, weekDay)}</h1>
      </div>
      <div className="temp"></div>
      <div className="times">
        <h2 className="tAv">Times Available:</h2>
        <div className="des">
          <em>Please select a time that you would be available for a zoom or phone conference</em>
        </div>
        <ul>
          {times.map((time, index) => (
            <li key={index.toString()} style={{ listStyle: "none" }}>
              <button
                className="tButtons"
                onClick={(e) => update(time)}
              >
                {time}
              </button>
            </li>
          ))}
        </ul>
        <div className="veri">{verify ? (veriMessage()) : (onNope())}</div>
      </div>
      {countEl()}
    </div>
  );
};

export default DayChosen;
