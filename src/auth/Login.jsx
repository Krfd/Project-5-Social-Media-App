import React from "react";
import Prototype from "/prototype.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";
import "../Custom.css";

function Login() {
    return (
        <>
            <div className="container-fluid">
                <div className="d-block d-md-flex justify-content-center align-items-center px-3 px-md-5 mt-5 mt-md-0 min-vh-100">
                    <div className="container">
                        <form
                            action=""
                            method="post"
                            className="form mt-3 shadow p-5 rounded-3 w-75 d-block mx-auto"
                        >
                            <h1 className="fw-bold text-light mb-3">Login</h1>
                            <div className="d-block d-md-flex gap-1 mb-2">
                                <div className="col">
                                    <label
                                        htmlFor="email"
                                        className="text-white"
                                    >
                                        Email*
                                    </label>
                                    <br />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="d-block d-md-flex gap-1">
                                <div className="col">
                                    <label
                                        htmlFor="password"
                                        className="text-white"
                                    >
                                        Password*
                                    </label>
                                    <br />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>

                            <button className="btn btn-primary rounded-5 w-100 mt-3">
                                Log in
                            </button>
                            <p className="mt-2 text-white">
                                {" "}
                                Don't have an account? {""}
                                <Link
                                    to="/signup"
                                    className="hover text-primary"
                                >
                                    Signup
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className="d-flex prototype w-100">
                        <img
                            src={Prototype}
                            alt="Prototype"
                            className="object-fit-cover h-auto w-75 d-block mx-auto"
                        />
                    </div>
                </div>

                <Outlet />
            </div>
        </>
    );
}

export default Login;
