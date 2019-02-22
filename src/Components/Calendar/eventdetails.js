import React, { Component } from 'react';

const EventDetails = (props) => {
    let event = props.pickedDate;
    console.log("EVENT PROPS: ", props.pickedDate);
    
    
    if (event.eventType === "No event on this day") {
        return (
            <div className="event-details-container">
                <div className="event-details-header">
                    <div className="event-details-header-headline">
                        <h2 className="date-details">{event.date}</h2>
                    </div>
                    <div className="event-details-header-infotext">
                        <p>Inget event denna dag!</p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="event-details-container">
                <div className="event-details-header">
                    <div className="event-details-header-headline">
                        <h2 className="date-details">{event.date}</h2>
                    </div>
                    <div className="event-details-header-infotext">
                        <p>{event.eventType}</p>
                    </div>
                </div>
                <div className="event-details-body">
                    <div className="event-details-body-infobox">
                        <div className="event-details-body-infobox-header">
                            <h2>INFO</h2>
                        </div>
                        <div className="event-details-body-infobox-body">
                            <div className="infobox-body-time">
                                <p>Tid :</p>
                                <div>
                                    {event.timeFrom}
                                </div>
                                <em className="filler-div">
                                    *
                                </em>
                            </div>
                            <div className="infobox-body-where">
                                <p>Var :</p>
                                <div>
                                    {event.location}
                                </div>
                                <em className="filler-div">
                                    *
                                </em>
                            </div>
                            <div className="infobox-body-addInfo">
                                <p>Info :</p>
                                <div>
                                    {event.addInfo}
                                </div>
                                <em className="filler-div">
                                    *
                                </em>
                            </div>
                        </div>
                    </div>
                    <div className="event-details-body-subheader">
                        <h3 className="event-details-header-infotext">INBJUDNA</h3>
                    </div>
                    <div className="event-details-body-invited-list">
                        {event.invitedUsers.map(user => {
                            return (
                                <div>
                                    <p className="username">{user.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="event-details-footer">

                </div>
            </div>
)
}
}

export default EventDetails;