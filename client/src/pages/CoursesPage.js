import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ceva from "../assets/ceva.jpg";
import CourseCard from "../components/CourseCard";
import "../style/coursespage.scss";

import axios from "axios";

export default function Courses() {
    const [courses, setCourses] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/courses")
            .then((resp) => {
                console.log(resp.data.data.courses);
                setCourses(resp.data.data.courses);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        console.log(courses);
    }, [courses]);

    return (
        <main>
            <Header />
            <div className="courses-wrapper">
                <div
                    className="courses-descripiton"
                    style={{ backgroundImage: `url(${ceva})` }}
                >
                    <div className="shadow" />
                    <p className="courses-descr">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aspernatur sint expedita placeat dignissimos.
                        Nihil blanditiis fuga sit, odio neque quaerat corporis
                        praesentium sunt sint. Dolor sit a ipsam. Ut,
                        distinctio? Et ipsum pariatur veniam, eaque odio ratione
                        alias! Consectetur repellendus numquam eaque autem odit
                        deleniti ab odio ex provident? Excepturi?
                    </p>
                </div>
                <div className="courses-cards-wrapper">
                    <div>
                        {courses &&
                            courses.map((course, index) => (
                                <div key={index}>
                                    <CourseCard courseObj={course} id={index} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
