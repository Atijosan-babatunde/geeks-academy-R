import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-default">
            <div className="container-fluid px-0">
                <Link className="navbar-brand" to="/"
                ><img src="images/brand/logo/logo.svg" alt=""
                    /></Link>

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
                                            <Link
                                                className="dropdown-item"
                                                to ="/course-category"
                                            >
                                                Bootstrap</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="/course-category"
                                            >
                                                React
              </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                GraphQl</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Gatsby</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Grunt</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Svelte</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Meteor</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                HTML5</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Angular</Link>
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
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Graphic Design</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Illustrator
              </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                UX / UI Design</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Figma Design</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Adobe XD</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Sketch</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Icon Design</Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to ="./course-category"
                                            >
                                                Photoshop</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        to ="./course-category"
                                        className="dropdown-item"
                                    >
                                        Mobile App
            </Link>
                                </li>
                                <li>
                                    <Link
                                        to ="./course-category"
                                        className="dropdown-item"
                                    >
                                        IT Software
            </Link>
                                </li>
                                <li>
                                    <Link
                                        to ="./course-category"
                                        className="dropdown-item"
                                    >
                                        Marketing
            </Link>
                                </li>
                                <li>
                                    <Link
                                        to ="./course-category"
                                        className="dropdown-item"
                                    >
                                        Music
            </Link>
                                </li>
                                <li>
                                    <Link
                                        to="./course-category"
                                        className="dropdown-item"
                                    >
                                        Life Style
            </Link>
                                </li>
                                <li>
                                    <Link
                                        to="./course-category"
                                        className="dropdown-item"
                                    >
                                        Business
            </Link>
                                </li>
                                <li>
                                    <Link
                                        to ="./course-category"
                                        className="dropdown-item"
                                    >
                                        Photography
            </Link>
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
                        <Link to="sign-in" className="btn btn-white shadow-sm mr-1">Sign In</Link>
                        <Link to="sign-up" className="btn btn-primary">Sign Up</Link>
                    </div>


                </div>
            </div>
        </nav>
    )
}; 

// export function Body(){
//     return (

//     )
// }


export function Footer(){
    return(
        <div className="footer">
    <div className="container">
        <div className="row align-items-center no-gutters border-top py-2">
            
            <div className="col-md-6 col-12 text-center text-md-left">
                <span>© 2021 Geeks. All Rights Reserved.</span>
            </div>
             
            <div className="col-12 col-md-6">
                <nav className="nav nav-footer justify-content-center justify-content-md-end">
                    <Link className="nav-link active pl-0" to="privacy" >Privacy</Link>
                    <Link className="nav-link" to="course-single" >Terms </Link>
                    <Link className="nav-link" to="course-single" >Feedback</Link>
                    <Link className="nav-link" to="course-single" >Support</Link>
                </nav>
            </div>
        </div>
    </div>
</div>
    )
}