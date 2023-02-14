import React from "react";
import { Link, useParams } from "react-router-dom";
// import "./display.css";
export default function Display() {
    const params = useParams();
    console.log(params.imageId);
    return (
        <div className="display">
            <img src={`images/${params.imageId}.jpg`} alt="players" />
            <Link className="displayLink" to="/">
                Back to Home
            </Link>
        </div>
    );
}
