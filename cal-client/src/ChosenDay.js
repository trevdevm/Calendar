import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const DayChosen = (props) => {
  const [day] = useState(props.selectedDate);
  const headFormat = "MMMM d yyyy";
  const weekDay = "EEEE";

  const update = (time) => {
    props.update(time);
  };

  return (
    <div>
      <div>
        <strong>
          <button onClick={(e) => props.clickSetter()}>Go Back</button>
        </strong>
      </div>
      <span>{format(day, headFormat)}</span>
      <strong>{format(day, weekDay)}</strong>
      <div>
        <ul>
          {props.times.map((time, index) => (
            <li key={index.toString()} style={{ listStyle: "none" }}>
              <button
                style={{
                  color: "seagreen",
                  fontSize: "2em",
                }}
                onClick={(e) => update(time)}
              >
                {time}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayChosen;
