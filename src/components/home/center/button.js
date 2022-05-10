import React, {useEffect} from "react";

function ReservationButton() {

    useEffect(() => {
        let tbody = document.getElementById('tbody').offsetHeight + 75;
        if(document.getElementById('buttoncenterpiece')) {
            document.getElementById('buttoncenterpiece').style.marginTop = tbody+ 'px';
            document.getElementById('buttoncenterpiece').style.marginBottom = '40px';
            let tbody2 = tbody + 75;

            // document.getElementById('homePage').style.height = 'calc(100% + ' + tbody2 +'px)';
            // let window = document.getElementById('buttoncenterpiece').offsetHeight + 100;

        }
    })

    return (
        <button id = "buttoncenterpiece"
                type="submit">
            Trimite
        </button>
    )
}

export default ReservationButton