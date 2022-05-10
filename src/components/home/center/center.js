import React, {useEffect} from 'react';
import './center.css';
import '../Form.css';
import Table from "./table";
import ReservationButton from "./button";

function Center(props) {
    let position;

    useEffect(() => {
        let box = document.querySelector('.centerpiece');
        let text = document.querySelector('.textcenterpiece');
        if (box != null && text != null) {
            let divWidth = box.offsetWidth;
            let textWidth = text.offsetWidth;
            position = (divWidth - textWidth) * 0.5 + 'px';
        }
    })

    return (
        <div id="centerpiece" className="centerpiece">
            <div>
                <h1 id="textcenterpiece">Este săptămâna {props.week}</h1>
                <Table/>
                <ReservationButton/>
            </div>
        </div>
    )
}

export default Center