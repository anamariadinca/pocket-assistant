import React from "react";
import notReady from "../lotties/not-ready-yet.json";
import Lottie from "react-lottie";

const Meme = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        margin: '300',
        animationData: notReady,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={600}
                width={600}
            />
        </div>
    )
}

export default Meme;