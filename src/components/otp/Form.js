import React from "react";
import '../css/Form.css'
import FormSignupOtp from "./FormSignupOtp";

const Form = () => {
    return (
        <div className="form-container">
            <div className="form-content-left">
                <img src="img/lock.png"  className="form-img" alt="name"/>
            </div>
            <FormSignupOtp/>
        </div>
    )
}

export default Form;