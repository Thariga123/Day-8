import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = () => {
    
    const students = [
        { id: 1, name: "Thariga", year: "Freshman", major: "Computer Science" },
        { id: 2, name: "Tejashwini", year: "Junior", major: "Mathematics" },
        { id: 3, name: "Deepika", year: "Sophomore", major: "Physics" },
        { id: 4, name: "Luttika", year: "Senior", major: "History" },
        { id: 5, name: "Tharunika", year: "Unknown", major: "Biology" }
    ];

 
    const [searchTerm, setSearchTerm] = useState("");

   
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

   
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="student-list-container">
            <h2>Search Students</h2>
            
            
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />

            
            <div className="student-cards">
                {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                        <StudentCard
                            key={student.id}
                            name={student.name}
                            year={student.year}
                            major={student.major}
                        />
                    ))
                ) : (
                    <p className="no-results">No students found.</p>
                )}
            </div>
        </div>
    );
};

export default StudentList;
