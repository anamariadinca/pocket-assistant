import React from "react";
import '../css/Form.css'
import useFormHome from "./useFormHome";
import Lottie from "react-lottie";
import home from "../../lotties/university.json";

const FormHome = () => {

    const {handleChange, values, handleSubmit}
        = useFormHome();

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

export default FormHome;