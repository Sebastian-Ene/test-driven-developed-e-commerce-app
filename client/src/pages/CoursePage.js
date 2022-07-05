import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import "../style/coursepage.scss";
import SignIn from "../components/SignIn";

export default function CoursePage() {
    const pathId = useParams().id;
    const [course, setCourse] = useState(null);
    const [payment, setPayment] = useState(null);
    const [signin, setsignin] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/courses/${pathId}`)
            .then((resp) => {
                console.log(resp.data.data);
                setCourse(resp.data.data.course);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [pathId]);

    function authTokenFunction() {
        if (localStorage.getItem("authToken")) setsignin(true);
    }

    useEffect(() => {
        window.addEventListener("authToken", authTokenFunction);
        return () => {
            window.removeEventListener("authToken", authTokenFunction);
        };
    }, []);

    const buy = () => {
        axios
            .post(
                `http://localhost:8000/api/user/order`,
                {
                    course_id: pathId,
                    payment_completed: true,
                },
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("authToken"),
                    },
                }
            )
            .then((resp) => {
                console.log(resp.data.data);
                setPayment(true);
            })
            .catch((err) => {
                console.log(err);
                setsignin(false);
            });
    };
    // useEffect(() => {
    //     console.log(course);
    // }, [course]);
    return !signin ? (
        <SignIn />
    ) : (
        course && (
            <main>
                <Header />
                {payment && <div>Modal</div>}
                <div className="course-wrapper">
                    <div className="course-section-1">
                        <div className="left">
                            <div className="course-name">
                                {course.name} - {course.price} RON
                            </div>
                            <div className="course-descr">
                                {course.short_description}
                            </div>
                            <div className="course-buy">
                                <div onClick={buy}>Cumpara &gt;</div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={course.image} alt="" />
                        </div>
                    </div>
                    <div className="course-section-2">
                        <div className="course-descr">{course.description}</div>
                    </div>
                </div>
                <Footer />
            </main>
        )
    );
}
