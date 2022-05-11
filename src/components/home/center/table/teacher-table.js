import React, {Component, useEffect, useState} from 'react'
import './table.css'
import {returnSpecialTeacher, highlightRow} from "./table-utils";

function TeacherTable() {

    const [scheduleData, setScheduleData] = useState({});

    useEffect(() => {
        console.log(
            "Occurs ONCE, AFTER the initial render."
        );
        setScheduleData([
            {hour: '08-09', specialisation: '', group: '', room: '', subject: ''},
            {hour: '09-10', specialisation:'', group:'', room:'', subject: ''},
            {hour: '10-11', specialisation: '', group: '', room: '', subject: ''},
            {hour: '11-12', specialisation: 'A/B', group: '412A', room: 'A101', subject: 'SS/ASC'},
            {hour: '12-13', specialisation: 'A/B', group: '412A', room: 'A101', subject: 'SS/ASC'},
            {hour: '13-14', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '14-15', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '15-16', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '16-17', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '17-18', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '18-19', specialisation: '', group: '', room: '', subject: ''},
            {hour: '19-20', specialisation: '', group: '', room: '', subject: ''},
            {hour: '20-21', specialisation: '', group: '', room: '', subject: ''}
        ])
    }, []);

    useEffect(() => {
        let tbody = document.getElementById('tbody').offsetHeight + 75;
        if (document.getElementById('buttoncenterpiece')) {
            document.getElementById('buttoncenterpiece').style.marginTop = tbody + 'px';
            document.getElementById('buttoncenterpiece').style.marginBottom = '40px';
            let tbody2 = tbody + 75;
        }


        document.getElementById('schedule').style.width = '400px';
        document.getElementById('schedule').style.marginLeft = 'calc((100% - 400px)/2)';
        let today = new Date();
        let time = today.getHours();
        if (document.getElementById('tbody') != null) {
            let rows = document.getElementById('tbody').rows;
            for (let i = 0; i<rows.length; i++) {
                if (highlightRow(rows[i].textContent, time)) {
                    document.getElementById('tbody').rows[i].style.backgroundColor='rgba(14,240,206,0.41)'
                }
            }
        }
    })

    function renderTableData() {
        if (scheduleData.length > 0) {
            return scheduleData.map((schedule, index) => {
                    const {hour, specialisation, group, room, subject} = schedule //destructuring
                    return returnSpecialTeacher(hour, specialisation, group, room, subject)
                }
            )
        }
    }

    function renderTableHeader() {
        let header = ["Ora", "Serie", "Grupă", "Sală", "Materie"]
        return header.map((key, index) => {
            return <th id="firstRow" key={index}>{key.toUpperCase()}</th>
        })
    }

    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
        <div>
            <table id='schedule'>
                <tbody id='tbody'>
                <tr>{renderTableHeader()}</tr>
                {renderTableData()}
                </tbody>
            </table>
        </div>
    )

}

export default TeacherTable //exporting a component make it reusable and this is the beauty of react