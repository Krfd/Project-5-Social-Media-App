import React from "react";
import Logo from "/logo.png";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import app from "../config/firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "../Custom.css";
import "aos/dist/aos.css";

function Layout() {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setAuthenticated(true);
            }
        });
    }, []);

    let navigate = useNavigate();
    const logout = () => {
        const auth = getAuth(app);
        setAuthenticated(false)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logged out successfully",
                    text: "You are now leaving the page.",
                });
                navigate("/login");
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            });
    };

    return (
        <>
            <main className="container-fluid p-5">
                <Link className="navbar-brand" to="/home">
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
                <Outlet />
                <nav className="container-fluid fixed-bottom navbar navbar-expand-sm px-3">
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
                                <Link to="/home" className="fw-bold nav-link ">
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
            </main>
        </>
    );
}

export default Layout;
