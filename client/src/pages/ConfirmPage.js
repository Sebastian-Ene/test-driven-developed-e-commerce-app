import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ConfirmPage() {
    return (
        <main>
            <Header />
            <div className="confirm-page-wrapper">
                <div className="confirm-page-section-1">
                    <div className="left">
                        <div className="title">
                            {" "}
                            Multumim ca ati achizitionat un curs Programus
                        </div>
                        <div className="thanks-text">
                            Cursul cumparat e de mare calitate si va asigura ca
                            veti avea o cariera buna pentru ca il faceti ca e
                            cerut uite ce vor oamenii pe piata si e bine vazuta
                            academia si vrajeli de genul asta foarte interesant
                        </div>
                        <div className="course-token-text">
                            Codul dumneavoastra este: RASFAF#@RFDFWE3243
                        </div>
                    </div>
                    <div className="right">
                        <img alt=" " src=""></img>
                    </div>
                </div>
                <div className="confirm-page-section-2">
                    <div className="left">
                        <img alt=" " src=""></img>
                    </div>
                    <div className="right">
                        <div className="token-usage">
                            ASa se foloseste codul primit il introduceti la
                            site-ul si acolo vedeti cursul acolo invatati ayayae
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
