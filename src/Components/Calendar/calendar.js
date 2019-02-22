import React from "react";
import { months, weekday } from "../Logic/logic-calendar";

const Calendar = (props) => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let yyyy = today.getFullYear();

    let activeMonth = mm;
    let activeYear = yyyy;
    let month = months[activeMonth].month;
    let todaysDate = `${dd} ${month}, ${yyyy}`;
    console.log("Dagens datum: ",todaysDate)

    function nextMonth() {
        activeMonth++;
        if (activeMonth === 12) {
            activeMonth = 0;
            activeYear++
        }
        month = months[activeMonth].month;
        console.log(activeMonth, activeYear, month);
    }

    function previousMonth() {
        activeMonth--;
        if (activeMonth < 0) {
            activeMonth = 11;
            activeYear--
        }
        month = months[activeMonth].month;
        console.log(activeMonth, activeYear, month);
    }

    function daysInMonth (month, year) {
        console.log(month, year);
        return new Date(year, month, 0).getDate();
    }
    console.log("Month: ",activeMonth);
    let days = [];
    let length = daysInMonth(activeMonth+1, activeYear);

    for(let i = 0; i < length; i++) {
        let date = i+1;
        let setDate = new Date(`${activeMonth+1} ${date}, ${activeYear}`);
        let whatDay = weekday[setDate.getDay()];
        days.push({date: date, day:whatDay.day});
    }
    console.log("DAYSDAYS:",days)
    let daysReversed = days;

    let monthMondays = [];
    let monthTuesdays = [];
    let monthWednesdays = [];
    let monthThursdays = [];
    let monthFridays = [];
    let monthSaturdays = [];
    let monthSundays = [];
    days.map(i => {
        if (i.day.includes("monday")){
            let thisDay = <div className="calendar-date-div" key={i.date} data-date={`${i.date} ${month}, ${activeYear}`} onClick={(date) => props.pickDate(date)}><p>{i.date}</p></div>;
            return (
                monthMondays.push(thisDay)
            )
        }
        else if (i.day.includes("tuesday")){
            let thisDay = <div className="calendar-date-div" key={i.date} data-date={`${i.date} ${month}, ${activeYear}`} onClick={(date) => props.pickDate(date)}><p>{i.date}</p></div>;
            return (
                monthTuesdays.push(thisDay)
            )
        }
        else if (i.day.includes("wednesday")){
            let thisDay = <div className="calendar-date-div" key={i.date} data-date={`${i.date} ${month}, ${activeYear}`} onClick={(date) => props.pickDate(date)}><p>{i.date}</p></div>;
            return (
                monthWednesdays.push(thisDay)
            )
        }
        else if (i.day.includes("thursday")){
            let thisDay = <div className="calendar-date-div" key={i.date} data-date={`${i.date} ${month}, ${activeYear}`} onClick={(date) => props.pickDate(date)}><p>{i.date}</p></div>;
            return (
                monthThursdays.push(thisDay)
            )
        }
        else if (i.day.includes("friday")){
            let thisDay = <div className="calendar-date-div" key={i.date} data-date={`${i.date} ${month}, ${activeYear}`} onClick={(date) => props.pickDate(date)}><p>{i.date}</p></div>;
            return (
                monthFridays.push(thisDay)
            )
        }

        else if (i.day.includes("saturday")){
            let thisDay = <div className="calendar-date-div" key={i.date} data-date={`${i.date} ${month}, ${activeYear}`} onClick={(date) => props.pickDate(date)}><p>{i.date}</p></div>;
            return (
                monthSaturdays.push(thisDay)
            )
        }
        else {
            let thisDay = <div className="calendar-date-div" key={i.date} data-date={`${i.date} ${month}, ${activeYear}`} onClick={(date) => props.pickDate(date)}><p>{i.date}</p></div>;
            return (
                monthSundays.push(thisDay)
            )
        }
    });
   
    if(days[0].day !== "monday") {
        monthMondays.unshift(<div className="calendar-no-date-div"><p>*</p></div>);        
    }
    if(days[0].day !== "monday" &&  days[0].day !== "tuesday") {
        monthTuesdays.unshift(<div className="calendar-no-date-div"><p>*</p></div>);        
    }
    if(days[0].day !== "monday" && days[0].day !== "tuesday" && days[0].day !== "wednesday") {
        monthWednesdays.unshift(<div className="calendar-no-date-div"><p>*</p></div>);        
    }
    if(days[0].day !== "monday" && days[0].day !== "tuesday" && days[0].day !== "wednesday" && days[0].day !== "thursday") {
        monthThursdays.unshift(<div className="calendar-no-date-div"><p>*</p></div>);        
    }
    if(days[0].day !== "monday" && days[0].day !=="tuesday" && days[0].day !== "wednesday" && days[0].day !== "thursday" && days[0].day !== "friday") {
        monthFridays.unshift(<div className="calendar-no-date-div"><p>*</p></div>);        
    }
    if(days[0].day !== "monday" && days[0].day !=="tuesday" && days[0].day !== "wednesday" && days[0].day !== "thursday" && days[0].day !== "friday" && days[0].day !== "saturday") {
        monthSaturdays.unshift(<div className="calendar-no-date-div"><p>*</p></div>);        
    }
   
    //"day activeMonth, year 00:00:01" 

    let lastDay = daysReversed.reverse()[0].day;

    switch(lastDay){
        case "monday":
            monthTuesdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthWednesdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthThursdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthFridays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthSaturdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthSundays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            break;
        case "tuesday":
            monthWednesdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthThursdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthFridays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthSaturdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthSundays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            break;
        case "wednesday":
            monthThursdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthFridays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthSaturdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthSundays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            break;
        case "thursday":
            monthFridays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthSaturdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthSundays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            break;
        case "friday":
            monthSaturdays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            monthSundays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            break;
        case "saturday":
            monthSundays.push(<div className="calendar-no-date-div"><p>*</p></div>);
            break;
        default:
    }


    return (
        <div className="calendar-wrapper">
            <div className="calendar-header">
                <button onClick={previousMonth}>Föregående</button>
                <h3>{month} {activeYear}</h3>
                <button onClick={nextMonth}>Nästa</button>
            </div>
            <div className="calendar-body-div">
                <div className="calendar-day-headline">
                    <p>Mån</p>
                    <p>Tis</p>
                    <p>Ons</p>
                    <p>Tor</p>
                    <p>Fre</p>
                    <p>Lör</p>
                    <p>Sön</p>
                </div>
                <div className="calendar-dates-container">
                    <div className="weekday" id="monday">{monthMondays}</div>
                    <div className="weekday" id="tuesday">{monthTuesdays}</div>
                    <div className="weekday" id="wednesday">{monthWednesdays}</div>
                    <div className="weekday" id="thursday">{monthThursdays}</div>
                    <div className="weekday" id="friday">{monthFridays}</div>
                    <div className="weekday" id="saturday">{monthSaturdays}</div>
                    <div className="weekday" id="sunday">{monthSundays}</div>
                </div>
            </div>
        </div>
    )
}

export default Calendar;