import React, {useEffect, useState} from "react";
import Toolbar from "../toolbar/toolbar/toolbar";
import '../css/Form.css'
import Center from "./center/center";

const url = 'http://localhost:8082/session?inf=';

function Form() {

    // const urlParams = new URLSearchParams(window.location.search);
    const[name, setName] = useState('');
    const[week, setWeek] = useState('');
    const[role, setRole] = useState('');

    useEffect(() => {
        let token =  localStorage.getItem('jwt');
        let authHeader = 'Bearer ' + token
        fetch(url + token, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Authorization': authHeader
            }
        }).then(response => {
            const status = response.status
            if (status === 200) {
                response.json().then(json => {
                    setName(json.name);
                    setRole(json.role);
                    setWeek(json.week);
                });
                console.log("SUCCESSS");
            } else if (status === 400) {
                console.log("SOMETHING WENT WRONG")
            } else if (status === 403) {
                console.log("SOMETHING WENT WRONG")
                window.alert("Sesiunea a expirat. Vă rugăm să vă autentificați pentru a continua.")
                window.location.href = "http://localhost:3000/login"
            }
            else if (status === 500) {
                console.log("SOMETHING WENT WRONG")
                window.alert("A avut loc o eroare internă. Ne cerem scuze.")
            }
        })
    });


    return (
        <div>
            {/*<Toolbar role={urlParams.get('role')} name={urlParams.get('name')} week={urlParams.get('week')}/>*/}
            <Toolbar role={role} name={name} week={week}/>
            {/*<Center week={urlParams.get('week')}/>*/}
            <Center role={role} name={name} week={week}/>
        </div>
    )

}

export default Form;