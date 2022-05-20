import React, {Component, useEffect, useState} from 'react'
import './table.css'
import {returnSpecialTeacher, highlightRow} from "./table-utils";
import {getScheduleForDay} from "./dummy-data-teacher";

function TeacherTable(props) {

    const [scheduleData, setScheduleData] = useState({});

    useEffect(() => {
        console.log("Occurs ONCE, AFTER the initial render.");
        setScheduleData(getScheduleForDay(props.day));
    }, []);

    useEffect(() => {
        let tbody = document.getElementById('tbody').offsetHeight;
        if (document.getElementById('reservationbutton')) {
            document.getElementById('reservationbutton').style.marginTop = 'calc(70px + '+ tbody +'px)';
        }

        let today = new Date();
        let time = today.getHours();
        if (document.getElementById('tbody') != null) {
            let rows = document.getElementById('tbody').rows;
            for (let i = 0; i < rows.length; i++) {
                if (highlightRow(rows[i].textContent, time)) {
                    document.getElementById('tbody').rows[i].style.backgroundColor = 'rgba(14,240,206,0.41)'
                }
            }
        }
    });

    useEffect(() => {

        switch (props.id) {
            case "schedule-yesterday":
            case "schedule-tomorrow": document.getElementById(props.id).style.width = '290px';
                break;
            default: document.getElementById(props.id).style.width = '400px';
        }
        setScheduleData(getScheduleForDay(props.day))
    }, [props.day])

    function renderTableData() {
        if (scheduleData.length > 0) {
            return scheduleData.map((schedule, index) => {
                    const {hour, specialisation, group, room, subject} = schedule //destructuring
                    return returnSpecialTeacher(hour, specialisation, group, room, subject)
                }
            )
        }
    }

    function renderTableHeaderColumns() {
        let header = ["Ora", "Serie", "Grupă", "Sală", "Materie"]
        return header.map((key, index) => {
            return <th id="secondRow" key={index}>{key.toUpperCase()}</th>
        })
    }

    function renderTableHeaderDay() {
        return <th id="firstRow" key={0} colSpan="5">{props.day}</th>
    }

    let tbodyId = props.id === "schedule-today" ? 'tbody' : 'tbody-t'
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
        <div id="container">
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

export default TeacherTable //exporting a component make it reusable and this is the beauty of react