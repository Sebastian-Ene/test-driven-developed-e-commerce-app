import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/signinpage.scss";

export default function SignInPage() {
    return (
        <main>
            <Header />
            <div className="signin-page-wrapper">
                <div className="signin-text">
                    Utilizarea unui cont permite achizitionarea si salvarea
                    informatiilor despre cursurile deja achizitioante
                </div>
                <div className="sign-up-section">
                    <form id="sign-up">
                        <div className="title">Inregistrare</div>
                        <div className="sign-up-inputs-wrapper">
                            <input
                                id="sign-in-email"
                                type="text"
                                placeholder="Email"
                            />
                            <input
                                id="sign-in-name"
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                id="sign-in-password"
                                type="password"
                                placeholder="Password"
                            />
                            <input
                                id="sign-in-password-confirm"
                                type="password"
                                placeholder="Password Confirmation"
                            />
                            <input type="submit" value="Inregistrare" />
                        </div>
                    </form>
                </div>
                <div className="log-in-section">
                    <form id="log-in">
                        <div className="title">Logare</div>
                        <div className="log-in-inputs-wrapper">
                            <input
                                id="log-in-email"
                                type="text"
                                placeholder="Email"
                            />
                            <input
                                id="log-in-password"
                                type="password"
                                placeholder="Password"
                            />
                            <input type="submit" value="Logare" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}
