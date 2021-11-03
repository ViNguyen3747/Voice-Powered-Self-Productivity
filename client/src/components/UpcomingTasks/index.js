import React, { useState } from "react";
import Calendar, { CalendarDayHeader } from "./Calendar";

const Upcoming = () => {
  const [yearAndMonth, setYearAndMonth] = useState([
    new Date().getFullYear(),
    new Date().getMonth() + 1,
  ]);
  return (
    <div className="App">
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
  );
};

export default Upcoming;
