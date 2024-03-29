import React, {useEffect} from "react";
import Lottie from 'react-lottie';
import './add-student.css';

import roomReservedAnimation from '../../lotties/room-reserved.json';

const FormSuccess = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        margin: '300',
        animationData: roomReservedAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        new Promise(res => setTimeout(res, 3000)).then(() => {
            window.location.href = "http://localhost:3000/registerStudent";
        })

    })

    document.body.style.backgroundColor = 'rgba(39, 176, 255, 0.12)';

    return (
        <div>
            <div style={{textAlign: 'center', fontFamily:'Trebuchet MS", Arial, Helvetica, sans-serif', marginTop: '80px'}}>
                <h1 className="reg-student-h1">
                    Studentul a fost înregistrat cu succes!
                </h1>
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