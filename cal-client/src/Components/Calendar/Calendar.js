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
  addMonths,
  subMonths,
  toDate,
  startOfDay,
} from "date-fns";
import "./Calendar.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: this.props.currentMonth,
      selectedDate: this.props.selectedDate,
      times: this.props.times,
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderCells = this.renderCells.bind(this);
    this.renderDays = this.renderDays.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.dateClick = this.dateClick.bind(this);
  }


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
            onClick={(e) => this.dateClick(toDate(cloneDay))}
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

  async prevMonth() {
    await this.props.prevMonth();
    this.setState({
      currentMonth: this.props.currentMonth,
    });
  }

  async nextMonth() {
    await this.props.nextMonth();
    this.setState({
      currentMonth: this.props.currentMonth,
    });
  }

  async dateClick(day) {
    await this.props.dateClick(day);
    this.setState({
      selectedDate: this.props.selectedDate,
      times: this.props.times,
    });
  }

  render() {
    return (
      <div>
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              My<b>Calendar</b>
            </span>
          </div>
        </header>
        <main>
          <div className="calendar">
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div>
        </main>
      </div>
    );
  }
}

export default Calendar;
