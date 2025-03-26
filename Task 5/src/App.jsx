import StudentList from './StudentList'

import StudentCard from './StudentCard';

function App() {
  return (
    <>
  <StudentCard name= "Student Name : Thariga"  major="Major : ECE" year="Year : III"/>
  <hr className='Hr'></hr>
  <StudentCard name= "Student Name : Shrinithi"  major="Major : ECE" year="Year : III"/>
    </>
)
}

export default App