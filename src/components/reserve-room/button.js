import React, {useEffect} from "react";

function ReservationButton() {
    const urlParams = new URLSearchParams(window.location.search);

    function goToHomepage() {
        window.location.href="http://localhost:3000/reserveRoom"
        // window.location.href="http://localhost:3000/reserveRoom?room=" + urlParams.get('room')
    }

    return (
        <button id = "buttoncenterpiece" className="buttoncenterpiece" onClick={goToHomepage}>
            Rezervă
        </button>
    )
}

export default ReservationButton