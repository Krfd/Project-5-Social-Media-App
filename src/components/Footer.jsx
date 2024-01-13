import React from "react";
import "../Custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Footer() {
    return (
        <>
            <footer className="text-center text-light mt-auto">
                <p>
                    Copyright &copy; 2024. All rights reserved. <br />
                    Developed By:{" "}
                    <span className="text-secondary fw-bold">
                        Karl Fredriech
                    </span>
                </p>
            </footer>
        </>
    );
}

export default Footer;
