import React from "react";
import "./StudentCard.css";

const StudentCard = ({ name, year, major }) => {
    
    const yearClass = year ? `year-${year.toLowerCase()}` : "year-unknown";

    return (
        <div className={`student-card ${yearClass}`}>
            <h4 className="student-name">{name}</h4>
            <h4 className="student-major">{major}</h4>
            <h4 className="student-year">{year}</h4>
        </div>
    );
};

export default StudentCard;
