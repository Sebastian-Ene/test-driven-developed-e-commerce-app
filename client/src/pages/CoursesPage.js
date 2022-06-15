import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
                <div className="courses-descripiton">
                    Cursurile cele mai bune te ajuta sa devii mai bun si tre sa
                    cresti mereu ca altfel ce mai faci vere daca nu cresti vezi
                    ca aia e faza baga acolo sa inveti cu cele mai bune cursuri
                    te propulseaza mult nici n-ai idee aolo vai de steaua ta
                    esti pune mana si invata
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
