import {useState, useEffect} from "react";
import {useRef} from 'react';

const url = 'http://localhost:8081/users/register/admin';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const useForm = (validate) => {
    const [values, setValues] = useState({
        email: '',
        phoneNumber: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {

        e.preventDefault();

        setErrors(validate(values));
        if (Object.keys(errors).length === 0) {
            fetch(url, {
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
                    console.log("SUCCESSS")
                    window.location.href = "http://localhost:3000/emailSent";
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
        }
        // await sleep(5000)

    };

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;

