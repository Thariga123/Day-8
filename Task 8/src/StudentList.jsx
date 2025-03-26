import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = () => {
    // Initial student list
    const [students, setStudents] = useState([
        { id: 1, name: "Thariga Shrinithi.R", year: "Freshman", major: "Computer Science" },
        { id: 2, name: "Tejashwini.M", year: "Junior", major: "Mathematics" },
        { id: 3, name: "Luttika Jenifer.J.C", year: "Sophomore", major: "Physics" },
        { id: 4, name: "Abirami.M", year: "Unknown", major: "Commerce" }
    ]);

    // Form state for adding new students
    const [newStudent, setNewStudent] = useState({
        name: "",
        year: "",
        major: ""
    });

    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    // Add new student to the list
    const addStudent = () => {
        if (!newStudent.name || !newStudent.year || !newStudent.major) {
            alert("Please fill out all fields.");
            return;
        }

        const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;

        const studentToAdd = {
            id: newId,
            ...newStudent
        };

        setStudents([...students, studentToAdd]);
        
        // Reset form fields after adding
        setNewStudent({ name: "", year: "", major: "" });
    };

    // Remove student by ID
    const removeStudent = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
    };

    return (
        <div className="student-list-container">
            <h2>Manage Students</h2>

            {/* Form to add new students */}
            <div className="add-student-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newStudent.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="year"
                    placeholder="Year (Freshman, Sophomore, etc.)"
                    value={newStudent.year}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="major"
                    placeholder="Major"
                    value={newStudent.major}
                    onChange={handleInputChange}
                />
                <button onClick={addStudent}>Add Student</button>
            </div>

            {/* Display student cards */}
            <div className="student-cards">
                {students.length > 0 ? (
                    students.map((student) => (
                        <div key={student.id} className="student-card-wrapper">
                            <StudentCard
                                name={student.name}
                                year={student.year}
                                major={student.major}
                            />
                            <button
                                className="remove-btn"
                                onClick={() => removeStudent(student.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No students found.</p>
                )}
            </div>
        </div>
    );
};

export default StudentList;
