import React, {useEffect} from "react";
import "./settings.css";
import ProfileSettingsForm from "./ProfileSettingsForm";

function ProfileSettings(props) {

    return (
        <div>
            <h1 id='textreserveroom' className="settings-h1">Informații despre profilul utilizatorului</h1>
            <ProfileSettingsForm role={props.role}/>
        </div>
    )
}

export default ProfileSettings