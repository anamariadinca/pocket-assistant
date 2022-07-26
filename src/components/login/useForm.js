import {useState, useEffect} from "react";
import {fetchCall} from "../utils/utils";

const authentication_url = 'http://localhost:8080/users/authenticate';
const home_redirect_url = "http://localhost:3000/home";

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
            fetch(authentication_url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: values.email,
                    password: btoa(values.password)
                })
            }).then(response =>  response.json().then(data =>
                ({status: response.status,
                    body: data})))
                .then(obj => {
                    console.log(obj)
                    const status = obj.status
                        if (status === 200) {
                            console.log("SUCCESSS")
                            localStorage.setItem('jwt', obj.body.jwt)
                            localStorage.setItem('guid', obj.body.guid)

                            window.location.href = home_redirect_url;
                        } else if (status === 400) {
                            console.log("THERE WAS AN ERROR")
                        } else if (status === 401) {
                            console.log("THERE WAS AN ERROR")
                            alert("Pereche de credențiale incorectă")
                        } else if (status === 403) {
                            console.log("THERE WAS AN ERROR")
                            alert("Utilizatorul a fost blocat ca urmare numărului mare de încercări de autentificare eșuate. \n Vă rugăm să vă confirmați identitatea!")

                        }
                });
        }
    };

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;

