import React from "react";

function checkCellContent(subject) {
    return subject != null && subject.length > 0;
}

function formatSubjectCell(subject) {
    if (checkCellContent(subject) && subject.search('/') >= 0) {
        let s1 = subject.split("/")[0];
        let s2 = subject.split("/")[1];
        return <td style={{padding :'3px'}}>
            <div className="main">
                <div className="text">{s1}</div>
                <div className="percentage">
                    <div>
                        {s2}
                    </div>
                    <div className="line"/>
                </div>
            </div>
        </td>
    } else {
        return <td>{subject}</td>
    }
}

function returnSpecialTeacher(hour, specialisation, group, room, subject) {
    return (
        <tr key={hour}>
            <td>{hour}</td>
            {formatSubjectCell(specialisation)}
            <td>{group}</td>
            <td>{room}</td>
            {formatSubjectCell(subject)}
        </tr>)
}

function returnSpecialStudent(hour, room, subject) {

    return (
        <tr key={hour}>
            <td>{hour}</td>
            <td>{room}</td>
            {formatSubjectCell(subject)}
        </tr>)
}

function highlightRow(interval, hour) {
    let h1 = interval.substring(0, 2);
    return parseInt(h1) === parseInt(hour);
}

export {returnSpecialTeacher, highlightRow, returnSpecialStudent}