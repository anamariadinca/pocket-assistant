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

    document.body.style.backgroundColor = 'rgb(40, 40, 40)';

    return (
        <div>
            <div style={{textAlign: 'center', fontSize: '24px', marginTop: '80px', color: '#fff'}}>We have received your
                request! Please check your email
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