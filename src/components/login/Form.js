import React from "react";
import FormLogin from "./FormLogin";
import '../css/Form.css'

const Form = () => {
    return (
        <div className="form-container">
            <div className="form-content-left">
                <img src="img/register.png"  className="form-img" alt="name"/>
            </div>
            <FormLogin/>
        </div>
    )
}

export default Form;