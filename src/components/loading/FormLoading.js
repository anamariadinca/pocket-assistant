import React from "react";
import '../css/Form.css'
import useFormLoading from "./useFormLoading";
import Lottie from "react-lottie";
import home from "../../lotties/university.json";

const FormLoading = () => {

    const {handleChange, values, handleSubmit}
        = useFormLoading();

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

export default FormLoading;