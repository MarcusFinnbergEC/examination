import React from "react";
import Calendar from "./Calendar/calendar"

const Events = () => {
    return (
        <div className="main-container-fixed-with-navbar">
        
            <div className="main-inner-left-container-fixed-events-component">
                <div className="image-filter">
                    <Calendar />
                </div>
            </div>
            <div className="main-inner-right-container-fixed-events-component">
                <div className="main-inner-right-inner-container">
                    
                </div>
            </div>            
        </div>
    )
}

export default Events;