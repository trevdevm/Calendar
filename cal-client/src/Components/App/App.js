import React from "react";
import { Router, navigate } from "@reach/router";
import Calendar from "../Calendar/Calendar";
import DayChosen from "../DayChosen/DayChosen";
import Cthanks from "../Cthanks/Cthanks";
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
import { updateTime } from "../../helper";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      times: ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"],
    };

    this.getEm = this.getEm.bind(this);
    this.updating = this.updating.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
  }

  async getEm(choice) {
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

  async updating(time) {
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

    console.log(res.data.success);
  };

  async onDateClick(day) {
    this.setState({
      selectedDate: day,
    });
    await this.getEm(day);
    navigate(`/day`);
  };

  nextMonth() {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth() {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Calendar 
            currentMonth={this.state.currentMonth}
            selectedDate={this.state.selectedDate}
            times={this.state.times}
            getEm={this.getEm}
            dateClick={this.onDateClick}
            prevMonth={this.prevMonth}
            nextMonth={this.nextMonth}
            path="/" />
          <DayChosen
            selectedDate={this.state.selectedDate}
            times={this.state.times}
            update={this.updating}
            path="/day" />
          <Cthanks 
            path="/thx" />
        </Router>
      </div>
    );
  }
}

export default App;
