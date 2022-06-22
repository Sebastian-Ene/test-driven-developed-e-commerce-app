import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import "../style/coursepage.scss";

export default function CoursePage() {
    const pathId = useParams().id;
    const [course, setCourse] = useState(null);
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

    // useEffect(() => {
    //     console.log(course);
    // }, [course]);
    return (
        course && (
            <main>
                <Header />
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
                                <Link to="/courses">Cumpara &gt;</Link>
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
