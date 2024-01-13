import React from "react";
import "../Custom.css";
import Prototype from "/prototype.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <div className="linear">
                <div className="d-block d-md-flex flex-md-row-reverse justify-content-center align-items-center px-3 px-md-5 mt-5 mt-md-0 min-vh-100">
                    <div className="prototype ">
                        <img
                            src={Prototype}
                            alt="Prototype"
                            className="object-fit-cover h-auto w-75"
                        />
                    </div>
                    <div className="text-center mt-5 mt-md-0">
                        <h1 className="text-light text-shadow">
                            The <span className="fw-bold">Socials</span>
                        </h1>
                        <h4 className="gray fw-bold text-shadow">
                            "Experience the reality of communication through
                            digital transformation."
                        </h4>

                        <Link to="./login" className="text-primary">
                            Login
                        </Link>
                        <span className="text-light mx-2">or</span>
                        <Link to="./signup" className="text-primary">
                            Signup
                        </Link>
                    </div>
                </div>

                <Outlet />
            </div>
        </>
    );
}

export default LandingPage;
