import React from 'react';
import './center.css';
import '../Form.css';
import StudentTable from "./table/student-table";
import ReservationButton from "./button";
import TeacherTable from "./table/teacher-table";

function Center(props) {
    let table;

    if (props.role==="student") {
        table = <StudentTable/>
    } else {
        table = <TeacherTable/>
    }

    let today = new Date();
    let month = today.getMonth();
    let startWeek = today.getDate() - today.getDay() + 1
    let endWeek = today.getDate() - today.getDay() + 5

    return (
        <div id="centerpiece" className="centerpiece">
            <div>
                <div id='textcenterpiece'>
                    <h1>Este săptămâna {props.week}, <br/> {startWeek}.{month} - {endWeek}.{month}</h1>
                </div>
                {table}
                <ReservationButton id='reservationbutton'/>
            </div>
        </div>
    )
}

export default Center