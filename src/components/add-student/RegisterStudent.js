import React, {useEffect} from "react";
import "./add-student.css";
import RegisterStudentForm from "./RegisterStudentForm";

function RegisterStudent() {

    return (
        <div>
            <h1 id='textreserveroom' className="reg-student-h1">Adaugă un student</h1>
            <RegisterStudentForm/>
        </div>
    )
}

export default RegisterStudent