import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import video from '../../video-2.mp4'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => { 
        init(textRef.current, { 
            showCursor: false, 
            strings: ["dynamic", "vibrant", "sleek", "clean", "interactive"],
            backDelay: 1000,
            backSpeed: 60,
        });
     }, []);
    return (
        <div className="main" id="intro">
            <div className="overlay"></div>
            <video src={video} autoPlay loop muted />
            <div className="content">
                <div className="text-box">
                    <h1>Hello. I'm Laurel,</h1>
                    <h2>a front-end developer creating <span ref={textRef}></span> web layouts.</h2>
                </div>
            </div>
        </div>
    )};











