import React, {useEffect} from "react";
import Toolbar from "../toolbar/toolbar/toolbar";
import Center from "./center/center";

const Form = () => {

    const urlParams = new URLSearchParams(window.location.search);

    return (
        <div>
            {/*<Toolbar role={urlParams.get('role')} name={urlParams.get('name')} week={urlParams.get('week')}/>*/}
            <Toolbar role="teacher" name="Ana-Maria Dincă" week="10"/>
            {/*<Center week={urlParams.get('week')}/>*/}
            <Center role="teacher" name="Ana-Maria Dincă" week="10"/>
        </div>
    )
}

export default Form;