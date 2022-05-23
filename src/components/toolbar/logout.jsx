import React, {useEffect} from "react";
import Lottie from 'react-lottie';

import notReady from "../../lotties/not-ready-yet.json";

function LogoutPage() {

    useEffect(() => {
        new Promise(res => setTimeout(res, 2000)).then(() => {
            fetch("http://localhost:8081/invalidateJWT?token=" + localStorage.getItem('jwt'), {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' +  localStorage.getItem('jwt')
                }
            }).then(response => {
                const status = response.status
                if (status === 200) {
                    console.log("SUCCESSS")
                    window.location.href = "http://localhost:3000/login";
                } else if (status === 400) {
                    document.getElementById("submitButton").disabled = false
                    console.log("SOMETHING WENT WRONG")
                    response.json().then(json => {
                        alert(json.message)
                        console.log(json);
                    })
                        .catch(error => {
                            console.log(error)
                            // handle error
                        });
                } else if (status === 500) {
                    document.getElementById("submitButton").disabled = false
                    console.log("SOMETHING WENT WRONG")
                    response.json().then(json => {
                        alert(json.message)
                        console.log(json);
                    })
                        .catch(error => {
                            console.log(error)
                            // handle error
                        });
                }
            })
        })

    })


    const defaultOptions = {
        loop: true,
        autoplay: true,
        margin: '300',
        animationData: notReady,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <div style={{
                textAlign: 'center',
                fontFamily: 'Trebuchet MS", Arial, Helvetica, sans-serif',
                marginTop: '80px'
            }}>
                <h1></h1>
            </div>
            <Lottie
                options={defaultOptions}
                height={600}
                width={600}
            />
        </div>
    )
}

export default LogoutPage;