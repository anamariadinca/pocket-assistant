import React, {Component, useEffect} from 'react'
import './table.css'

function returnSpecial(hour, subject) {
    if (subject.search('/') >= 0) {
        let s1 = subject.split("/")[0];
        let s2 = subject.split("/")[1];

        return <tr key={hour}>
            <td>{hour}</td>
            <td>
                <div className="main">
                    <div className="text">{s1}</div>
                    <div className="percentage">
                        <div>
                            {s2}
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
            </td>
        </tr>
    } else {
        return <tr key={hour}>
            <td>{hour}</td>
            <td>{subject}</td>
        </tr>
    }

}

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            sched: [
                {hour: '08-09', subject: ''},
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
            ]
        }
    }

    renderTableData() {

        let today = new Date();
        let time = today.getHours();

        return this.state.sched.map((schedule, index) => {
                const {hour, subject} = schedule //destructuring
                if (highlightRow(hour, time)) {
                    return (
                        <tr key={hour}>
                            <td style={{backgroundColor: '#f00e0e'}}>{hour}</td>
                            <td style={{backgroundColor: '#f00e0e'}}>{subject}</td>
                        </tr>
                    )
                }
                return (
                    returnSpecial(hour, subject)
                )
                let me;

            }
        )
    }

    renderTableHeader() {
        let header = Object.keys(this.state.sched[0])
        return header.map((key, index) => {
            return <th id="firstRow" key={index}>{key.toUpperCase()}</th>
        })
    }

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
                <table id='schedule'>
                    <tbody id = 'tbody'>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}


function highlightRow(interval, hour) {
    let h1 = interval.substring(0, 2);
    return parseInt(h1) === parseInt(hour);
}

export default Table //exporting a component make it reusable and this is the beauty of react