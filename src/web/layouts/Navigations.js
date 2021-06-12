import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationTop = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-default">
                <div className="container-fluid px-0">
                    <Link className="navbar-brand" to={'/'}>
                        <img src="/assets/images/logo_transparent.png" alt="" height="60" width="60" />
                    </Link>

       
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar-default"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="icon-bar top-bar mt-0"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-default">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#!"
                                    id="navbarBrowse"
                                    data-toggle="dropdown"
                                    // aria-haspopup="true"
                                    aria-expanded="false"
                                    data-display="static"
                                >
                                    Browse
                  </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-arrow"
                                    aria-labelledby="navbarBrowse"
                                >
                                    <li className="dropdown-submenu dropright">
                                        <a
                                            className="dropdown-item dropdown-list-group-item dropdown-toggle"
                                            href="#!"
                                        >
                                            Web Development
                      </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Bootstrap</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    React
                        </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    GraphQl</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Gatsby</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Grunt</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Svelte</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Meteor</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    HTML5</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Angular</a
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropright">
                                        <a
                                            className="dropdown-item dropdown-list-group-item dropdown-toggle"
                                            href="#!"
                                        >
                                            Design
                      </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Graphic Design</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Illustrator
                        </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    UX / UI Design</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Figma Design</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Adobe XD</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Sketch</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Icon Design</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="./course-category.html"
                                                >
                                                    Photoshop</a
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            href="./course-category.html"
                                            className="dropdown-item"
                                        >
                                            Mobile App
                      </a>
                                    </li>
                                    <li>
                                        <a
                                            href="./course-category.html"
                                            className="dropdown-item"
                                        >
                                            IT Software
                      </a>
                                    </li>
                                    <li>
                                        <a
                                            href="./course-category.html"
                                            className="dropdown-item"
                                        >
                                            Marketing
                      </a>
                                    </li>
                                    <li>
                                        <a
                                            href="./course-category.html"
                                            className="dropdown-item"
                                        >
                                            Music
                      </a>
                                    </li>
                                    <li>
                                        <a
                                            href="./course-category.html"
                                            className="dropdown-item"
                                        >
                                            Life Style
                      </a>
                                    </li>
                                    <li>
                                        <a
                                            href="./course-category.html"
                                            className="dropdown-item"
                                        >
                                            Business
                      </a>
                                    </li>
                                    <li>
                                        <a
                                            href="./course-category.html"
                                            className="dropdown-item"
                                        >
                                            Photography
                      </a>
                                    </li>
                                </ul>
                            </li>



                        </ul>
                        <form className="mt-3 mt-lg-0 ml-lg-3 d-flex align-items-center">
                            <span className="position-absolute pl-3 search-icon">
                                <i className="fe fe-search"></i>
                            </span>
                            <input
                                type="search"
                                className="form-control pl-6"
                                placeholder="Search Courses"
                            />
                        </form>

                        <div className="ml-auto mt-3 mt-lg-0">
                            <Link to={"/join/sign-in/"} className="btn btn-white shadow-sm mr-1">Sign In</Link>
                            <Link to={"/join/sign-up/"} className="btn btn-primary">Sign Up</Link>
                        </div>




                    </div>
                </div>
            </nav>
    )
}

export const Footer = () => {
    return (
        <div className="footer">
                <div className="container">
                    <div className="row align-items-center no-gutters border-top border-color-dark-custom py-2">

                        <div className="col-md-6 col-12 text-center text-md-left">
                            <span>© 2021 Geeks. All Rights Reserved.</span>
                        </div>
                        <div className="col-12 col-md-6">
                            <nav className="nav nav-footer justify-content-center justify-content-md-end">
                                <a className="nav-link active pl-0" href="#!">Privacy</a>
                                <a className="nav-link" href="#!">Terms </a>
                                <a className="nav-link" href="#!">Feedback</a>
                                <a className="nav-link" href="#!">Support</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    )
}