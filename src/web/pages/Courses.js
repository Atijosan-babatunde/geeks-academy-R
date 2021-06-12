import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_COURSES } from '../graphql';
import { BaseContainer } from '../layouts/Containers';

export default function Courses() {
    const { loading, error, data } = useQuery(GET_COURSES);

    return (
        <BaseContainer>
            <div className="py-4 py-lg-6 bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div>
                                <h1 className="text-white mb-1 display-4">Our Courses</h1>
                                <p className="mb-0 text-white lead">6,979,934 students are learning JavaScript.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6">
                <div className="container">
                    <div className="row mb-6">
                        <div className="col-md-12">

                            <ul className="nav nav-lb-tab mb-6" id="tab" role="tablist">
                                <li className="nav-item ml-0" role="presentation">
                                    <a className="nav-link active" id="most-popular-tab" data-toggle="pill" href="#most-popular" role="tab"
                                        aria-controls="most-popular" aria-selected="true">Most Popular</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="trending-tab" data-toggle="pill" href="#trending" role="tab"
                                        aria-controls="trending" aria-selected="false">Trending</a>
                                </li>
                            </ul>

                            <div className="tab-content" id="tabContent">

                                <div className="tab-pane fade show active" id="most-popular" role="tabpanel" aria-labelledby="most-popular-tab">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12">

                                            <div className="card  mb-4 card-hover">
                                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-javascript.jpg" alt=""
                                                    className="card-img-top rounded-top" /></a>

                                                <div className="card-body">
                                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Creating a Custom Event in Javascript</a></h3>
                                                    <ul className="ped  list-inline">
                                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>3h 56m</li>
                                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                        </svg>Beginner </li>
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
                                                            <img src="/assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="" />
                                                        </div>
                                                        <div className="col ml-2">
                                                            <span className="ped">Morris Mccoy</span>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="course-single.html" className="text-muted bookmark">
                                                                <i className="fe fe-bookmark  "></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="card  mb-4 card-hover">
                                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-javascript.jpg" alt=""
                                                    className="card-img-top rounded-top" /></a>

                                                <div className="card-body">
                                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Morden JavaScript
                                                    Beginner Tutorial -
                          Simple</a></h3>
                                                    <ul className="ped  list-inline">
                                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m
                        </li>
                                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE">
                                                            </rect>
                                                        </svg>Advance </li>
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
                                                        <span className="font-size-xs text-muted">(7,800)</span>
                                                    </div>
                                                </div>

                                                <div className="card-footer">
                                                    <div className="row align-items-center no-gutters">
                                                        <div className="col-auto">
                                                            <img src="/assets/images/avatar/avatar-2.jpg" className="rounded-circle avatar-xs" alt="" />
                                                        </div>
                                                        <div className="col ml-2">
                                                            <span className="ped">Ted Hawkins</span>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="course-single.html" className="text-muted bookmark">
                                                                <i className="fe fe-bookmark  "></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">

                                            <div className="card  mb-4 card-hover">
                                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-javascript.jpg" alt=""
                                                    className="card-img-top rounded-top" /></a>

                                                <div className="card-body">
                                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Applying JavaScript
                          and using the console.</a>
                                                    </h3>

                                                    <ul className="ped list-inline">
                                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m
                        </li>
                                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                        </svg>Beginner </li>
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
                                                        <span className="font-size-xs text-muted">(8,245)</span>
                                                    </div>
                                                </div>

                                                <div className="card-footer">
                                                    <div className="row align-items-center no-gutters">
                                                        <div className="col-auto">
                                                            <img src="/assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
                                                        </div>
                                                        <div className="col ml-2">
                                                            <span className="ped">Juanita Bell</span>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="course-single.html" className="text-muted bookmark">
                                                                <i className="fe fe-bookmark  "></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">

                                            <div className="card  mb-4 card-hover">
                                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-javascript.jpg" alt=""
                                                    className="card-img-top rounded-top" /></a>

                                                <div className="card-body">
                                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Creating functions,
                                                    using them, passing data in
                          and out.</a></h3>

                                                    <ul className="mb-3  list-inline">
                                                        <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m
                        </li>
                                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                        </svg>Intermediate </li>
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
                                                        <span className="font-size-xs text-muted">(3,245)</span>
                                                    </div>
                                                </div>

                                                <div className="card-footer">
                                                    <div className="row align-items-center no-gutters">
                                                        <div className="col-auto">
                                                            <img src="/assets/images/avatar/avatar-5.jpg" className="rounded-circle avatar-xs" alt="" />
                                                        </div>
                                                        <div className="col ml-2">
                                                            <span className="ped">Claire Robertson</span>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="course-single.html" className="text-muted bookmark">
                                                                <i className="fe fe-bookmark  "></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="trending" role="tabpanel" aria-labelledby="trending-tab">

                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12">

                                            <div className="card  mb-4 card-hover">
                                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-react.jpg" alt=""
                                                    className="card-img-top rounded-top" /></a>

                                                <div className="card-body">
                                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">How to easily create a
                          website with React</a>
                                                    </h3>
                                                    <ul className="ped  list-inline">
                                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>3h 56m
                        </li>
                                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                        </svg>Beginner </li>
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
                                                        <span className="font-size-xs text-muted">(6,300)</span>
                                                    </div>
                                                </div>

                                                <div className="card-footer">
                                                    <div className="row align-items-center no-gutters">
                                                        <div className="col-auto">
                                                            <img src="/assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt="" />
                                                        </div>
                                                        <div className="col ml-2">
                                                            <span className="ped">Morris Mccoy</span>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="course-single.html" className="text-muted bookmark">
                                                                <i className="fe fe-bookmark  "></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">

                                            <div className="card  mb-4 card-hover">
                                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-graphql.jpg" alt=""
                                                    className="card-img-top rounded-top" /></a>

                                                <div className="card-body">
                                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">GraphQL: introduction
                                                    to graphQL for
                          beginners</a></h3>
                                                    <ul className="ped list-inline">
                                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m
                        </li>
                                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE">
                                                            </rect>
                                                        </svg>Advance </li>
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
                                                        <span className="font-size-xs text-muted">(4,300)</span>
                                                    </div>
                                                </div>

                                                <div className="card-footer">
                                                    <div className="row align-items-center no-gutters">
                                                        <div className="col-auto">
                                                            <img src="/assets/images/avatar/avatar-7.jpg" className="rounded-circle avatar-xs" alt="" />
                                                        </div>
                                                        <div className="col ml-2">
                                                            <span className="ped">Ted Hawkins</span>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="course-single.html" className="text-muted bookmark">
                                                                <i className="fe fe-bookmark  "></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">

                                            <div className="card  mb-4 card-hover">
                                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-angular.jpg" alt=""
                                                    className="card-img-top rounded-top" /></a>

                                                <div className="card-body">
                                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Angular - the complete
                          guide for beginner</a>
                                                    </h3>

                                                    <ul className="mb-3  list-inline">
                                                        <li className="list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m
                        </li>
                                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                        </svg>Beginner </li>
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
                                                        <span className="font-size-xs text-muted">(5,410)</span>
                                                    </div>
                                                </div>

                                                <div className="card-footer">
                                                    <div className="row align-items-center no-gutters">
                                                        <div className="col-auto">
                                                            <img src="/assets/images/avatar/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
                                                        </div>
                                                        <div className="col ml-2">
                                                            <span className="ped">Juanita Bell</span>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="course-single.html" className="text-muted bookmark">
                                                                <i className="fe fe-bookmark  "></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">

                                            <div className="card  mb-4 card-hover">
                                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-python.jpg" alt=""
                                                    className="card-img-top rounded-top" /></a>

                                                <div className="card-body">
                                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">The Python Course:
                          build web application</a>
                                                    </h3>
                                                    <ul className="mb-3  list-inline">
                                                        <li className="list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m
                        </li>
                                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE">
                                                            </rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9">
                                                            </rect>
                                                        </svg>Intermediate </li>
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
                                                            <img src="/assets/images/avatar/avatar-9.jpg" className="rounded-circle avatar-xs" alt="" />
                                                        </div>
                                                        <div className="col ml-2">
                                                            <span className="ped">Claire Robertson</span>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="course-single.html" className="text-muted bookmark">
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

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="mb-5">
                                <h2 className="mb-1">Free JavaScript lessons</h2>
                                <p className="mb-0">Bite-sized learning in minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-6">
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card  mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-javascript.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Creating a Custom
                  Event in Javascript</a></h3>
                                    <ul className="mb-3  list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>3h 56m</li>
                                        <li className="ped list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>Beginner </li>
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
                                            <img src="/assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Morris Mccoy</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-javascript.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Morden JavaScript
                  Beginner Tutorial - Simple</a></h3>
                                    <ul className="mb-3  list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                                        <li className="ped list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
                                        </svg>Advance </li>
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
                                        <span className="font-size-xs text-muted">(7,800)</span>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col-auto">
                                            <img src="/assets/images/avatar/avatar-2.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Ted Hawkins</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card  mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-javascript.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Applying
                  JavaScript and using the console.</a></h3>
                                    <ul className="ped list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>Beginner </li>
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
                                        <span className="font-size-xs text-muted">(8,245)</span>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col-auto">
                                            <img src="/assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Juanita Bell</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card  mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-javascript.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Creating
                  functions, using them, passing data in and out.</a></h3>
                                    <ul className="ped  list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>Intermediate </li>
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
                                        <span className="font-size-xs text-muted">(3,245)</span>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col-auto">
                                            <img src="/assets/images/avatar/avatar-5.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Claire Robertson</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="mb-5">
                                <h2 className="mb-1">All JavaScript courses</h2>
                                <p className="mb-0">Geeks instructors specialize in teaching the whole scope of JavaScript—beginner
                                to advanced. Whether you’re interested in back-end development, or app and website building,
              Udemy has a JavaScript course for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card  mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-react.jpg" alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">How to easily
                  create a website with React</a></h3>
                                    <ul className="ped  list-inline">
                                        <li className=" ped list-inline-item"><i className="far fa-clock mr-1"></i>3h 56m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>Beginner </li>
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
                                        <span className="font-size-xs text-muted">(6,300)</span>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col-auto">
                                            <img src="/assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Morris Mccoy</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card  mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-graphql.jpg" alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">GraphQL:
                  introduction to graphQL for beginners</a></h3>
                                    <ul className="ped list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
                                        </svg>Advance </li>
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
                                        <span className="font-size-xs text-muted">(4,300)</span>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col-auto">
                                            <img src="/assets/images/avatar/avatar-7.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Ted Hawkins</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card  mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-angular.jpg" alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Angular - the
                  complete guide for beginner</a></h3>
                                    <ul className="ped  list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>Beginner </li>
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
                                        <span className="font-size-xs text-muted">(5,410)</span>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col-auto">
                                            <img src="/assets/images/avatar/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Juanita Bell</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-python.jpg" alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h3 className="h4 mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">The Python
                  Course: build web application</a></h3>
                                    <ul className="ped  list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>Intermediate </li>
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
                                            <img src="/assets/images/avatar/avatar-9.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Claire Robertson</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card  mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-gatsby.jpg" alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Gatsby JS: build
                  blog with GraphQL and React</a></h4>
                                    <ul className="ped  list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>3h 56m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>Beginner </li>
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
                                            <img src="/assets/images/avatar/avatar-5.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Morris Mccoy</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card  mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-javascript.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 ">
                                        <a href="course-single.html" className="text-inherit">JavaScript : modern javaScript from the beginning</a></h4>
                                    <ul className="ped  list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
                                        </svg>Advance </li>
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
                                            <img src="/assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Ted Hawkins</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-css.jpg" alt="" className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">CSS: ultimate CSS
                  course from beginner to advanced</a></h4>
                                    <ul className="ped  list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>Beginner </li>
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
                                            <img src="/assets/images/avatar/avatar-7.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Juanita Bell</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
                                                <i className="fe fe-bookmark  "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="card  mb-4 card-hover">
                                <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-wordpress.jpg" alt=""
                                    className="card-img-top rounded-top" /></a>

                                <div className="card-body">
                                    <h4 className="mb-2 text-truncate-line-2 "><a href="course-single.html" className="text-inherit">Wordpress: complete
                  WordPress theme &amp; plugin development</a></h4>
                                    <ul className="ped  list-inline">
                                        <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                                        <li className="list-inline-item"><svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>Intermediate </li>
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
                                            <img src="/assets/images/avatar/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div className="col ml-2">
                                            <span className="ped">Claire Robertson</span>
                                        </div>
                                        <div className="col-auto">
                                            <a href="course-single.html" className="text-muted bookmark">
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
        </BaseContainer>
    );
}