import React from 'react';
import { useQuery } from '@apollo/client';
import * as Query from '../graphql';
import { BaseContainer } from '../layouts/Containers';
import { Link } from 'react-router-dom';

export default function Single({ match }) {
    const { params: { slug }
    } = match;
    const { loading, error, data } = useQuery(Query.GET_SINGLE_COURSE, {
        variables: { slug },
        onCompleted: (e) => {
            const { geeksAcademy } = e;
            document.title = geeksAcademy?.headline || '';
        }
    });

    return (
        <BaseContainer loading={loading} error={error}>
            <div className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div>
                                <h1 className="text-white display-4 font-weight-semi-bold">{data?.geeksAcademy?.headline}</h1>
                                <p className="text-white mb-6 lead">{data?.geeksAcademy?.description?.text}</p>
                                <div className="d-flex align-items-center">
                                    <a href="#!" className="bookmark text-white text-decoration-none">
                                        <i className="fe fe-bookmark text-white-50 mr-2"></i>Bookmark
                                    </a>

                                    <span className="text-white ml-3"><i className="fe fe-user text-white-50"></i> 1200 Enrolled </span>
                                    <span className="ml-4">
                                        <i className="mdi mdi-star mr-n1 text-warning"></i>&nbsp;
                                        <i className="mdi mdi-star mr-n1 text-warning"></i>&nbsp;
                                        <i className="mdi mdi-star mr-n1 text-warning"></i>&nbsp;
                                        <i className="mdi mdi-star mr-n1 text-warning"></i>&nbsp;
                                        <i className="mdi mdi-star mr-n1-half text-warning"></i>
                                        <span className="text-white">(140)</span>
                                    </span>
                                    <span className="text-white ml-4 d-none d-md-block">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#DBD8E9"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                        </svg>
                                        <span className="align-middle">
                                            &nbsp;{data?.geeksAcademy?.difficulty?.text}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-12 mt-n8 mb-4 mb-lg-0">

                            <div className="card rounded-lg">
                                <div className="card-header border-bottom-0 p-0">
                                    <div>
                                        <ul className="nav nav-lb-tab" id="tab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="table-tab" data-toggle="pill" href="#table" role="tab" aria-controls="table" aria-selected="true">Contents</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="description-tab" data-toggle="pill" href="#description" role="tab" aria-controls="description" aria-selected="false">Description</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="review-tab" data-toggle="pill" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="transcript-tab" data-toggle="pill" href="#transcript" role="tab" aria-controls="transcript" aria-selected="false">Transcript</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="faq-tab" data-toggle="pill" href="#faq" role="tab" aria-controls="faq" aria-selected="false">FAQ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content" id="tabContent">
                                        <div className="tab-pane fade show active" id="table" role="tabpanel" aria-labelledby="table-tab">

                                            <div className="accordion" id="courseAccordion">
                                                <div>
                                                    <ul className="list-group list-group-flush">
                                                        {
                                                            data?.geeksAcademy?.courseOutlines?.map((v, i) => {
                                                                return (
                                                                    <li key={i} className="list-group-item px-0 pt-0">
                                                                        <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none active collapsed" data-toggle="collapse" href={`#${v.id}`} aria-expanded="false" aria-controls="courseTwo">
                                                                            <div className="mr-auto">
                                                                                {v.title}
                                                                            </div>
                                                                            <span className="chevron-arrow ml-4">
                                                                                <i className="fe fe-chevron-down font-size-md"></i>
                                                                            </span>
                                                                        </a>
                                                                        <div className="collapse" id={v.id} data-parent="#courseAccordion">
                                                                            <div className="pt-3 pb-2">
                                                                                {
                                                                                    v?.lesson && v?.lesson?.map((va, _in) => {
                                                                                        return (
                                                                                            <a key={_in} href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                                                                                <div className="text-truncate">
                                                                                                    <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md"></i></span>
                                                                                                    <span>{va?.title}</span>
                                                                                                </div>
                                                                                                <div className="text-truncate">
                                                                                                    <span>{va?.duration}</span>
                                                                                                </div>
                                                                                            </a>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </li>)
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">

                                            <div className="mb-4">
                                                <h3 className="hed">Course Descriptions</h3>
                                                <p className="ped">
                                                    If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you'll discover the types of applications that can be
                                                    built with JavaScript, and the platforms they’ll run on.
                                                </p>
                                                <p className="ped">
                                                    Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript
                                                    to create simple programs, create simple web applications, and modify web pages.
                                                </p>
                                            </div>

                                            <h4 className="hed">What you’ll learn</h4>
                                            <div className="row mb-3">
                                                <div className="col-12 col-md-6">
                                                    <ul className="list-unstyled">
                                                        <li className="d-flex mb-2">
                                                            <i className="far fa-check-circle text-success mr-2 mt-2"></i>
                                                            <span className="ped">Recognize the importance of understanding your objectives when addressing an audience.</span>
                                                        </li>
                                                        <li className="d-flex mb-2">
                                                            <i className="far fa-check-circle text-success mr-2 mt-2"></i>
                                                            <span className="ped">Identify the fundaments of composing a successful close.</span>
                                                        </li>
                                                        <li className="d-flex mb-2">
                                                            <i className="far fa-check-circle text-success mr-2 mt-2"></i>
                                                            <span className="ped">Explore how to connect with your audience through crafting compelling stories.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <ul className="list-unstyled">
                                                        <li className="d-flex mb-2">
                                                            <i className="far fa-check-circle text-success mr-2 mt-2"></i>
                                                            <span className="ped">Examine ways to connect with your audience by personalizing your content.</span>
                                                        </li>
                                                        <li className="d-flex mb-2">
                                                            <i className="far fa-check-circle text-success mr-2 mt-2"></i>
                                                            <span className="ped">Break down the best ways to exude executive presence.</span>
                                                        </li>
                                                        <li className="d-flex mb-2">
                                                            <i className="far fa-check-circle text-success mr-2 mt-2"></i>
                                                            <span className="ped">Explore how to communicate the unknown in an impromptu communication.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="ped">Maecenas viverra condimentum nulla molestie condimentum. Nunc ex libero, feugiat quis lectus vel, ornare euismod ligula. Aenean sit amet arcu nulla.</p>
                                            <p className="ped">Duis facilisis ex a urna blandit ultricies. Nullam sagittis ligula non eros semper, nec mattis odio ullamcorper. Phasellus feugiat sit amet leo eget consectetur.</p>
                                        </div>

                                        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                            <div className="mb-3">
                                                <h3 className="hed">How students rated this courses</h3>
                                                <div className="row align-items-center">
                                                    <div className="col-auto text-center">
                                                        <h3 className="display-2 font-weight-bold">4.5</h3>
                                                        <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                        <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                        <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                        <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                        <i className="mdi mdi-star mr-n1-half text-warning"></i>
                                                        <p className="ped font-size-xs">(Based on 27 reviews)</p>
                                                    </div>

                                                    <div className="col pt-3 order-3 order-md-2">
                                                        <div className="progress mb-3" style={{ height: 6 }}>
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <div className="progress mb-3" style={{ height: 6 }}>
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <div className="progress mb-3" style={{ height: 6 }}>
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <div className="progress mb-3" style={{ height: 6 }}>
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <div className="progress mb-0" style={{ height: 6 }}>
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-auto col-6 order-2 order-md-3">

                                                        <div>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <span className="ped">53%</span>
                                                        </div>
                                                        <div>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <span className="ped">36%</span>
                                                        </div>
                                                        <div>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <span className="ped">9%</span>
                                                        </div>
                                                        <div>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <span className="ped">3%</span>
                                                        </div>
                                                        <div>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <i className="mdi mdi-star mr-n1 text-light"></i>
                                                            <span className="ped">2%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="my-5" />
                                            <div className="mb-3">
                                                <div className="d-lg-flex align-items-center justify-content-between mb-5">

                                                    <div className="mb-3 mb-lg-0">
                                                        <h3 className="hed">Reviews</h3>
                                                    </div>
                                                    <div>

                                                        <form className="form-inline">
                                                            <div className="d-flex align-items-center mr-2">
                                                                <span className="position-absolute pl-3">
                                                                    <i className="fe fe-search"></i>
                                                                </span>
                                                                <input type="search" className="form-control pl-6" placeholder="Search Review" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                                <div className="media border-bottom pb-4 mb-4">
                                                    <img src="/assets/images/avatar/avatar-2.jpg" alt="" className="rounded-circle avatar-lg" />
                                                    <div className="media-body ml-3">
                                                        <h4 className="hed">
                                                            Max Hawkins
                                                        <span className="ped font-size-xs text-muted">2 Days ago</span>
                                                        </h4>
                                                        <div className="font-size-xs mb-2">
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                        </div>
                                                        <p className="ped">Lectures were at a really good pace and I never felt lost. The instructor was well informed and allowed me to learn and navigate Figma easily.</p>
                                                        <div className="d-lg-flex">
                                                            <p className="ped">Was this review helpful?</p>
                                                            <a href="#!" className="btn btn-xs btn-primary ml-lg-3">Yes</a>
                                                            <a href="#!" className="btn btn-xs btn-outline-white ml-1">No</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="media border-bottom pb-4 mb-4">
                                                    <img src="/assets/images/avatar/avatar-3.jpg" alt="" className="rounded-circle avatar-lg" />
                                                    <div className="media-body ml-3">
                                                        <h4 className="hed">Arthur Williamson <span className="ped font-size-xs text-muted">3 Days ago</span>
                                                        </h4>
                                                        <div className="font-size-xs mb-2">
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                        </div>
                                                        <p className="ped">Its pretty good.Just a reminder that there are also students with Windows, meaning Figma its a bit different of yours. Thank you!</p>
                                                        <div className="d-lg-flex">
                                                            <p className="ped">Was this review helpful?</p>
                                                            <a href="#!" className="btn btn-xs btn-primary ml-lg-3">Yes</a>
                                                            <a href="#!" className="btn btn-xs btn-outline-white ml-1">No</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="media border-bottom pb-4 mb-4">
                                                    <img src="/assets/images/avatar/avatar-4.jpg" alt="" className="rounded-circle avatar-lg" />
                                                    <div className="media-body ml-3">
                                                        <h4 className="hed">Claire Jones <span className="ped font-size-xs text-muted">4 Days ago</span></h4>
                                                        <div className="font-size-xs mb-2">
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                        </div>
                                                        <p className="ped">
                                                            Great course for learning Figma, the only bad detail would be that some icons are not included in the assets. But 90% of the icons needed are included, and the voice of the instructor was very clear and easy to understood.
                                                    </p>
                                                        <div className="d-lg-flex">
                                                            <p className="ped">Was this review helpful?</p>
                                                            <a href="#!" className="btn btn-xs btn-primary ml-lg-3">Yes</a>
                                                            <a href="#!" className="btn btn-xs btn-outline-white ml-1">No</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <img src="/assets/images/avatar/avatar-5.jpg" alt="" className="rounded-circle avatar-lg" />
                                                    <div className="media-body ml-3">
                                                        <h4 className="hed">
                                                            Bessie Pena
                                                        <span className="ped font-size-xs text-muted">5 Days ago</span>
                                                        </h4>
                                                        <div className="font-size-xs mb-2">
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                            <i className="mdi mdi-star mr-n1 text-warning"></i>
                                                        </div>
                                                        <p className="ped">
                                                            I have really enjoyed this class and learned a lot, found it very inspiring and helpful, thank you!
                                                        <i className="em em-heart_eyes ml-2 font-size-xs"></i>
                                                        </p>
                                                        <div className="d-lg-flex">
                                                            <p className="ped">Was this review helpful?</p>
                                                            <a href="#!" className="btn btn-xs btn-primary ml-lg-3">Yes</a>
                                                            <a href="#!" className="btn btn-xs btn-outline-white ml-1">No</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="transcript" role="tabpanel" aria-labelledby="transcript-tab">

                                            <div>
                                                <h3 className="hed">Transcript from the "Introduction" Lesson</h3>
                                                <div className="hed">
                                                    <h4 className="hed">Course Overview <a href="#!" className="text-primary ml-2 h4">[00:00:00]</a></h4>
                                                    <p className="ped">
                                                        My name is John Deo and I work as human duct tape at Gatsby, that means that I do a lot of different things. Everything from dev roll to writing content to writing code. And I used to work as an architect at IBM. I live in Portland, Oregon.
                                                </p>
                                                </div>
                                                <div className="hed">
                                                    <h4 className="hed">Introduction <a href="#!" className="text-primary ml-2 h4">[00:00:16]</a></h4>
                                                    <p className="ped">
                                                        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                                                        to write React components in your markdown.
                                                </p>
                                                </div>
                                                <div className="hed">
                                                    <h4 className="hed">Why Take This Course? <a href="#!" className="text-primary ml-2 h4">[00:00:37]</a></h4>
                                                    <p className="ped">
                                                        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                                                        to write React components in your markdown.
                                                </p>
                                                </div>
                                                <div className="hed">
                                                    <h4 className="hed">A Look at the Demo Application <a href="#!" className="text-primary ml-2 h4">[00:00:54]</a></h4>
                                                    <p className="ped">
                                                        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                                                        to write React components in your markdown.
                                                </p>
                                                    <p className="ped">
                                                        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                                                        to write React components in your markdown.
                                                </p>
                                                </div>
                                                <div className="hed">
                                                    <h4 className="hed">Summary <a href="#!" className="text-primary ml-2 h4">[00:01:31]</a></h4>
                                                    <p className="ped">
                                                        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                                                        to write React components in your markdown.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">

                                            <div>
                                                <h3 className="hed">Course - Frequently Asked Questions</h3>
                                                <div className="hed">
                                                    <h4 className="hed">How this course help me to design layout?</h4>
                                                    <p className="ped">
                                                        My name is Jason Woo and I work as human duct tape at Gatsby, that means that I do a lot of different things. Everything from dev roll to writing content to writing code. And I used to work as an architect at IBM. I live in Portland, Oregon.
                                                </p>
                                                </div>
                                                <div className="hed">
                                                    <h4 className="hed">What is important of this course?</h4>
                                                    <p className="ped">
                                                        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                                                        to write React components in your markdown.
                                                </p>
                                                </div>
                                                <div className="hed">
                                                    <h4 className="hed">Why Take This Course?</h4>
                                                    <p className="ped">
                                                        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                                                        to write React components in your markdown.
                                                </p>
                                                </div>
                                                <div className="hed">
                                                    <h4 className="hed">Is able to create application after this course?</h4>
                                                    <p className="ped">
                                                        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                                                        to write React components in your markdown.
                                                </p>
                                                    <p className="ped">
                                                        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                                                        to write React components in your markdown.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-12 mt-lg-n22">
                            <div className="card mb-3 mb-4">
                                <div className="p-1">
                                    <div className="d-flex justify-content-center position-relative rounded py-10 border-white border rounded-lg bg-cover" style={{ backgroundImage: `url('${data?.geeksAcademy?.banner?.url}')` }}>
                                        <a className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none" href="https://www.youtube.com/watch?v=JRzWRZahOVU">
                                            <i className="fe fe-play"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <span className="text-dark font-weight-bold h2">${data?.geeksAcademy?.currentPrice}</span>&nbsp;
                                        <del className="font-size-md text-muted">${data?.geeksAcademy?.originalPrice}</del>
                                    </div>
                                    <Link to={'/join/sign-up/'} className="btn btn-outline-primary btn-block">Enroll</Link>
                                </div>
                            </div>

                            <div className="card mb-4">
                                <div>

                                    <div className="card-header">
                                        <h4 className="hed">What’s included</h4>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="ped list-group-item bg-transparent"><i className="fe fe-play-circle align-middle mr-2 text-primary"></i>12 hours video</li>
                                        <li className="ped list-group-item bg-transparent"><i className="fe fe-award mr-2 align-middle text-success"></i>Certificate</li>
                                        <li className="ped list-group-item bg-transparent"><i className="fe fe-calendar align-middle mr-2 text-info"></i>12 Article
                                    </li>
                                        <li className="ped list-group-item bg-transparent"><i className="fe fe-video align-middle mr-2 text-secondary"></i>Watch Offline</li>
                                        <li className="ped list-group-item bg-transparent border-bottom-0"><i className="fe fe-clock align-middle mr-2 text-warning"></i>Lifetime access</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">

                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="position-relative">
                                            <img src="/assets/images/avatar/avatar-1.jpg" alt="" className="rounded-circle avatar-xl" />
                                            <a href="#!" className="position-absolute mt-2 ml-n3" data-toggle="tooltip" data-placement="top" title="" data-original-title="Verifed">
                                                <img src="/assets/images/svg/checked-mark.svg" alt="" height="30" width="30" />
                                            </a>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="hed">Jenny Wilson</h4>
                                            <p className="ped font-size-xs">Front-end Developer, Designer</p>
                                            <span className="ped font-size-xs"><span className="text-warning">4.5</span><span className="mdi mdi-star text-warning mr-2"></span>Instructor Rating</span>
                                        </div>
                                    </div>
                                    <div className="border-top row mt-3 border-bottom mb-3 no-gutters">
                                        <div className="col">
                                            <div className="pr-1 pl-2 py-3">
                                                <h5 className="hed">11,604</h5>
                                                <span className="ped">Students</span>
                                            </div>
                                        </div>
                                        <div className="col border-left">
                                            <div className="pr-1 pl-3 py-3">
                                                <h5 className="hed">32</h5>
                                                <span className="ped">Courses</span>
                                            </div>
                                        </div>
                                        <div className="col border-left">
                                            <div className="pr-1 pl-3 py-3">
                                                <h5 className="hed">12,230</h5>
                                                <span className="ped">Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="ped">I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.</p>
                                    <a href="instructor-profile.html" className="btn btn-outline-white btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="pt-12 pb-3">
                        <div className="row d-md-flex align-items-center mb-4">
                            <div className="col-12">
                                <h2 className="mb-3">Related Courses</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">

                                <div className="card mb-4 card-hover">
                                    <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-react.jpg" alt="" className="card-img-top rounded-top" /></a>

                                    <div className="card-body">
                                        <h4 className="hed text-truncate-line-2"><a href="course-single.html" className="text-inherit">How to easily create a website with React</a></h4>
                                        <ul className="mb-3 list-inline">
                                            <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>3h 56m</li>
                                            <li className=" ped list-inline-item">
                                                <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                    <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                    <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                </svg> Beginner
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
                                                <img src="/assets/images/avatar/avatar-1.jpg" className="rounded-circle avatar-xs" alt="" />
                                            </div>
                                            <div className="col ml-2">
                                                <span className="ped">Morris Mccoy</span>
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
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card mb-4 card-hover">
                                    <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-graphql.jpg" alt="" className="card-img-top rounded-top" /></a>

                                    <div className="card-body">
                                        <h4 className="hed text-truncate-line-2"><a href="course-single.html" className="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>
                                        <ul className="mb-3 list-inline">
                                            <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 46m</li>
                                            <li className="ped list-inline-item">
                                                <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                    <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                                    <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
                                                </svg> Advance
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
                                                <img src="/assets/images/avatar/avatar-2.jpg" className="rounded-circle avatar-xs" alt="" />
                                            </div>
                                            <div className="col ml-2">
                                                <span className="ped">Ted Hawkins</span>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#!" className="text-muted bookmark">
                                                    <i className="fe fe-bookmark "></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card mb-4 card-hover">
                                    <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-angular.jpg" alt="" className="card-img-top rounded-top" /></a>
                                    <div className="card-body">
                                        <h4 className="hed text-truncate-line-2"><a href="course-single.html" className="text-inherit">Angular - the complete guide for beginner</a></h4>
                                        <ul className="mb-3 list-inline">
                                            <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>1h 30m</li>
                                            <li className="ped list-inline-item">
                                                <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0
                                        0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                    <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                    <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                </svg> Beginner
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
                                                <img src="/assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="" />
                                            </div>
                                            <div className="col ml-2">
                                                <span className="ped">Juanita Bell</span>
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
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card mb-4 card-hover">
                                    <a href="course-single.html" className="card-img-top"><img src="/assets/images/course/course-python.jpg" alt="" className="card-img-top rounded-top" /></a>
                                    <div className="card-body">
                                        <h4 className="hed text-truncate-line-2"><a href="course-single.html" className="text-inherit">The Python Course: build web application</a></h4>
                                        <ul className="mb-3 list-inline">
                                            <li className="ped list-inline-item"><i className="far fa-clock mr-1"></i>2h 30m</li>
                                            <li className="ped list-inline-item">
                                                <svg className="mr-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                    <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                                    <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                </svg> Intermediate
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
                                                <img src="/assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
                                            </div>
                                            <div className="col ml-2">
                                                <span className="ped">Claire Robertson</span>
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

        </BaseContainer>
    )
}