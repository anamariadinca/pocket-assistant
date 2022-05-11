import React from "react";
import '../css/Form.css'
import Toolbar from "../toolbar/toolbar/toolbar";
import ReserveRoomForm from "./ReserveRoomForm";

const Form = () => {

    const urlParams = new URLSearchParams(window.location.search);
    return (
        <div>
            {/*<Toolbar role={urlParams.get('role')} name={urlParams.get('name')} week={urlParams.get('week')}/>*/}
            <Toolbar role="teacher" name="Ana-Maria Dincă" week="10"/>
            {/*<Center week={urlParams.get('week')}/>*/}
            <ReserveRoomForm role="teacher" name="Ana-Maria Dincă" week="10"/>
        </div>
    )
}

export default Form;