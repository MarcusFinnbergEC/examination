import React from "react";

const Home = () => {
    return (
        <div className="main-container">
            <div className="main-inner-left-container">
                
            </div>
            <div className="main-inner-right-container">
                <div className="main-inner-right-container-home-component">
                    <div>
                        <h1>Välkommen </h1> <p>Till Lantzlagets sida</p>
                    </div>
                    <p>Här hittar man all information kring hockeylaget Lantzlaget</p>
                    <p>Här följer en kort lista med beskrivning vad som finns under respektive flik i navigationsfältet:</p>
                    <ul>
                        <li>Nyheter - hitta nyheter som admins har publicerat såsom information kring cuper eller liknande</li>
                        <li>Utrustning - Lite generell information kring utrustning, vad man bör tänka på och så vidare</li>
                        <li>Laget - Se vilka som finns i laget, det är inte alla som bor och tränar med oss i Helsingborg</li>
                        <li>Kontakt - Här finns alla medlemmars kontaktinformation (e-post och telefonnummer)</li>
                        <li>Kalender - Här lägger admins upp alla event såsom träningar, matcher m.m. och det är här man svarar på en kallelse</li>
                    </ul>
                    <em>Om där är problem med hemsidan kontakta Marcus Finnberg</em>
                    <em>För övriga frågor kontakta Rolf Hamark eller Daniel Lantz</em>
                </div>
            </div>            
        </div>
    )
}

export default Home;