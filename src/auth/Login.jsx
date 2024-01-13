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
                    <div className="d-block d-lg-flex flex-md-row-reverse align-items-center prototype w-100 p-3 p-lg-5 mb-5 mb-md-0">
                        <img
                            src={Prototype}
                            alt="Prototype"
                            className="object-fit-cover h-auto w-50 d-block mx-auto my-3 my-lg-0"
                        />
                        <div className="text text-center text-lg-start">
                            <h2 className="text-white">Welcome Back!</h2>
                            <h5 className="text-white">
                                To keep connected with us please login with your
                                account.
                            </h5>
                        </div>
                    </div>
                    <div className="container mb-5 mb-md-0">
                        <form
                            action=""
                            method="post"
                            className="form mt-3 shadow p-5 rounded-3 d-block mx-auto"
                        >
                            <h1 className="fw-bold text-light mb-3">
                                Login Account
                            </h1>
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
                            <p className="mt-2 text-white text-center">
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
                </div>

                <Outlet />
            </div>
        </>
    );
}

export default Login;
