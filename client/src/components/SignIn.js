import React from "react";
import axios from "axios";
import { useState } from "react";
import Header from "./Header";

export default function SignIn() {
    const [loginEmail, setLoginemail] = useState(null);
    const [loginPassword, setLoginPassword] = useState(null);
    const [registerEmail, setRegisteremail] = useState(null);
    const [registerName, setRegistername] = useState(null);
    const [registerPassword, setRegisterPassword] = useState(null);

    const loginClick = (event) => {
        event.preventDefault();
        const reqBody = {
            email: loginEmail,
            password: loginPassword,
        };
        console.log(reqBody);
        axios
            .post("http://localhost:8000/api/user/signin", reqBody)
            .then((resp) => {
                console.log(resp.data);
                window.localStorage.setItem("authToken", resp.data.accessToken);
                window.localStorage.setItem("email", loginEmail);
                window.localStorage.setItem("name", resp.data.name);
                const event = new Event("authToken");
                window.dispatchEvent(event);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const registerClick = (event) => {
        event.preventDefault();
        const reqBody = {
            email: registerEmail,
            name: registerName,
            password: registerPassword,
        };
        console.log(reqBody);
        axios
            .post("http://localhost:8000/api/user/register", reqBody)
            .then((resp) => {
                console.log(resp.data);
                window.localStorage.setItem("authToken", resp.data.accessToken);
                window.localStorage.setItem("email", registerEmail);
                window.localStorage.setItem("name", registerName);
                const event = new Event("authToken");
                window.dispatchEvent(event);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="signin-page-wrapper">
            <Header />
            <div className="signin-text">
                Utilizarea unui cont permite achizitionarea si salvarea
                informatiilor despre cursurile deja achizitioante
            </div>
            <div className="sign-up-section">
                <form id="sign-up" onSubmit={registerClick}>
                    <div className="title">Inregistrare</div>
                    <div className="sign-up-inputs-wrapper">
                        <input
                            id="sign-in-email"
                            type="text"
                            placeholder="Email"
                            onInput={(e) => setRegisteremail(e.target.value)}
                        />
                        <input
                            id="sign-in-name"
                            type="text"
                            placeholder="Name"
                            onInput={(e) => setRegistername(e.target.value)}
                        />
                        <input
                            id="sign-in-password"
                            type="password"
                            placeholder="Password"
                            onInput={(e) => setRegisterPassword(e.target.value)}
                        />
                        <input type="submit" value="Inregistrare" />
                    </div>
                </form>
            </div>
            <div className="log-in-section">
                <form id="log-in" onSubmit={loginClick}>
                    <div className="title">Logare</div>
                    <div className="log-in-inputs-wrapper">
                        <input
                            id="log-in-email"
                            type="text"
                            placeholder="Email"
                            onInput={(e) => setLoginemail(e.target.value)}
                        />
                        <input
                            id="log-in-password"
                            type="password"
                            placeholder="Password"
                            onInput={(e) => setLoginPassword(e.target.value)}
                        />
                        <input type="submit" value="Logare" />
                    </div>
                </form>
            </div>
        </div>
    );
}
