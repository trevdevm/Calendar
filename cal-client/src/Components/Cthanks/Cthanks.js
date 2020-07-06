import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import "./Cthanks.css";

const Cthanks = () => {
    const [loaded, setLoaded] = useState([]);

    useEffect(() => {
        setLoaded([require("../../../public/medLogC.png"), require("../../../public/smallLogC.png")])
    }, [])

    return (
        <div className="cThanks">
            <div className="other">
                <nav className="cNav">
                    <a href="https://www.devmunns.site/contact">Email</a>
                    <a href="https://www.devmunns.site">Homepage</a>
                    <Link to="/cal"
                        className="calLin">Calendar</Link>
                </nav>
                <div className="navLog">
                    <a href="https://www.devmunns.site"><img src={loaded[1]} id="slC" alt="Trevor's Logo" /></a>
                </div>
            </div>
            <div className="thxHead">
                <h1>Thank You! This is only a demo. You are <b>NOT</b> scheduled for any appointment. Do you wish to email the developer?</h1>
            </div>
            <div className="logoC">
                <a href="https://www.devmunns.site/contact" id="emailMe">Email Me!</a>
                <a href="https://www.devmunns.site"><img src={loaded[0]} alt="Trevor's logo" /></a>
            </div>
        </div>
    )
}

export default Cthanks;