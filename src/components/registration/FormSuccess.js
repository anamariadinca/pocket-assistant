import React from "react";
import Lottie from 'react-lottie';

import emailSentAnimation from '../../lotties/email-sent.json';

const FormSuccess = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        margin: '300',
        animationData: emailSentAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    document.body.style.backgroundColor = 'rgba(39, 176, 255, 0.12)';

    return (
        <div>
            <div style={{textAlign: 'center', fontFamily:'Trebuchet MS", Arial, Helvetica, sans-serif', marginTop: '80px'}}>
                <h1>Am primit cererea de înregistrare. Vă rugăm să vă verificați adresa de email</h1>
            </div>
            <Lottie
                options={defaultOptions}
                height={600}
                width={600}
            />
        </div>

    )
}

export default FormSuccess;