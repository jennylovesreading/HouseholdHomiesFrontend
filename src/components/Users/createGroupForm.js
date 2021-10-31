import React, { useState } from "react";
import Axios from "axios";

function CreateGroupForm() {
    const [houseMateName, sethouseMateName] = useState();
    const [houseMateNumber, sethouseMateNumber] = useState();
    const [membersArray, setMembersArray] = useState([]);
    const [choresArray, setchoresArray] = useState(["Organizer"]);

    const addHouseMate = () => {
        const updatedMembersArray = [
            ...membersArray,
            {
                "name": houseMateName,
                "number": houseMateNumber
            }
        ];

        setMembersArray(updatedMembersArray);
        setchoresArray([...choresArray, []]);
        console.log(choresArray);
    };

    const updateChore = (e) => {
        const chores = [...choresArray];
        chores[parseInt(e.target.id) + 1] = e.target.value;
        setchoresArray(chores);
        console.log(chores);
    };

    const register = () => {
        Axios({
            method: "POST",
            data: {
                members: membersArray,
                chores: choresArray
            },
            withCredentials: true,
            url: "http://localhost:4000/createGroup",
        }).then((res) => {
            console.log(res);
            if(res.status === 200 && res.data === "OK" && window) {
                console.log("redirecting to home page");
                sethouseMateName("");
                sethouseMateNumber("");
                setMembersArray([]);
                setchoresArray(["Organizer"]);

                /*setInterval(() => {
                    Axios({
                        method: "GET",
                        withCredentials: true,
                        url: "http://localhost:4000/sendChores",
                    })
                }, 5000);

                setInterval(() => {
                    Axios({
                        method: "PUT",
                        withCredentials: true,
                        url: "http://localhost:4000/updateHead",
                    })
                }, 604800000);*/

                window.location.href = "/"; 
            }
        });
    };

    return (
        <div>
            <div>
                <div>
                    <p>Add Housemate</p>
                    <input
                        placeholder="housemate name"
                        onChange={(e) => sethouseMateName(e.target.value)} />

                    <input
                        placeholder="housemate phone number"
                        onChange={(e) => sethouseMateNumber(e.target.value)} />

                    <button onClick={addHouseMate}>Add Housemate</button>
                </div>

                <div>
                    <p>Housemate's</p>
                    
                    {membersArray.map((item, index) => 
                        {
                            return (
                                <div key={index}>
                                    {Object.entries(item)
                                    .map( ([key, value]) => 
                                        {
                                            return (<p key={key}>{value}</p>)
                                        }
                                    )}
                                </div>
                            )
                        }
                    )}
                </div>   

                <div>
                    <p>Chores</p>

                    <div> 
                        {(membersArray.length > 0) && <p>Organizer</p> }

                        {
                        Array.from({ 
                                length: membersArray.length - 1
                            }, 
                            (_, i) => 
                                <input 
                                    key={i}
                                    id={i}
                                    onChange={updateChore} />)
                        }
                    </div>
                </div> 

                <button onClick={register}>Create Group</button>      
            </div>
        </div>
    );
}

export default CreateGroupForm;
