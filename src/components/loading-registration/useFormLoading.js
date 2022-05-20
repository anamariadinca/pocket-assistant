import {useEffect, useState} from "react";
import axios from "axios";
const url = 'http://localhost:8081/users/register/admin';

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

    useEffect(() =>{
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: values.email,
        //         phoneNumber: values.phoneNumber
        //     })
        //
        // }).then(response => {
        //     const status = response.status
        //     if (status === 200) {
        //         console.log("SUCCESSS")
        //         window.location.href = "http://localhost:3000/emailSent";
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
        //     }
        // })
    }, [])

    return {handleChange, values};
}


export default useFormLoading;

