import React from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  isSameMonth,
  isSameDay,
  toDate,
  addMonths,
} from "date-fns";
import "./Calendar.css";

const Calendar = (props) => {

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={props.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(props.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={props.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  const renderDays = () => {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(props.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  const renderCells = () => {
    const currentMonth = props.currentMonth;
    const selectedDate = props.selectedDate;
    const init = props.initTime;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const initSize = Object.keys(init).length;

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let theEnd = monthEnd;
    let theStart = monthStart;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);

        const cloneDay = day;
        const currDay = Number(formattedDate);

        let timeAvail = [];
        let theTimes = [];
        if (day >= theStart && day <= theEnd) {
          const dayIndex = currDay - 1;

          if (dayIndex < initSize) {
            theTimes = timeAvail.concat(init[dayIndex].time);
          }
        }

        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                  ? "selected"
                  : ""
              }`}
            key={day}
            onClick={(e) => props.dateClick(toDate(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <ul className="showTime">{theTimes.map((item, index) => (<li key={index.toString()}>{item}</li>))}</ul>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  const renderError = () => {
    if (props.error) {
      let current = new Date();
      let nextMonth = addMonths(current, 1);
      let chosen = props.currentMonth;
      if (isSameMonth(chosen, current) || isSameMonth(chosen, nextMonth)) {
        return (
          <div className="errBox"><h1>No Times Available. Please choose another day.</h1></div>
        )
      }
      return (
        <div className="errBox">Only the first two months have availability.</div>
      )
    }
    else {
      return (
        <div className="helpBox">Please select a date with available times to demo this calendar application.</div>
      )
    }
  }

  return (
    <div>
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            My<b>Calendar</b>
            {renderError()}
          </span>
        </div>
      </header>
      <main>
        <div className="calendar">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      </main>
    </div>
  );
}

export default Calendar;
