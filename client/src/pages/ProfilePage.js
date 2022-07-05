import { React, useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";

export default function ProfilePage() {
    const [token, settoken] = useState(localStorage.getItem("authToken"));
    const [orders, setorders] = useState(null);
    const [isSignedin, setisSignedin] = useState(null);

    useEffect(() => {
        if (!token) {
            setisSignedin(false);
            return;
        }
        axios
            .get("http://localhost:8000/api/user/orders", {
                headers: { Authorization: "Bearer " + token },
            })
            .then((resp) => {
                console.log(resp.data);
                setorders(resp.data);
                setisSignedin(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);

    function authTokenFunction() {
        if (localStorage.getItem("authToken"))
            settoken(localStorage.getItem("authToken"));
    }

    useEffect(() => {
        window.addEventListener("authToken", authTokenFunction);
        return () => {
            window.removeEventListener("authToken", authTokenFunction);
        };
    }, []);

    return (
        <div className="profile-wrapper">
            {!isSignedin ? (
                <SignIn />
            ) : (
                <>
                    <Header />
                    <div className="profile-wrapper">
                        <div className="profile-section-1">
                            <div className="title">
                                Hello, {window.localStorage.getItem("name")}
                            </div>
                            <p className="profile-descr">
                                Aceasta pagina este locul in care poti vizualiza
                                datele contului si cursurile achizitionate
                                anterior.
                            </p>
                            <div className="account-details">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
}
