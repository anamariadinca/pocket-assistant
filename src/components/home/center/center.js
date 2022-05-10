import React, {useEffect} from 'react';
import './center.css';
import '../Form.css';
import Table from "./table";
import ReservationButton from "./button";

function Center(props) {

    return (
        <div id="centerpiece" className="centerpiece">
            <div>
                <div id='textcenterpiece'>
                    <h1>Este săptămâna {props.week}</h1>
                </div>
                <Table/>
                <ReservationButton id='reservationbutton'/>
            </div>
        </div>
    )
}

export default Center