import React from "react";
import Logo from "/logo.png";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import app from "../config/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import "../Custom.css";
import "aos/dist/aos.css";

function Layout() {
    return (
        <>
            <main className="fixed-bottom layout">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
                <nav className="navbar navbar-expand-sm px-3">
                    <div className="container-fluid fixed-bottom">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link to="/" className="fw-bold nav-link ">
                                    <i className="fa-solid fa-house"></i>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link
                                    to="messages"
                                    className="fw-bold nav-link "
                                >
                                    <i className="fa-solid fa-message"></i>{" "}
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link
                                    to="notification"
                                    className="fw-bold nav-link "
                                >
                                    <i className="fa-solid fa-bell"></i>{" "}
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="profile" className="fw-bold nav-link">
                                    <i className="fa-solid fa-user"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Outlet />
                <div className="container mt-auto">
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default Layout;