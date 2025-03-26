
import StudentCard from './StudentCard'
function StudentList(props){
    const students = [
        {
            Studentname: "Student Name : Thariga",
            major:"Major : ECE",
            year : "Year : III"
        },
        {
            Studentname: "Student Name : Shrinithi",
            major:"Major : ECE",
            year : "Year : III"
        }
    ]
    const StudentsList = students.map((student) =><Student name={student.name} major={student.major} year={student.major}/>)
    return(
        <>
          <StudentList/>
        </>
    );
}
export default StudentList