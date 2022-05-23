import React, {useState} from "react";
import useForm from "./useForm";
import {validateInfo} from "../utils/utils";
import '../css/Form.css'
import './settings.css'

function ProfileSettingsForm(props) {
    const {handleChange, values, handleSubmit, errors}
        = useForm(validateInfo);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-inputs-settings">
                    <label htmlFor="name"
                           className="form-label-settings">
                        Nume
                    </label>
                    <input
                        type="text"
                        name="surname"
                        readonly="readonly"
                        className="form-input-settings"
                        value={values.name}
                    />
                </div>
                {props.role === "student" ?
                    <div className="form-inputs-settings">
                        <label htmlFor="group"
                               className="form-label-settings">
                            Grupă
                        </label>
                        <input
                            type="text"
                            name="group"
                            className="form-input-settings"
                            value={values.group}
                        />
                    </div>
                    : ""
                }
                <div className="form-inputs-settings">
                    <label htmlFor="email"
                           className="form-label-settings">
                        Adresa de email
                    </label>
                    <input
                        type="text"
                        name="email"
                        readonly="readonly"
                        className="form-input-settings"
                        value={values.email}
                    />
                </div>
                <div className="form-inputs-settings">
                    <label htmlFor="phoneNumber"
                           className="form-label-settings">
                        Număr de telefon
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        className="form-input-settings"
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>
                <div>
                    <button id = "submitButton"
                            className="button-settings"
                            type="submit">
                        Salvează modificări
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProfileSettingsForm;