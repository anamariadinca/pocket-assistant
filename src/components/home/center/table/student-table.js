import React, {Component, useEffect, useState} from 'react'
import './table.css'
import {returnSpecialStudent, highlightRow, returnSpecialTeacher} from "./table-utils";
import {getScheduleForDay} from "./dummy-data-teacher";

function StudentTable(props) {

    const [scheduleData, setScheduleData] = useState({});

    useEffect(() => {
        console.log("Occurs ONCE, AFTER the initial render.");
        setScheduleData(getScheduleForDay(props.day))
    }, []);

    useEffect(() => {
        let tbody = document.getElementById('tbody').offsetHeight;
        if (document.getElementById('reservationbutton')) {
            document.getElementById('reservationbutton').style.marginTop = 'calc(70px + '+ tbody +'px)';
        }

        switch (props.id) {
            case "schedule-yesterday":
            case "schedule-tomorrow": document.getElementById(props.id).style.width = '290px';
                break;
            default: document.getElementById(props.id).style.width = '400px';
        }
        let today = new Date();
        let time = today.getHours();
        if (document.getElementById('tbody') != null) {
            let rows = document.getElementById('tbody').rows;
            for (let i = 0; i<rows.length; i++) {
                if (highlightRow(rows[i].textContent, time)) {
                    document.getElementById('tbody').rows[i].style.backgroundColor='rgba(14,86,240,0.51)'
                }
            }
        }
        setScheduleData(getScheduleForDay(props.day))
    })

    function renderTableData() {
        if (scheduleData.length > 0) {
            return scheduleData.map((schedule, index) => {
                    const {hour, room, subject} = schedule //destructuring
                return returnSpecialStudent(hour, room, subject)

                }
            )
        }
    }

    function renderTableHeaderColumns() {
        let header = ["Ora", "Sală", "Materie"]
        return header.map((key, index) => {
            return <th id="secondRow" key={index}>{key.toUpperCase()}</th>
        })
    }

    function renderTableHeaderDay() {
        return <th id="firstRow" key={0} colSpan="3">{props.day}</th>
    }
    let tbodyId = props.id === "schedule-today" ? 'tbody' : 'tbody-t'
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
        <div>
            <table id={props.id}>
                <tbody id={tbodyId}>
                <tr>{renderTableHeaderDay()}</tr>
                <tr>{renderTableHeaderColumns()}</tr>
                {renderTableData()}
                </tbody>
            </table>
        </div>
    )

}

export default StudentTable //exporting a component make it reusable and this is the beauty of react