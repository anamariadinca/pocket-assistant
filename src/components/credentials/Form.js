import React, {useState} from "react";
import FormSignupPassword from "./FormSignupPassword";
import '../css/Form.css'
import FormSignupOtp from "../otp/FormSignupOtp";
import FormSignup from "../registration/FormSignup";

const Form = () => {

    return (
        <div className="form-container">
            <div className="form-content-left"/>
            <FormSignupPassword/>
        </div>
    )
}

export default Form;