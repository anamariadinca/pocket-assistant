import {useState, useEffect} from "react";
import {fetchCall} from "../utils/utils";

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
            let body = JSON.stringify({
                username: values.email,
                password: btoa(values.password)
            });
            let href = "http://localhost:3000/home";

            // fetchCall(url, body, href)
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

                            window.location.href = "http://localhost:3000/home";
                        } else if (status === 400) {
                            console.log("SOMETHING WENT WRONG")
                        }
                });

                // .then(response => {
                //
                //     const status = response.status
                //     if (status === 200) {
                //         console.log("SUCCESSS")
                //         let resp;
                //         response.json().then(json => {
                //             resp = json.jwt;
                //             // window.jwt = json.jwt
                //             // window.guid = json.guid
                //             // window.document.cookie = json.jwt
                //             // window.document.guid = json.guid
                //         })
                //
                //         window.location.href = "http://localhost:3000/home";
                //     } else if (status === 400) {
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
        }
    };

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;

