import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/landingpage.scss";
import ceva from "../assets/ceva.jpg";

export default function Landing() {
    return (
        <>
            <main>
                <Header />
                <div className="landing-wrapper">
                    <div className="landing-section-1">
                        <div className="left">
                            <div className="title">
                                Bine ati venit la Programus
                            </div>
                            <div className="description">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Itaque praesentium commodi
                                provident atque numquam delectus nostrum
                                voluptas officia tempora, officiis laudantium
                                voluptatibus nihil velit eum, porro et sequi.
                                Natus, fuga.
                            </div>
                        </div>
                        <div className="right">
                            <img className="right-img" alt="" src={ceva}></img>
                        </div>
                    </div>
                    <div
                        className="landing-section-2"
                        style={{ backgroundImage: `url(${ceva})` }}
                    >
                        <div className="shadow" />
                        <p className="courses-descr">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Magnam eveniet aspernatur iure harum nemo
                            delectus. Quis sed illo est veritatis, recusandae
                            hic molestiae distinctio dolores pariatur delectus
                            neque nobis maxime sint temporibus repellendus aut
                            minima dolore! Obcaecati ut dolorum ipsam.
                        </p>
                        <div className="action-call">
                            <Link to="/courses">Vezi toate cursurile &gt;</Link>
                        </div>
                    </div>
                    <div className="landing-section-3">
                        <div className="left">
                            <img className="left-img" alt="" src={ceva}></img>
                        </div>
                        <div className="right">
                            <div className="description">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Alias eum illum, ab placeat
                                asperiores dolores officia ad ducimus
                                accusantium modi distinctio, vitae at ex
                                possimus fuga dicta quia temporibus quae!
                            </div>
                            <div className="action-call">
                                <Link to="/courses">
                                    Porneste-ti cariera acum &gt;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
