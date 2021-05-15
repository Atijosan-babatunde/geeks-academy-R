import React from 'react';
import { Link } from 'react-router-dom';

export const HomeBanner = () => {
    return (
        <div className="bg-primary">
            <div className="container">
                <div className="row align-items-center no-gutters">
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="py-5 py-lg-0">
                            <h1 className="text-white display-4 font-weight-bold">Welcome to Avila Academy</h1>
                            <p className="text-white-50 mb-4 lead1">Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.</p>
                            <a href="./course-category.html" className="btn btn-success">Browse Courses</a>
                        </div>
                    </div>
                    <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
                        <img src="assets/images/hero/hero-img.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CourseStats = () => {
    return (
        <div className="bg-dark-custom-1 py-4 shadow-sm">
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

export const RecommendedCourses = ({ loading, error, courses }) => {
    return (
        <div className="pt-lg-12 pb-lg-3 pt-8 pb-6">
            <div className="container">

                <div className="row mb-4">
                    <div className="col">
                        <h2 className="mb-0">Recommended to you</h2>
                    </div>
                </div>

                <div className="position-relative">

                    <ul className="controls " id="sliderFirstControls" aria-label="Carousel Navigation" tabIndex="0">
                        <li className="prev" aria-controls="tns1" tabIndex="-1" data-controls="prev">
                            <i className="fe fe-chevron-left"></i>
                        </li>
                        <li className="next" aria-controls="tns1" tabIndex="-1" data-controls="next">
                            <i className="fe fe-chevron-right"></i>
                        </li>
                    </ul>

                    <div className="sliderFirst">
                        {
                            !loading && !error && courses && courses?.map((v, i) => {
                                return (
                                    <div className="item" key={i}>
                                        <div className="card mb-4 card-hover">
                                            
                                            <Link to={`course/${v.slug}/`} className="card-img-top">
                                                <img src={v.banner.url} alt="" className="rounded-top card-img-top" />
                                            </Link>

                                            <div className="card-body">
                                                <h4 className="mb-2 text-truncate-line-2 ">
                                                    <Link to={`course/${v.slug}/`} className="text-inherit">{v.headline}</Link>
                                                </h4>
                                                <ul className="mb-3 list-inline">
                                                    <li className="list-inline-item"><i className="far fa-clock mr-1"></i>{v.duration}</li>
                                                    <li className="list-inline-item">
                                                        <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" />
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9" />
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9" />
                                                        </svg>
                                                        {v.difficulty.text}
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
                                                        <img src="assets/images/avatar/avatar-1.jpg" className="rounded-circle avatar-xs" alt="" />
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
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export const MostPopularCourses = () => {
    return (
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
                    <div className="sliderSecond">
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-gatsby.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">Gatsby
                                    JS:
                    build blog with GraphQL and React</a></h4>

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
                                            <img src="assets/images/avatar/avatar-5.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-javascript.jpg"
                                    alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">Getting
                    Started with JavaScript</a></h4>

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
                                            <img src="assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-css.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">CSS:
                    ultimate CSS course from beginner to advanced</a></h4>

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
                                            <img src="assets/images/avatar/avatar-7.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-wordpress.jpg"
                                    alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html"
                                        className="text-inherit">Wordpress:
                    complete WordPress theme &amp; plugin development</a></h4>

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
                                            <img src="assets/images/avatar/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-javascript.jpg"
                                    alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">Getting
                    Started with JavaScript</a></h4>

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
                                            <img src="assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-css.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">CSS:
                    ultimate CSS course from beginner to advanced</a></h4>

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
                                            <img src="assets/images/avatar/avatar-7.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-wordpress.jpg"
                                    alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html"
                                        className="text-inherit">Wordpress:
                    complete WordPress theme &amp; plugin development</a></h4>

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
                                            <img src="assets/images/avatar/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
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
    )
}

export const TrendingCourses = () => {
    return (
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
                    <div className="sliderThird">
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-react.jpg" alt=""
                                    className="card-img-top rounded-top" />
                                </a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2"><a href="./course-single.html" className="text-inherit">How to
                    easily create a website with React</a></h4>

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
                                            <img src="assets/images/avatar/avatar-9.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-graphql.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">GraphQL:
                    introduction to graphQL for beginners</a></h4>

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
                                            <img src="assets/images/avatar/avatar-10.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-angular.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">Angular -
                    the complete guide for beginner</a></h4>

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
                                            <img src="assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-python.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">The
                                    Python
                    Course: build web application</a></h4>

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
                                            <img src="assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-graphql.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">GraphQL:
                    introduction to graphQL for beginners</a></h4>

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
                                            <img src="assets/images/avatar/avatar-10.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-angular.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">Angular -
                    the complete guide for beginner</a></h4>

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
                                            <img src="assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
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
                        <div className="item">

                            <div className="card  mb-4 card-hover">
                                <a href="./course-single.html" className="card-img-top"><img src="assets/images/course/course-python.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="./course-single.html" className="text-inherit">The
                                    Python
                    Course: build web application</a></h4>

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
                                            <img src="assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt="" />
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
    )
}