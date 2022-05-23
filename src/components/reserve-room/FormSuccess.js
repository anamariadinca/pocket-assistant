import React, {useEffect} from "react";
import Lottie from 'react-lottie';

import roomReservedAnimation from '../../lotties/room-reserved.json';

const FormSuccess = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        margin: '300',
        animationData: roomReservedAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        new Promise(res => setTimeout(res, 3000)).then(() => {
            window.location.href = "http://localhost:3000/home";
            // fetch("http://localhost:8081/invalidateJWT?token=" + window.document.cookie, {
            //     method: 'GET',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer ' + window.document.cookie
            //     }
            // }).then(response => {
            //     const status = response.status
            //     if (status === 200) {
            //         console.log("SUCCESSS")
            //         window.location.href = "http://localhost:3000/login";
            //     } else if (status === 400) {
            //         document.getElementById("submitButton").disabled = false
            //         console.log("SOMETHING WENT WRONG")
            //         response.json().then(json => {
            //             alert(json.message)
            //             console.log(json);
            //         })
            //             .catch(error => {
            //                 console.log(error)
            //                 // handle error
            //             });
            //     } else if (status === 500) {
            //         document.getElementById("submitButton").disabled = false
            //         console.log("SOMETHING WENT WRONG")
            //         response.json().then(json => {
            //             alert(json.message)
            //             console.log(json);
            //         })
            //             .catch(error => {
            //                 console.log(error)
            //                 // handle error
            //             });
            //     }
            // })
        })

    })

    document.body.style.backgroundColor = 'rgba(39, 176, 255, 0.12)';

    return (
        <div>
            <div style={{textAlign: 'center', fontFamily:'Trebuchet MS", Arial, Helvetica, sans-serif', marginTop: '80px'}}>
                <h1 className="room-h1 ">
                    Sala a fost rezervată cu succes!
                </h1>
            </div>
            <Lottie
                options={defaultOptions}
                height={600}
                width={600}
            />
        </div>

    )
}

export default FormSuccess;