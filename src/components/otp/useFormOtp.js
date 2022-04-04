import {useEffect, useState} from "react";
import axios from "axios";

const url = 'http://localhost:8081/users/register/send_otp?token=';
const url2 = 'http://localhost:8081/users/register/otp?token=';

const useFormOtp = () => {
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
                response.json().then(json => {
                    console.log(json);
                    document.cookie = json.token;
                    console.log(document.cookie);
                    console.log("SUCCESSS");
                    window.location.href = "http://localhost:3000/home";
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
        token = window.location.href.split("token=")[1];
        fetch(url + token, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: values.email,
                phoneNumber: values.phoneNumber
            })
        }).then(response => {
            const status = response.status
            if (status === 200) {
                console.log("SUCCESSS");
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
        token = window.location.href.split("token=")[1];
    })

    return {handleChange, values, handleSubmit};
}


export default useFormOtp;

