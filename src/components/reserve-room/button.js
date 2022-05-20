import React, {useEffect, useReducer} from "react";

function ReservationButton() {
    const urlParams = new URLSearchParams(window.location.search);
    const[disab, setDisab] = React.useState(true);
    function goToHomepage() {
        let trs = document.getElementsByTagName('tr');
        for (let i = 1; i < trs.length; i++) {
            if (trs[i].style.backgroundColor.toString() === "rgba(39, 176, 255, 0.25)") {
                window.location.href="http://localhost:3000/roomReserved"
            }
        }
        // window.location.href="http://localhost:3000/reserveRoom?room=" + urlParams.get('room')
    }

    useEffect(() => {

    }, [])

    return (
        <button id = "buttonreserve" className="buttonreserve" onClick={goToHomepage}>
            Rezervă
        </button>
    )
}

export default ReservationButton