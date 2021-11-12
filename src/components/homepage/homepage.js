import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../stylesheets/homepage.css";

function HomePage() {
    const [user, setUser] = useState(null);
    const [group, setGroup] = useState(null);

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
                                        <p className="groupContentColItemText">{item}</p>
                                        <p className="groupContentColItemText assignedChore">{group.members[member]["name"]}</p>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
                

                )}
                </div>
            
            ) : (

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
