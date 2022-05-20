import React from "react";
import home from "../lotties/70221-circuit-background-2.json";
import Lottie from "react-lottie";

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: home,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div style={{marginTop: '11%'}}>
            <Lottie
                options={defaultOptions}
            />
        </div>
    )

}

export default Loading;