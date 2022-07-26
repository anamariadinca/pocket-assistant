import React, {useState} from "react";
import useForm from "./useForm";
import {validateInfo} from "../utils/utils";
import '../css/Form.css'
import './add-student.css'

const RegisterStudentForm = () => {
    const {handleChange, values, handleSubmit, errors}
        = useForm(validateInfo);

    return (
        <div>
            <form onSubmit={handleSubmit} id = "regStudent">
                <div className="form-inputs-student">
                    <label htmlFor="surname"
                           className="form-label-student">
                        Nume
                    </label>
                    <input
                        type="text"
                        name="surname"
                        className="form-input-student"
                        placeholder="Tastați numele"
                        value={values.surname}
                        onChange={handleChange}
                    />
                    {errors.surname && <p>{errors.surname}</p>}
                </div>
                <div className="form-inputs-student">
                    <label htmlFor="givenName"
                           className="form-label-student">
                        Prenume
                    </label>
                    <input
                        type="text"
                        name="givenName"
                        className="form-input-student"
                        placeholder="Tastați prenumele"
                        value={values.givenName}
                        onChange={handleChange}
                    />
                    {errors.givenName && <p>{errors.givenName}</p>}
                </div>
                <div className="form-inputs-student">
                    <label htmlFor="email"
                           className="form-label-student">
                        Adresa de email
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="form-input-student"
                        placeholder="Tastați adresa de email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs-student">
                    <label htmlFor="phoneNumber"
                           className="form-label-student">
                        Număr de telefon
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        className="form-input-student"
                        placeholder="Tastați numărul de telefon"
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>
                <div>
                    <button id = "submitButton"
                            className="button-reg-student"
                            type="submit">
                        Trimite
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterStudentForm;