import React from "react";
import MockRoster from '../Mock/players';
import defaultImage from '../Images/def.jpg';

const Roster = () => {
    let roster = MockRoster.players;
    let goalies = [];
    let defensemen = [];
    let forwards = [];
    roster.map(player => {
        if (player.role === "goalie") {
            return goalies.push(player);
        }
        else if (player.role === "defense") {
            return defensemen.push(player);
        }
        else {
            return forwards.push(player);
        }
    })
    console.log("DEFENSE", defensemen);
    console.log("ROSTER: ", roster);
    return (
        <div className="main-container">
            <div className="main-inner-left-container-roster">
                <div className="players-defense-and-goalies-container">
                    <div class="def-goal-headline">
                        <h3>Målvakter</h3>
                    </div>
                    <div className="player-list">
                        {goalies.map(goalie => {
                            return (
                                <div className="player-card">
                                    <img src={defaultImage} alt="player-profile"/>
                                    <div>
                                        <b className="players-number">#{goalie.number}</b>
                                        <p>{goalie.name}</p>
                                    </div>
                                    <div>
                                        <p>{goalie.position}</p>
                                    </div>
                                    <div>
                                        <em>Tidigare lag</em>
                                        <div className="team-list">
                                        <p>{goalie.youthTeams.map(team => {
                                            return <p>{team}</p>
                                        })}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="players-defense-and-goalies-container">
                    <div class="def-goal-headline">
                        <h3>Försvarare</h3>
                    </div>
                    <div className="player-list">
                        {defensemen.map(goalie => {
                            return (
                                <div className="player-card">
                                    <img src={defaultImage} alt="player-profile"/>
                                    <div>
                                        <b className="players-number">#{goalie.number}</b>
                                        <p>{goalie.name}</p>
                                    </div>
                                    <div>
                                        <p>{goalie.position}</p>
                                    </div>
                                    <div>
                                        <em>Tidigare lag</em>
                                        <div className="team-list">
                                        <p>{goalie.youthTeams.map(team => {
                                            return <p>{team}</p>
                                        })}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="main-inner-right-container-roster">
                    <div className="players-defense-and-goalies-container">
                    <div class="def-goal-headline">
                        <h3>
                            Forwards
                        </h3>
                    </div>
                    <div className="player-list">
                        {forwards.map(goalie => {
                            return (
                                <div className="player-card">
                                    <img src={defaultImage} alt="player-profile"/>
                                    <div>
                                        <b className="players-number">#{goalie.number}</b>
                                        <p>{goalie.name}</p>
                                    </div>
                                    <div>
                                        <p>{goalie.position}</p>
                                    </div>
                                    <div>
                                        <em>Tidigare lag</em>
                                        <div className="team-list">
                                        <p>{goalie.youthTeams.map(team => {
                                            return <p>{team}</p>
                                        })}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    </div>
            </div>            
        </div>
    )
}

export default Roster;