import React, {useEffect} from "react";

function ReservationButton() {

    function goToHomepage() {
        window.location.href="http://localhost:3000/reserveRoom"
    }

    return (
        <button id = "buttoncenterpiece" onClick={goToHomepage}>
            Rezervă o sală
        </button>
    )
}

export default ReservationButton