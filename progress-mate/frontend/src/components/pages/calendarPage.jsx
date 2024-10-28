import React, { useState } from "react";

// Components
import { Button } from '../Components';

// CSS
import '../../css/pages_css/calendarPage.scss';

function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const changeMonth = (amount) => {
        const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + amount));
        setCurrentDate(new Date(newDate));
    };

    const renderDays = () => {
    const today = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = Array(firstDay).fill("");

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    return days.map((day, index) => {
        const isToday =
            day &&
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

        return (
        <div
            key={index}
            className={`day ${isToday ? "today" : ""}`} // Add 'today' class if it's the current date
        >
            {day}
        </div>
        );
    });
};

    return(
        // TODO: Calendar

        <div>Calendar
            <h2>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
            <button onClick={() => changeMonth(-1)}>Previous</button>
            <button onClick={() => changeMonth(1)}>Next</button>
            <div className="calendar-grid">{renderDays()}</div>
        </div>
    );
}

export default CalendarPage;