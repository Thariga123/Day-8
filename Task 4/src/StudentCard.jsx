import React from "react";
function StudentCard(props){
    return(
    <div className="one">
        <h4 className="One">{props.name}</h4>
        <h4 className="One">{props.major}</h4>
        <h4 className="One">{props.year}</h4>
    </div>
    
    )
}

export default StudentCard