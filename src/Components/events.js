import React, { Component } from "react";
import Calendar from "./Calendar/calendar";
import EventDetails from './Calendar/eventdetails';
import { connect } from 'react-redux';
import { calendarAction } from '../Redux/Actions/calendarActions';
import { months, weekday} from './Logic/logic-calendar';
import MockData from '../Mock/mock';

//<h1>{this.props.calendar.todaysDate}</h1>
//redux.calendar.pickedDate: todayDate !== res.picked ? picked : todayDate
class Events extends Component {
    
    pickDate(st) {
        console.log('Date', st.currentTarget.dataset.date);
        let pickedDate = st.currentTarget.dataset.date;
        console.log("MOCKDATA: ", MockData);
        let eventOnPickedDate = "";
        MockData.events.map(event => {
            console.log("EVENT:",event.date);
            console.log("EVENT TO LOWER: ", pickedDate.toLowerCase())
            if (event.date === pickedDate.toLowerCase()){
                console.log("EVENT DATE MATCHAR PICKEDDATE")
                eventOnPickedDate = event
            }
            return eventOnPickedDate;
        });
        console.log("EVENTET: ", eventOnPickedDate);
        if (eventOnPickedDate === ""){
            eventOnPickedDate = {
                date: st.currentTarget.dataset.date,
                eventType: "No event on this day"
            }
        }
        this.props.dispatch(calendarAction(eventOnPickedDate));
    }
    
    render(){
    return (
        <div className="main-container-fixed-with-navbar">
        
            <div className="main-inner-left-container-fixed-events-component">
                <div className="image-filter">
                    <Calendar pickDate={(st) => this.pickDate(st)}/>
                </div>
            </div>
            <div className="main-inner-right-container-event-events-component">
                <div className="main-inner-right-inner-container">
                {this.props.event.todaysDate ? <EventDetails pickedDate={this.props.event.todaysDate}/> : <h3>Välj ett datum</h3> }
                </div>
            </div>            
        </div>
    )
}
}

const mapStateToProps = state => ( console.log("EventState: ", state.calendarReducer), {
    event: state.calendarReducer
})

export default connect(mapStateToProps)(Events);