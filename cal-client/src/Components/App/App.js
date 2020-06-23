import React from "react";
import { Router, navigate } from "@reach/router";
import Calendar from "../Calendar/Calendar";
import DayChosen from "../DayChosen/DayChosen";
import Cthanks from "../Cthanks/Cthanks";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  startOfDay,
  isSameMonth,
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
      error: false,
      current: new Date(),
      first: {},
      second: {},
      initTime: {},
    };

    this.getEm = this.getEm.bind(this);
    this.updating = this.updating.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.delay = this.delay.bind(this);
    this.initializeCal = this.initializeCal.bind(this);
  }

  componentDidMount() {
    this.initializeCal();
  }

  async initializeCal() {
    const currentMonth = this.state.currentMonth;
    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(addMonths(startMonth, 1));
    const theStart = startMonth.toISOString();
    const theEnd = endMonth.toISOString();

    try {
      let res = await axios.get(`http://localhost:3000/api/days/${theStart}/${theEnd}`);

      const days = res.data.data;

      const first = days.first;
      const second = days.second;

      this.setState({
        first: first,
        second: second,
        initTime: first,
      })

      return;

    } catch (err) {
      if (err) {
        console.log(err.response);
      }
      return;
    }
  }

  async getEm(choice) {
    const day = startOfDay(choice);
    const nextday = startOfDay(addDays(day, 1));
    const theDay = day.toISOString();
    const theNextDay = nextday.toISOString();
    try {
      let res = await axios.get(
        `http://localhost:3000/api/date/${theDay}/${theNextDay}`
      );

      if (res.length) {

        let inComing = await res.data.data[0].time;

        this.setState({
          times: inComing,
        });

        return true;
      } else {

        return false;
      }
    } catch (err) {

      if (err) {
        console.log(err.response);
      }

      return false;
    }
  };

  async updating(time) {
    const day = startOfDay(this.state.selectedDate);
    const nextday = startOfDay(addDays(this.state.selectedDate, 1));
    const theOne = day.toISOString();
    const theNext = nextday.toISOString();
    const timeUpdate = updateTime(this.state.times, time);
    let res = await axios
      .put("http://localhost:3000/api/date", {
        date: theOne,
        nextdate: theNext,
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

    const nextMonth = addMonths(this.state.current, 1);
    if (isSameMonth(day, this.state.current) || isSameMonth(day, nextMonth)) {

      let weGood = await this.getEm(day);
      if (weGood) {
        navigate(`/day`);

      } else {
        this.setState({
          error: true,
        })

        await this.delay(3500);

        this.setState({
          error: false,
        })
      }
    } else {
      this.setState({
        error: true,
      })
      await this.delay(3500);
      this.setState({
        error: false,
      })
    }

  };

  nextMonth() {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    }, () => {
      const sameAsCurrent = this.state.current;
      const nextMonth = addMonths(this.state.current, 1);
      let view = {};
      let error = true;
      if (isSameMonth(this.state.currentMonth, sameAsCurrent)) {
        view = this.state.first;
        error = false;
      }

      if (isSameMonth(this.state.currentMonth, nextMonth)) {
        view = this.state.second;
        error = false;
      }

      this.setState({
        initTime: view,
        error: error,
      })
    });
  };

  prevMonth() {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    }, () => {
      const sameAsCurrent = this.state.current;
      const nextMonth = addMonths(this.state.current, 1);
      let view = {};
      let error = true;

      if (isSameMonth(this.state.currentMonth, sameAsCurrent)) {
        view = this.state.first;
        error = false;
      }

      if (isSameMonth(this.state.currentMonth, nextMonth)) {
        view = this.state.second;
        error = false;
      }

      this.setState({
        initTime: view,
        error: error,
      })

    });
  };

  delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
  }

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
            initTime={this.state.initTime}
            error={this.state.error}
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
