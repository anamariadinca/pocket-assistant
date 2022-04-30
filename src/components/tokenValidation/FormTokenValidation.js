import React from "react";
import '../css/Form.css'
import Lottie from "react-lottie";
import home from "../../lotties/university.json";
import useFormTokenValidation from "./useFormTokenValidation";

const FormTokenValidation = () => {

    const values = useFormTokenValidation();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        margin: '0',
        animationData: home,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={600}
                width={800}
            />
        </div>
    )
}

export default FormTokenValidation;