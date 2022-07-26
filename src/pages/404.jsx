import React, {useEffect} from "react";
import Lottie from 'react-lottie';

import animation404 from '../lotties/error-404';

const NotFoundPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        margin: '300',
        animationData: animation404,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        new Promise(res => setTimeout(res, 3000)).then(() => {
            window.location.href = "http://localhost:3000/home";
        })

    })
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

export default NotFoundPage;