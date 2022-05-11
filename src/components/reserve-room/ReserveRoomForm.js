import React, {useEffect} from "react";
import "./reserveRoom.css";
import ReservationButton from "../reserve-room/button";

function ReserveRoomForm() {
    const [room, setRoom] = React.useState('');
    const [options, setOptions] = React.useState(null);
    const [firstRenderpassed, setFirstRenderpassed] = React.useState(false);
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
        if(firstRenderpassed) {
            document.getElementById('buttoncenterpiece').style.display= 'revert'
            addTable(roomSched)
        } else {
            setFirstRenderpassed(true)
        }
    }, [room])

    return (
        <div>
            <h1 id='textreserveroom'>Selectează o sală pentru a verifica disponibilitatea</h1>

            <Dropdown
                options={options}
                // value={food}
                onChange={handleRoomChange}
            />
            <div id="myTable"/>
            <ReservationButton id='reservationbutton'/>
        </div>
    )
}


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

function prepend(value, array) {
    let newArray = array.slice();
    newArray.unshift(value);
    return newArray;
}

function addTable(data) {
    let headers = ["Ora", "Disponibilitate"];
    let myTableDiv = document.getElementById("myTable");
    myTableDiv.innerHTML = "";

    let table = document.createElement('table');
    table.id = 'scheduletable'

    let tableHeader = document.createElement('thead');
    table.appendChild(tableHeader);

    let tableBody = document.createElement('tbody');
    tableBody.id = 'tbody'
    table.appendChild(tableBody);

    let th = document.createElement('tr');
    let td1 = createTH(headers[0])
    let td2 = createTH(headers[1])
    th.appendChild(td1)
    th.appendChild(td2)
    tableHeader.appendChild(th);

    data.map((schedule, index) => {
        let tr = document.createElement('tr');
        const {hour, free} = schedule //destructuring
        let td1 = createTD(hour)
        let td2 = createTD(free)
        tr.appendChild(td1)
        tr.appendChild(td2)
        if (free === "DA") {
            tr.style.backgroundColor = 'rgba(122,222,176,0.42)'
        } else {
            tr.style.backgroundColor = 'rgba(234,81,81,0.49)'
        }
        tr.onclick= function(){
            resetTableColors()
            this.style.backgroundColor = 'rgba(39,176,255,0.25)'
        };
        tableBody.appendChild(tr);

    })
    myTableDiv.appendChild(table);

}

function createTD(text) {
    let td = document.createElement('td');
    td.innerText = text
    return td
}

function createTH(text) {
    let td = document.createElement('th');
    td.innerText = text
    return td
}

function resetTableColors() {
    let trs = document.getElementsByTagName('tr');
    for( let i = 1; i< trs.length; i++) {
        if (trs[i].cells[1].innerText === "DA") {
            trs[i].style.backgroundColor = 'rgba(122,222,176,0.42)'
        } else {
            trs[i].style.backgroundColor = 'rgba(234,81,81,0.49)'
        }
    }
}

export default ReserveRoomForm