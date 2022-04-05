import React, {useState} from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import '../css/Form.css'

const FormSignup = () => {
    const {handleChange, values, handleSubmit, errors}
        = useForm(validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-header">Înregistrare</h2>
                <h3 className="form-header">Introduceți datele de înregistrare mai jos</h3>
                <div className="form-inputs">
                    <label htmlFor="email"
                           className="form-label">
                        Email address:
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email address"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="phoneNumber"
                           className="form-label">
                        Phone number:
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        className="form-input"
                        placeholder="Enter your phone number"
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>
                <button id = "submitButton" className="form-input-btn"
                        type="submit">
                    Trimite
                </button>
                <div>
                    <span className="form-input-login">
                        Ai deja cont? Loghează-te <a href="http://localhost:3000/login">aici</a>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default FormSignup;