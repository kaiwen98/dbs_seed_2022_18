import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
const Navbar = ({}) => {
    const { userProfile: currentUser } = useAuth();

    console.log(currentUser);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/dashboard">
                        Rainbow Centre DevNav
                    </a>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarText"
                        role="button"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                        class={`collapse navbar-collapse`}
                        id="navbarText"
                    >
                        {currentUser === null ? (
                            <span class="navbar-text ml-auto">
                                <Link to="/login">Login</Link>
                            </span>
                        ) : currentUser.Name === null ? (
                            <span class="navbar-text ml-auto">
                                <Link to="/update-profile">
                                    Update your Profile.
                                </Link>
                            </span>
                        ) : (
                            <>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">
                                            Profile
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="admin-menu">
                                            Admin Menu
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="device-menu">
                                            Device Menu
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="dispatch-menu">
                                            Dispatch Menu
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="about-us">
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                                <span class="navbar-text ml-auto">
                                    {"Welcome, "}
                                    <Link to="/">{currentUser.Name}</Link>
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <div className="mb-5"/>
            <div className="mb-2"/>
        </>
    );
};

export default Navbar;
