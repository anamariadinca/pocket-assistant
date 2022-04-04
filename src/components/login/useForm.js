import {useState, useEffect} from "react";

const url = 'http://localhost:8081/users/authenticate';

const useForm = () => {
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
        if (Object.keys(errors).length === 0) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: values.email,
                    password: btoa(values.password)
                })
            }).then(response => {

                const status = response.status
                if (status === 200) {
                    console.log("SUCCESSS")
                    window.location.href = "http://localhost:3000/home";
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

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;

