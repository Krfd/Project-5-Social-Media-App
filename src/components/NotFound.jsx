import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Custom.css";

function NotFound() {
    return (
        <>
            <div className="container-fluid notfound min-vh-100 d-flex">
                <h1 className="text-center align-self-center text-light">
                    Page Not Found...
                </h1>
            </div>
        </>
    );
}

export default NotFound;
