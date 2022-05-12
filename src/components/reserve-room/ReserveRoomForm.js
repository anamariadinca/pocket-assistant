import React, {useEffect} from "react";
import "./reserveRoom.css";
import "./react-datepicker.css";
import ReservationButton from "../reserve-room/button";
import DatePicker from "react-datepicker"
import {prepend, setCalendarStyle} from "./utils";
import {addTable} from "./schedTable";

function ReserveRoomForm() {
    const [room, setRoom] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState(null);
    const [firstRenderPassed, setFirstRenderPassed] = React.useState(false);
    const [startDate, setStartDate] = React.useState(new Date());
    const handleRoomChange = (event) => {
        setRoom(event.target.value);
    };

    useEffect(() => {
        let firstOption = {id: 1, label: 'Selectează sala', value: '', capacity: ''}

        let options = [
            {label: 'B201', value: 'fruit', capacity: '50'},
            {label: 'A101', value: 'vegetable', capacity: '200'},
            {label: 'B04', value: 'meat', capacity: '30'},
        ]
        setOptions(prepend(firstOption, options))
    }, [])

    useEffect(() => {
        let roomSched;
        if (room === "fruit") {
            roomSched = [
                {hour: '08-09', free: 'NU'},
                {hour: '09-10', free: 'NU'},
                {hour: '10-11', free: 'NU'},
                {hour: '11-12', free: 'NU'},
                {hour: '12-13', free: 'NU'},
                {hour: '13-14', free: 'NU'},
                {hour: '14-15', free: 'NU'},
                {hour: '15-16', free: 'NU'},
                {hour: '16-17', free: 'NU'},
                {hour: '17-18', free: 'NU'},
                {hour: '18-19', free: 'NU'},
                {hour: '19-20', free: 'NU'},
                {hour: '20-21', free: 'NU'}
            ]
        } else {
            roomSched = [
                {hour: '08-09', free: 'DA'},
                {hour: '09-10', free: 'DA'},
                {hour: '10-11', free: 'DA'},
                {hour: '11-12', free: 'DA'},
                {hour: '12-13', free: 'DA'},
                {hour: '13-14', free: 'DA'},
                {hour: '14-15', free: 'DA'},
                {hour: '15-16', free: 'DA'},
                {hour: '16-17', free: 'DA'},
                {hour: '17-18', free: 'DA'},
                {hour: '18-19', free: 'DA'},
                {hour: '19-20', free: 'DA'},
                {hour: '20-21', free: 'DA'}
            ]
        }
        if (firstRenderPassed) {
            document.getElementById('buttonreserve').style.display = 'revert'
            addTable(roomSched)
        } else {
            setFirstRenderPassed(true)
            setCalendarStyle();
        }
    }, [room])

    return (
        <div>
            <h1 id='textreserveroom'>Selectează o sală pentru a verifica disponibilitatea</h1>
            <div style={{marginTop: '1%'}}>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                <Dropdown
                    options={options}
                    // value={food}
                    onChange={handleRoomChange}
                />
            </div>

            <div id="myTable"/>
            <ReservationButton id='buttonreserve'/>
        </div>
    )
}

//gif cu sala si interval - excited
function Dropdown(props) {
    return (
        <div>
            <select id="scheddropdown" required onChange={props.onChange}>
                {props.options != null ? props.options.map((option) => (
                    <option value={option.value}>{option.label} - {option.capacity} de locuri</option>
                )) : ""}
            </select>
        </div>
    );
}


export default ReserveRoomForm