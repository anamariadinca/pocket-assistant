import React, {Component, useEffect, useState} from 'react'
import './table.css'
import {returnSpecialStudent, highlightRow, returnSpecialTeacher} from "./table-utils";

function StudentTable() {

    const [scheduleData, setScheduleData] = useState({});

    useEffect(() => {
        console.log(
            "Occurs ONCE, AFTER the initial render."
        );
        setScheduleData([
            {hour: '08-09', grupa: ''},
            {hour: '09-10', subject: ''},
            {hour: '10-11', subject: ''},
            {hour: '11-12', subject: 'SS/ASC'},
            {hour: '12-13', subject: 'SS/ASC'},
            {hour: '13-14', subject: 'MC'},
            {hour: '14-15', subject: 'MC'},
            {hour: '15-16', subject: 'SS l'},
            {hour: '16-17', subject: 'SS l'},
            {hour: '17-18', subject: 'SS l'},
            {hour: '18-19', subject: ''},
            {hour: '19-20', subject: ''},
            {hour: '20-21', subject: ''}
        ])
    }, []);

    useEffect(() => {
        let tbody = document.getElementById('tbody').offsetHeight + 75;
        if (document.getElementById('buttoncenterpiece')) {
            document.getElementById('buttoncenterpiece').style.marginTop = tbody + 'px';
            document.getElementById('buttoncenterpiece').style.marginBottom = '40px';
            let tbody2 = tbody + 75;
        }


        document.getElementById('schedule').style.width = '300px';
        document.getElementById('schedule').style.marginLeft = 'calc((100% - 300px)/2)';
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

    function renderTableHeader() {
        let header = ["Ora", "Sală", "Materie"]
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

export default StudentTable //exporting a component make it reusable and this is the beauty of react