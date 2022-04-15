import React, {useState} from "react";
import '../css/Form.css'
import useFormPassword from "./useFormPassword";
import validate from "./validateInfo";
import {AiOutlineEye, AiFillEye} from 'react-icons/ai';

const FormSignupPassword = () => {

    const {handleChange, values, handleSubmit, errors} = useFormPassword(validate);
    const [inputType, setInputType] = useState('password');

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-header">Introduceți parola</h2>
                <div className="form-inputs">
                    <div className="label-eye-wrapper">
                        <label htmlFor="password-input" className="form-label">Parola:</label>
                        {inputType === "password"
                            ?
                            <AiOutlineEye onClick={() => setInputType('text')} color="white"/>
                            :
                            <AiFillEye onClick={() => setInputType('password')} color="white"/>
                        }
                    </div>
                    <input
                        type={inputType}
                        name="password"
                        className="form-input"
                        placeholder="Tastați parola"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password"
                           className="form-label">
                        Confirmați parola:
                    </label>
                    <input
                        type={inputType}
                        name="password2"
                        className="form-input"
                        placeholder="Tastați parola"
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