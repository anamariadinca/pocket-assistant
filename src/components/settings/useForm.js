import {useState, useEffect} from "react";
import {makeButtonPending, resetButtonStyle} from "../utils/utils"

const url = 'http://localhost:8081/profile';

const useForm = (validate) => {
    const [values, setValues] = useState({
        email: '',
        phoneNumber: '',
        name: '',
        group: '',
        year: ''
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
            // makeButtonPending()
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' +  localStorage.getItem('jwt')
                },
                body: JSON.stringify({
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    name: values.name,
                    year: values.year,
                    group: values.group
                })
            }).then(response => {
                const status = response.status
                if (status === 200) {
                    console.log("SUCCESSS")
                    window.location.href = "http://localhost:3000/settingsUpdated";
                } else if (status === 400) {
                    resetButtonStyle()
                    console.log("SOMETHING WENT WRONG")
                }
            })
        }

    };

    useEffect(() => {
        fetch(url + "?guid=" + localStorage.getItem('guid'), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  localStorage.getItem('jwt')
            }
        }).then(response =>  response.json().then(data =>
            ({status: response.status,
                body: data})))
            .then(obj => {
                console.log(obj)
                const status = obj.status
                if (status === 200) {
                    console.log("SUCCESSS")
                    setValues({
                        name: obj.body.name,
                        group: obj.body.group,
                        year: obj.body.year,
                        phoneNumber: obj.body.phoneNumber,
                        email: obj.body.email
                    })
                } else if (status === 400) {
                    console.log("SOMETHING WENT WRONG")
                }
            });
    }, []);

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;

