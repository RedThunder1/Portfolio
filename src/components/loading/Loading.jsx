import React from 'react';
import "./loading.css"

function Loading() {
    document.documentElement.style.setProperty("--loading", "100%");
    setTimeout(() => {
        document.documentElement.style.setProperty("--loading", "0");
    }, 3000);
    setTimeout(() => {
        document.getElementById("loading").remove();
    }, 4000);


    return (
        <>
            <div className="loading" id="loading">
                <div className="loading_container">
                    <div className="loader"></div>
                    <div className="loader2"></div>
                    <div className="loader3"></div>
                </div>
            </div>
        </>

    )
}

export default Loading