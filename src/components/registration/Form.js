import React from "react";
import FormSignup from "./FormSignup";
import '../css/Form.css'

const Form = () => {
    return (
        <div className="form-container">
            <div className="form-content-left">
                <img src="img/register.png"  className="form-img" alt="name"/>
            </div>
            <FormSignup/>
        </div>
    )
}

export default Form;