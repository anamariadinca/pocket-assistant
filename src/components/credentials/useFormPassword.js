import {useEffect, useState} from "react";

const url = 'http://localhost:8081/register/password?token=';

const useFormPassword = (validate) => {
    const [values, setValues] = useState({
        password: '',
        password2: ''
    })
    let [token] = useState('');

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        if (Object.keys(errors).length === 0) {
            fetch(url + token, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: btoa(values.password)
            }).then(response => {
                const status = response.status
                if (status === 200) {
                    console.log("SUCCESSS")
                    window.location.href = "http://localhost:3000/otp?token=" + token;
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
    };

    useEffect( () => {
        token = window.location.href.split("token=")[1];
    })

    return {handleChange, values, handleSubmit, errors};
}


export default useFormPassword;

