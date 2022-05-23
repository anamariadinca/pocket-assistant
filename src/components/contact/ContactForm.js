import React, {useEffect} from "react";
import FacultyTable from "./facultyTable";
import {prepend} from "../utils/utils";
import "./contact.css";

function ContactForm() {

    const [options, setOptions] = React.useState(null);
    const [professor, setProfessor] = React.useState('');

    useEffect(() => {
        let firstOption = {id: 1, label: 'Selectează un cadru didactic', value: ''}

        let options = [
            {label: 'Prof. Dr. Ing. Popescu Ion', value: 'fruit'},
            {label: 'Dr. Ing. Încă Cineva', value: 'vegetable'},
            {label: 'Șl. Dr. Ing. Cineva Prop', value: 'meat'},
        ]
        setOptions(prepend(firstOption, options))
    }, [])

    const handleProfessorChange = (event) => {
        document.getElementById("profInfo").innerText='CEVA';
        setProfessor(event.target.value);
    };

    return (
        <div>
            <h1 id='textreserveroom' className="contact-h1">Contact</h1>
            <FacultyTable/>
            <Dropdown
                options={options}
                // value={food}
                onChange={handleProfessorChange}
            />
            <h3 id="profInfo" className="contact-h3"></h3>
        </div>
    )
}

function Dropdown(props) {
    return (
        <div>
            <select id="professordropdown" required onChange={props.onChange}>
                {props.options != null ? props.options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                )) : ""}
            </select>
        </div>
    );
}

export default ContactForm