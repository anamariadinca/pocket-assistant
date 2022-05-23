import {useState, useEffect} from "react";
import {makeButtonPending, resetButtonStyle} from "../utils/utils"

const url = 'http://localhost:8081/users/register/student';

const useForm = (validate) => {
    const [values, setValues] = useState({
        email: '',
        phoneNumber: '',
        surname: '',
        givenName: ''
    })

    const [errors, setErrors] = useState("");

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {

        e.preventDefault();
        let errors = validate(values);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            makeButtonPending()
            // window.location.href="http://localhost:3000/studentRegistered"
                fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' +  localStorage.getItem('jwt')
                },
                body: JSON.stringify({
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    name: values.surname + " " + values.givenName,
                    guid: window.document.guid
                })
            }).then(response => {
                const status = response.status
                if (status === 200) {
                    console.log("SUCCESSS")
                    window.location.href = "http://localhost:3000/studentRegistered";
                } else if (status === 400) {
                    resetButtonStyle()
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

