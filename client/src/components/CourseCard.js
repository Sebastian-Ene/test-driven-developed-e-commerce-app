import React from "react";
import { Link } from "react-router-dom";
import "../style/coursecard.scss";

export default function CourseCard(props) {
    return (
        <div className="course-card">
            <div className="course-title">{props.courseObj.name}</div>
            <div className="course-short-description">
                {props.courseObj.description}
            </div>
            <div className="course-view-btn">
                <Link to={`/course/${props.courseObj.course_id}`}>
                    Vizualizeaza cursul
                </Link>
            </div>
        </div>
    );
}
