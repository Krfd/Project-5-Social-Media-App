import React from "react";
import Prototype from "/prototype.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";
import "../Custom.css";

function Signup() {
    return (
        <>
            <div className="container-fluid">
                <div className="d-block d-md-flex justify-content-center align-items-center px-3 px-md-5 mt-5 mt-md-0 min-vh-100">
                    <div className="container">
                        <form
                            action=""
                            method="post"
                            className="form mt-3 shadow p-5 rounded-3"
                        >
                            <h1 className="fw-bold text-light mb-3">
                                Create Account
                            </h1>
                            <div className="d-block d-lg-flex gap-1 mb-2">
                                <div className="col">
                                    <label
                                        htmlFor="first"
                                        className="text-white"
                                    >
                                        First Name*
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="first"
                                        id="first"
                                        className="form-control text-secondary"
                                        required
                                    />
                                </div>

                                <div className="col">
                                    <label
                                        htmlFor="last"
                                        className="text-white"
                                    >
                                        Last Name*
                                    </label>
                                    <br />

                                    <input
                                        type="text"
                                        name="last"
                                        className="form-control text-secondary"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="d-block d-lg-flex gap-1 mb-2">
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
                                        className="form-control text-secondary"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="phone"
                                        className="text-white"
                                    >
                                        Phone*
                                    </label>
                                    <br />
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="form-control text-secondary"
                                        required
                                    />
                                </div>
                            </div>

                            {/* <div className="d-block">
                                <input
                                    type="text"
                                    name="social"
                                    className="form-control m-2"
                                    placeholder="Social Links"
                                    required
                                />
                            </div> */}

                            <div className="d-block d-lg-flex gap-1">
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
                                        className="form-control text-secondary"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="text-white"
                                    >
                                        Confirm Password*
                                    </label>
                                    <br />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        className="form-control text-secondary"
                                        required
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary rounded-5 w-100 mt-3">
                                Create
                            </button>
                            <p className="mt-2 text-white text-center">
                                {" "}
                                Already have an account? {""}
                                <Link
                                    to="/login"
                                    className="hover text-primary text-decoration-none"
                                >
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className="d-block d-lg-flex flex-md-row-reverse align-items-center prototype w-100 p-3 p-lg-5 my-5 my-md-0">
                        <img
                            src={Prototype}
                            alt="Prototype"
                            className="object-fit-cover h-auto w-50 d-block mx-auto my-3 my-lg-0"
                        />
                        <div className="text text-center text-lg-start">
                            <h2 className="text-white">
                                Welcome to{" "}
                                <span className="fw-bold">Socials</span>.
                            </h2>
                            <h5 className="text-white">
                                Let's build a real-world community through a
                                better network.
                            </h5>
                        </div>
                    </div>
                </div>
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default Signup;
