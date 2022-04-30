import {useEffect, useState} from "react";
import axios from "axios";

const url = 'http://localhost:8081/users/homePage';
const url2 = 'http://localhost:8081/users/register/otp?token=';

const useFormLoading = () => {
    const [values, setValues] = useState({
        otp: ''
    })

    let [token] = useState('');

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {

        e.preventDefault();
        fetch(url2 + token + "&otp=" + values.otp, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: values.otp
        }).then(response => {
            const status = response.status
            if (status === 200) {
                console.log("SUCCESSS");
                axios("http://localhost:3000/home", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        // "Authorization": "Bearer "+ response.body,
                    },
                })
            } else if (status === 400) {
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
    };

    useEffect(() => {
        // token = window.location.href.split("token=")[1];
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + document.cookie.split("=;")[0],
            },
            body: JSON.stringify({
                email: values.email,
                phoneNumber: values.phoneNumber
            })
        }).then(response => {
            const status = response.status
            if (status === 200) {
                console.log("SUCCESSS");
                alert("Got to backend")
            } else if (status === 400) {
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
    }, []);

    useEffect( () => {
        // token = window.location.href.split("token=")[1];

    })

    return {handleChange, values, handleSubmit};
}


export default useFormLoading;

