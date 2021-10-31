import React, { useState, useEffect } from "react";
import Axios from "axios";

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
        <div>
            <div>
                {user ? (<div>
                    <h1>Welcome {user.username}</h1>
                    
                    {!group ? (<div>
                        <p>Looks like u need to set up your group, click below:</p>
                        <a href="/createGroup">Create Grouup</a>
                    </div>) : (<div>
                        <p>Group has been successfully initialized and will now send notifications</p>
                        <p>group info/updates should now be displayed here</p>
                    </div>)}
                </div>
                
                ) : (<div>
                        <h1>Welcome to household homies, please login</h1>
                        <p><a href="/login">login</a></p>
                        <p><a href="/register">register</a></p>
                    </div>)}
            </div>
        </div>
    );
}

export default HomePage;
