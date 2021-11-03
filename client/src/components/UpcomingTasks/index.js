import React, { useState } from "react";
import Calendar, { CalendarDayHeader } from "./Calendar";

const Upcoming = () => {
  const [yearAndMonth, setYearAndMonth] = useState([2021, 11]);
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
