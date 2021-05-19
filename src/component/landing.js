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
                    <ul class="navbar-nav">
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

export function Content() {
    return (
        <div className="bg-primary">
        <div className="container">
         
          <div className="row align-items-center no-gutters">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="py-5 py-lg-0">
                <h1 className="text-white display-4 font-weight-bold">Welcome to Geeks UI
                  Learning Application
                </h1>
                <p className="text-white-50 mb-4 lead1">
                  Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                </p>
                <Link to="./course-category" className="btn btn-success">Browse Courses</Link>
                
              </div>
            </div>
            <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
              <img src="images/hero/hero-img.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
           
    )
};
export function Features(){
    return(
        <div className="bg-white py-4 shadow-sm">
        <div className="container">
          <div className="row align-items-center no-gutters">
            
            <div className="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <span
                  className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning font-size-md "> <i
                    className="fe fe-video"> </i></span>
                <div className="ml-3">
                  <h4 className="mb-0 font-weight-semi-bold">30,000 online courses</h4>
                  <p className="mb-0">Enjoy a variety of fresh topics</p>
                </div>
              </div>
            </div>
           
            <div className="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <span
                  className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning font-size-md "> <i
                    className="fe fe-users"> </i></span>
                <div className="ml-3">
                  <h4 className="mb-0 font-weight-semi-bold">Expert instruction</h4>
                  <p className="mb-0">Find the right instructor for you</p>
                </div>
              </div>
            </div>
           
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="d-flex align-items-center">
                <span
                  className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning font-size-md "> <i
                    className="fe fe-clock"> </i></span>
                <div className="ml-3">
                  <h4 className="mb-0 font-weight-semi-bold">Lifetime access</h4>
                  <p className="mb-0">Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export function Body(){
    return(
        <div className="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="mb-0">Recommended to you</h2>
            </div>
          </div>
          <div className="position-relative">
            <ul className="controls " id="sliderFirstControls" aria-label="Carousel Navigation" tabindex="0">
              <li className="prev" aria-controls="tns1" tabindex="-1" data-controls="prev">
                  <i className="fe fe-chevron-left"></i>
              </li>
              <li className="next" aria-controls="tns1" tabindex="-1" data-controls="next" >
                  <i className="fe fe-chevron-right"></i>
              </li>
          </ul>
            <div className="sliderFirst row">
              <div className="item col-md-4">
              
                <div className="card mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-react.jpg" alt=""
                      className="rounded-top card-img-top"/></Link>
                 
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to= "./course-single"  className="text-inherit">How to
                        easily create a website with React</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>3h 56m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Beginner
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(7,700)</span>
                    </div>
                  </div>
                 
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-1.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Morris Mccoy</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
                
                <div className="card mb-4 card-hover">
                  <Link to="./course-single"  className="card-img-top"><img src="images/course/course-graphql.jpg" alt=""
                      className="rounded-top card-img-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">GraphQL:
                        introduction to graphQL for beginners</Link></h4>
                  
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE" />
                        </svg>
                        Advance
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(9,300)</span>
                    </div>
                  </div>
                 
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-2.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Ted Hawkins</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
                
                <div className="card mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-angular.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">Angular -
                        the complete guide for beginner</Link></h4>
                    
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Beginner
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(8,890)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Juanita Bell</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
                
                <div className="card mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-python.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">The
                        Python
                        Course: build web application</Link></h4>
                    
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Intermediate
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(13,245)</span>
                    </div>
                  </div>
                 
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Claire Robertson</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
                
                <div className="card mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-graphql.jpg" alt=""
                      className="rounded-top card-img-top"/></Link>
                
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">GraphQL:
                        introduction to graphQL for beginners</Link></h4>
                    
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE" />
                        </svg>
                        Advance
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(9,300)</span>
                    </div>
                  </div>
                 
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-2.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Ted Hawkins</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
                
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-angular.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">Angular -
                        the complete guide for beginner</Link></h4>
                    
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Beginner
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(8,890)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Juanita Bell</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
               
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-python.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">The
                        Python
                        Course: build web application</Link></h4>
                    
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Intermediate
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(13,245)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Claire Robertson</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
      <div className="pb-lg-3 pt-lg-3">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="mb-0">Most Popular</h2>
            </div>
          </div>
          <div className="position-relative">
            <ul className="controls " id="sliderSecondControls">
              <li className="prev">
                      <i className="fe fe-chevron-left"></i>
                    </li>
                    <li className="next">
                      <i className="fe fe-chevron-right"></i>
                    </li>
            </ul>
            <div className="sliderSecond row">
              <div className="item col-md-4">
              
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-gatsby.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">Gatsby
                        JS:
                        build blog with GraphQL and React</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>3h 56m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Beginner
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(9,370)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-5.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Morris Mccoy</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
               
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-javascript.jpg"
                      alt="" className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">Getting
                        Started with JavaScript</Link></h4>
                    
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE" />
                        </svg>
                        Advance
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(5,245)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Ted Hawkins</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
                
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-css.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">CSS:
                        ultimate CSS course from beginner to advanced</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Beginner
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(17,000)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-7.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Juanita Bell</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
               
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-wordpress.jpg"
                      alt="" className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single"
                        className="text-inherit">Wordpress:
                        complete WordPress theme & plugin development</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Intermediate
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(16,500)</span>
                    </div>
                  </div>
                 
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-8.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Claire Robertson</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
              
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-javascript.jpg"
                      alt="" className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">Getting
                        Started with JavaScript</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE" />
                        </svg>
                        Advance
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(5,245)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Ted Hawkins</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
               
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-css.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                 
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">CSS:
                        ultimate CSS course from beginner to advanced</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Beginner
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(17,000)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-7.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Juanita Bell</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
               
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-wordpress.jpg"
                      alt="" className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single"
                        className="text-inherit">Wordpress:
                        complete WordPress theme & plugin development</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Intermediate
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(16,500)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-8.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Claire Robertson</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-lg-8 pt-lg-3 py-6">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="mb-0">Trending</h2>
            </div>
    
          </div>
          <div className="position-relative">
            <ul className="controls" id="sliderThirdControls">
              <li className="prev">
                      <i className="fe fe-chevron-left"></i>
                    </li>
                    <li className="next">
                      <i className="fe fe-chevron-right"></i>
                    </li>
            </ul>
            <div className="sliderThird row">
              <div className="item col-md-4">
               
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-react.jpg" alt=""
                      className="card-img-top rounded-top"/>
                  </Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2"><Link to="./course-single" className="text-inherit">How to
                        easily create a website with React</Link></h4>
                 
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>3h 56m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Beginner
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(12,245)</span>
                    </div>
                  </div>
                 
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-9.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Morris Mccoy</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
                
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single"className="card-img-top"><img src="images/course/course-graphql.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                 
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">GraphQL:
                        introduction to graphQL for beginners</Link></h4>
                    
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE" />
                        </svg>
                        Advance
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(15,350)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-10.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Ted Hawkins</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
             
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-angular.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">Angular -
                        the complete guide for beginner</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Beginner
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(6,600)</span>
                    </div>
                  </div>
                 
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Juanita Bell</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
               
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-python.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                 
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">The
                        Python
                        Course: build web application</Link></h4>
                    
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Intermediate
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(2,500)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Claire Robertson</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
               
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-graphql.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">GraphQL:
                        introduction to graphQL for beginners</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE" />
                        </svg>
                        Advance
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(15,350)</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-10.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Ted Hawkins</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
             
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-angular.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">Angular -
                        the complete guide for beginner</Link></h4>
                   
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Beginner
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(6,600)</span>
                    </div>
                  </div>
                 
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Juanita Bell</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-4">
                
                <div className="card  mb-4 card-hover">
                  <Link to="./course-single" className="card-img-top"><img src="images/course/course-python.jpg" alt=""
                      className="card-img-top rounded-top"/></Link>
                  
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2 "><Link to="./course-single" className="text-inherit">The
                        Python
                        Course: build web application</Link></h4>
                    
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE" />
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                        </svg>
                        Intermediate
                      </li>
                    </ul>
                    <div className="lh-1">
                      <span>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning mr-n1"></i>
                        <i className="mdi mdi-star text-warning"></i>
                      </span>
                      <span className="text-warning">4.5</span>
                      <span className="font-size-xs text-muted">(2,500)</span>
                    </div>
                  </div>
                
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt=""/>
                      </div>
                      <div className="col ml-2">
                        <span>Claire Robertson</span>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    )
};

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
};