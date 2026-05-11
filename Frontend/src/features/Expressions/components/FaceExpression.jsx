import { useEffect, useRef, useState } from "react";
import {init, detect} from "../utils/util";

export default function FaceExpression() {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    let streamRef = useRef(null);

    const [ expression, setExpression ] = useState("Detecting...");
    useEffect(() => {
        

        init({videoRef, landmarkerRef, streamRef, setExpression});

        return () => {
            
            const currentLandmarker = landmarkerRef.current;
            const currentVideo = videoRef.current;

            if (currentLandmarker) {
                currentLandmarker.close();
            }

            if (currentVideo?.srcObject) {
                currentVideo.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <video
                ref={videoRef}
                style={{ width: "400px", borderRadius: "12px" }}
                playsInline
            />
            <h2>{expression}</h2>
            <button onClick={()=>{detect({ landmarkerRef, videoRef, setExpression })}} >Detect expression</button>
        </div>
    );
}