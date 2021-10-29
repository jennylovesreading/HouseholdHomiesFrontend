import React, { useState, useEffect } from "react";
import Axios from "axios";

function HomePage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/",
        }).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    }, [])

    return (
        <div>
            <div>
                {data ? <h1>Welcome Back {data.username}</h1> : <h1>Welcome</h1>}
            </div>
        </div>
    );
}

export default HomePage;
