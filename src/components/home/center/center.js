import React, {useEffect, useState} from 'react';
import './center.css';
import '../Form.css';
import StudentTable from "./table/student-table";
import ReservationButton from "./button";
import TeacherTable from "./table/teacher-table";

function Center(props) {

    const[counter, setCounter] = useState(0);

    useEffect(() => {

    })

    let tableYesterday;
    let tableTomorrow;
    let tableToday;

    let today = new Date();

    today.setDate(13);
    today.setMonth(4);
    let month = today.getMonth() + 1 + '';
    let monthFinal = month.length === 1 ? '0' + month : month;
    let startWeek = today.getDate() - today.getDay() + 1
    let endWeek = today.getDate() - today.getDay() + 5

    if (props.role === "student") {
        tableYesterday = <StudentTable id="schedule-yesterday" day={today.getDate() - 1 + counter + "." + monthFinal}/>
        tableToday = <StudentTable id="schedule-today" day={today.getDate() + counter + "." + monthFinal}/>
        tableTomorrow = <StudentTable id="schedule-tomorrow" day={today.getDate() + 1 + counter + "." + monthFinal}/>
    } else {
        tableYesterday = <TeacherTable id="schedule-yesterday" day={today.getDate() - 1 + counter + "." + monthFinal}/>
        tableToday = <TeacherTable id="schedule-today" day={today.getDate() + counter + "." + monthFinal}/>
        tableTomorrow = <TeacherTable id="schedule-tomorrow" day={today.getDate() + 1 + counter + "." + monthFinal}/>
    }
    return (
        <div id="centerpiece" className="centerpiece">
            <div>
                <div id='textcenterpiece'>
                    <h1>Este săptămâna {props.week}, {startWeek}.{monthFinal} - {endWeek}.{monthFinal}</h1>
                </div>
                <ArrowButton id="arrowLeft" rotate='rotate(180deg)'/>
                <ArrowButton id="arrowRight"/>
                {tableYesterday}
                {tableToday}
                {tableTomorrow}
                <ReservationButton id='reservationbutton'/>
            </div>
        </div>
    )


    function ArrowButton(props) {

        function goToHomepage() {
            let offset = 1;
            let today = new Date();

            if (props.id==="arrowLeft") {

                switch(today.getDay()+counter){
                    case 1: offset = 3; break;
                    case 2: offset = 2; break;
                }

                setCounter(counter-offset)

            } else {

                switch(today.getDay()+counter){
                    case 5: offset = 3; break;
                    case 6: offset = 2; break;
                }
                setCounter(counter+offset)
            }
        }

        let img = <img src="img/arrow.png" style={{width: '50px', height:'50px', transform: props.rotate}}/>

        return (
            <button id={props.id} onClick={goToHomepage}>
                {img}
            </button>
        )
    }
}

export default Center