import { React, useEffect, useState } from "react";
import axios from "axios";
import SignIn from "../components/SignIn";

export default function AdminPage() {
    const [token, settoken] = useState(localStorage.getItem("authToken"));
    const [courses, setcourses] = useState(null);
    const [isSignedin, setisSignedin] = useState(null);

    useEffect(() => {
        window.addEventListener("authToken", () => {
            if (localStorage.getItem("authToken"))
                settoken(localStorage.getItem("authToken"));
        });
        if (!token) {
            setisSignedin(false);
            return;
        }
        axios
            .get("http://localhost:8000/api/admin", {
                headers: { Authorization: "Bearer " + token },
            })
            .then((resp) => {
                console.log(resp.data);
                setcourses(resp.data);
                setisSignedin(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);

    return (
        <div className="profile-wrapper">
            {isSignedin ? <div>ADMIN</div> : <SignIn />}
        </div>
    );
}
