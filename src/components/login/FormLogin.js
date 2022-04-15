import React, {useState} from "react";
import useForm from "./useForm";
import '../css/Form.css'
import {AiFillEye, AiOutlineEye} from "react-icons/ai";

const FormLogin = () => {

    const {handleChange, values, handleSubmit}
        = useForm();
    const [inputType, setInputType] = useState('password');

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-header">Logare</h2>
                <h3 className="form-header">Introduceți datele de logare mai jos</h3>
                <div className="form-inputs">
                    <label htmlFor="email"
                           className="form-label">
                        Adresa de email:
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="form-input"
                        placeholder="Tastați adresa de email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
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