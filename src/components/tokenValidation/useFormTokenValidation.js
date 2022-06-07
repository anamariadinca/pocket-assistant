import {useEffect, useState} from "react";

const useFormTokenValidation = () => {

    useEffect(() => {
        let token = window.location.href.split("token=")[1];

        fetch("http://localhost:8081/register/validateToken?token=" + token, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            const status = response.status
            if (status === 200) {
                window.location.href = "http://localhost:3000/credentialsValidated?token=" + token;
                console.log("SUCCESSS");
            } else {
                console.log("SOMETHING WENT WRONG")
                window.location.href = "http://localhost:3000/register";
            }
        })
    })
    return "";
}


export default useFormTokenValidation;

