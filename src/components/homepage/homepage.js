import React, { useState, useEffect } from "react";
import { usePopup } from 'react-hook-popup';
import Axios from "axios";
import "../../stylesheets/modal.css";
import "../../stylesheets/homepage.css";

function HomePage() {
    const [user, setUser] = useState(null);
    const [group, setGroup] = useState(null);
    const [newChore, setNewChore] = useState("")
    const [newChoreIndex, setNewChoreIndex] = useState(-1)
    const [showPopup, hidePopup] = usePopup('popup', ({ message, handleClose }) => (
        <div className="modal">
            <div className="modalInner">
                <button 
                    className="modalClose"
                    onClick={handleClose}>
                    X
                </button>

                <div className="modalInner2">
                    <p className="modalHeading">Previous Chore(s)</p>
                    <p className="modalChore">{message}</p>

                    <p className="modalHeading">New Chore {newChoreIndex}</p>
                    <input
                        className="newChoreInput"
                        placeholder="New Chore"
                        onChange={(e) => setNewChore(e.target.value)}
                    />

                    <button 
                        className="modalSubmit"
                        onClick={() => {
                            console.log(newChore)
                            updateChore()
                            hidePopup()
                        }}>
                        Update Chore
                    </button>
                </div>
            </div>
        </div>
    ));

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/",
        }).then((res) => {
            setUser(res.data);
            
            if(!res.data) {
                window.location.href = "/login"; 
            }
        });

        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/group",
        }).then((res) => {
            setGroup(res.data);
            console.log(res);
        });
    }, [])

    const updateChore = () => {
        console.log(newChoreIndex)
    };

    return (
        <div className="mainContainer">
            {user ? (

            <div className="contentContainer">
                <p className="homepageHeading">Welcome resident's of {user.address}</p>
                
                {!group ? (
                <div className="groupNotSetupContainer">
                    <p className="groupNotSetup">Household has not been setup</p>
                    <a href="/createGroup" className="groupNotSetupButtonContainer"><button className="groupNotSetupButton">Setup Household</button></a>
                </div>

                ) : (

                <div className="groupContent">
                    <div className="groupContentCol">
                        <p className="groupContentColHeading">Household Members</p>

                        {group.members.map((item, index) => {
                                return (
                                    <div key={index} className="groupContentColMember">
                                        <p className="groupContentColItemText">{item["name"]}</p>
                                    </div>
                                )
                            }
                        )}
                    </div>

                    <div className="groupContentCol">
                        <p className="groupContentColHeading">Chores</p>

                        {group.chores.map((item, index) => {
                                var member = group.head + parseInt(index)

                                if(member >= group.members.length) {
                                    member = 0
                                }

                                return (
                                    <div key={index} className="groupContentColChore">
                                        {item === "organizer" ? (
                                        <div className="groupContentColChoreInner">
                                            <p className="groupContentColItemText">{item}</p>
                                            <p className="groupContentColItemText assignedChore">{group.members[member]["name"]}</p>
                                        </div>
                                        ) : (
                                        <div className="groupContentColChoreInner">
                                            <p className="groupContentColItemText killCurves">{item}</p>
                                            <p className="groupContentColItemText assignedChore">{group.members[member]["name"]}</p>
                                        </div>)}
                                        
                                        {item !== "organizer" && <p 
                                            href="#"
                                            className="groupContentColChoreEdit"
                                            onClick={() => {
                                                setNewChoreIndex(() => newChoreIndex + 1)
                                                showPopup(item)
                                                console.log(newChoreIndex)
                                            }}>Edit</p>
                                        }
                                        
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
                

                )}
                </div>
            
            ) : (
            // should not enter here
            <div>
                <h1>Welcome to household homies, please login</h1>
                <p><a href="/login">login</a></p>
                <p><a href="/register">register</a></p>
            </div>

            )}
        </div>
    );
}

export default HomePage;
