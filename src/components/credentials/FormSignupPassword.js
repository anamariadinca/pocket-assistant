import React from "react";
import '../css/Form.css'
import useFormPassword from "./useFormPassword";
import validate from "./validateInfo";

const FormSignupPassword = () => {

    const {handleChange, values, handleSubmit, errors}
        = useFormPassword(validate);

    return (
        <div className="form-content">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-header-black">Introduceți parola</h2>
                <div className="form-inputs">
                    <label htmlFor="password"
                           className="form-label">
                        Parola:
                    </label>
                    <input
                        type="text"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password"
                           className="form-label">
                        Phone number:
                    </label>
                    <input
                        type="text"
                        name="password2"
                        className="form-input"
                        placeholder="Re-enter your password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn"
                        type="submit">
                    Următorul
                </button>
            </form>
        </div>
    )
}

export default FormSignupPassword;