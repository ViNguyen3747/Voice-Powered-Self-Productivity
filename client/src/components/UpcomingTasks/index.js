import React, { useState } from "react";
import Calendar, { CalendarDayHeader } from "./Calendar";
import "../common/Styles/commonStyles.css";
import Form from "../common/Form";
const Upcoming = () => {
  const [yearAndMonth, setYearAndMonth] = useState([
    new Date().getFullYear(),
    new Date().getMonth() + 1,
  ]);
  return (
    <div className="container">
      <div className="wrapper">
        <Form />
      </div>
      <div className="wrapper">
        <Calendar
          yearAndMonth={yearAndMonth}
          onYearAndMonthChange={setYearAndMonth}
          renderDay={(calendarDayObject) => (
            <div>
              <CalendarDayHeader calendarDayObject={calendarDayObject} />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Upcoming;
