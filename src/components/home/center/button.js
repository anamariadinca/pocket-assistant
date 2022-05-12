import React, {useEffect} from "react";

function ReservationButton(props) {

    function goToHomepage() {
        window.location.href="http://localhost:3000/reserveRoom"
    }

    return (
        <button id={props.id} onClick={goToHomepage}>
            Rezervă o sală
        </button>
    )
}

export default ReservationButton