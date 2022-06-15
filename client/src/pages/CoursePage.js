import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
                console.log(resp.data.data.course);
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
        <main>
            <Header />
            <div className="course-wrapper">
                <div className="course-section-1">
                    <div className="left">
                        <div className="course-name">{course.name}</div>
                        <div className="course-descr">{course.description}</div>
                        <div className="course-buy">
                            {/* TODO: where does the buy button get us? */}
                        </div>
                    </div>
                    <div className="right">
                        <img src="" alt="" />
                    </div>
                </div>
                {/* TODO: what other sections and what data do we need here? */}
            </div>
            <div>CoursePage{pathId}</div>
            <Footer />
        </main>
    );
}
