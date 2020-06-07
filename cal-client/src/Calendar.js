import React from "react";
import ChosenDay from "./ChosenDay";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  toDate,
  startOfDay,
} from "date-fns";
import axios from "axios";
import { updateTime } from "./helper";
import { NavLink } from "./NavLink";

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    times: [],
    dateClick: false,
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
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
            onClick={() => this.onDateClick(toDate(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
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

  getEm = async (choice) => {
    const day = startOfDay(choice);
    const nextday = startOfDay(addDays(day, 1));
    const theDay = day.toISOString();
    const theNextDay = nextday.toISOString();
    let res = await axios.get(
      `http://localhost:3000/api/date/${theDay}/${theNextDay}`
    );
    let inComing = await res.data.data[0].time;

    this.setState({
      times: inComing,
    });
  };

  updating = async (time) => {
    const day = startOfDay(this.state.selectedDate);
    const nextday = startOfDay(addDays(this.state.selectedDate, 1));
    const theOne = day.toISOString();
    const theNext = nextday.toISOString();
    const timeUpdate = updateTime(this.state.times, time);
    let res = await axios
      .put(`http://localhost:3000/api/date/${theOne}/${theNext}`, {
        time: timeUpdate,
      })
      .catch((err) => console.log(err.response));

    let came = res.data.data.time;
    console.log(came);
    this.setState({
      times: timeUpdate,
    });
    console.log(res.data);
  };

  onDateClick = (day) => {
    this.getEm(day);
    this.setState({
      selectedDate: day,
      dateClick: true,
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };

  setDateClick = () => {
    this.setState({
      dateClick: false,
      currentMonth: this.state.selectedDate,
    });
  };

  render() {
    return (
      <div>
        {this.state.dateClick ? (
          <div className="chosenDay">
            <ChosenDay
              selectedDate={this.state.selectedDate}
              clickSetter={this.setDateClick}
              times={this.state.times}
              update={this.updating}
            />
          </div>
        ) : (
          <div className="calendar">
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div>
        )}
      </div>
    );
  }
}

export default Calendar;
