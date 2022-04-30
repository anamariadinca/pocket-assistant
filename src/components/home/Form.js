import React from "react";
import Toolbar from "./toolbar/toolbar";
import SideNav from "./sidenav/sidenav";
import Center from "./center/center";

const Form = (props) => {

    return (
        <div>
            <Toolbar/>
            <SideNav formUserRole={props.role}/>
            <Center/>
        </div>
    )
}

export default Form;