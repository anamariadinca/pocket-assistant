import React from "react";
import '../css/Form.css'
import useFormOtp from "./useFormOtp";

const FormSignupOtp = () => {

    const {handleChange, values, handleSubmit}
        = useFormOtp();

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-header">Introduceți codul primit prin SMS</h2>
                <div className="form-inputs">
                    <label htmlFor="otp"
                           className="form-label">

                    </label>
                    <input
                        type="text"
                        name="otp"
                        className="form-input"
                        placeholder="Tastați codul primit prin SMS"
                        value={values.otp}
                        onChange={handleChange}
                    />
                </div>
                <button className="form-input-btn"
                        type="submit">
                    Trimite
                </button>
            </form>
        </div>
    )
}

export default FormSignupOtp;