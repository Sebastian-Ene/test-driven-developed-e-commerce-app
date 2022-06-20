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
                                Programus este o pagina care face ceva tare cu
                                cursuri nuj vere sa moara nasa
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
                            Cursurile programus fac casjfhajf adfjhsaj
                            hfajkshfjkas fjashf jashf jah fjhsa jfhsajhfs
                            jafjsha jsfhajf hhafs jfhlj gdnilalejwij iw ie iagi
                            i jf dsaf sabf jksdah jfsaf shf idsaisfd ai fasi
                            fhiadshf sdiofis adifdsih i hdsafih asih fadsi
                            fhioadsih fdasioh fiohsf ihsah iashdf hsi fsaif
                            asiofioh asihfasio fiosahioafh
                        </p>
                        <div className="action-call">
                            <Link to="/courses">Vezi toate cursurile &gt;</Link>
                        </div>
                    </div>
                    <div className="landing-section-3">
                        <div className="left">
                            <img className="left-img" alt="" src=""></img>
                        </div>
                        <div className="right">
                            <div className="description">
                                Inceputurile sunt grele la angajatori place sa
                                faci cursuri sloaboaze dastea descriere ce sa
                                mai lux cumpara dracu un curs si lasa ma in
                                [pace cat sa te nai conving ca am obosit]
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
