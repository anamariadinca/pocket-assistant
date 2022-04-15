import React, {useState} from "react";
import FormSignupPassword from "./FormSignupPassword";
import '../css/Form.css'
import FormSignupOtp from "../otp/FormSignupOtp";
import FormSignup from "../registration/FormSignup";

const Form = () => {

    return (
        <div className="form-container">
            <div className="form-content-left">
                <img src="img/lock.png" className="form-img" alt="name"/>
            </div>
            <FormSignupPassword/>
        </div>
    )
}

export default Form;