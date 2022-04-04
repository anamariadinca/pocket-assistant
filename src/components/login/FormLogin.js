import React from "react";
import useForm from "./useForm";
import '../css/Form.css'

const FormLogin = () => {

    const {handleChange, values, handleSubmit}
        = useForm();

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-header">Logare</h2>
                <h3 className="form-header">Introduceți datele de logare mai jos</h3>
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
                </div>
                <div className="form-inputs">
                    <label htmlFor="password"
                           className="form-label">
                        Password:
                    </label>
                    <input
                        type="text"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <button className="form-input-btn"
                        type="submit">
                    Trimite
                </button>
                <div>
                    <span className="form-input-login">
                        Nu ai cont? Înregistrează-te <a href="http://localhost:3000/register">aici</a>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default FormLogin;