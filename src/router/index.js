import React from 'react';
import {Router, Switch, Route} from "react-router-dom"
import LandingPage from "../page/LandingPage";
import CourseCategory from "../page/CourseCategory";
import CourseSingle from "../page/CourseSingle";
import SignUp from "../page/SignUp";
import SignIn from "../page/SignIn";
import CourseCheckout from "../page/CourseCheckout";
import { createBrowserHistory } from "history";

function Approuter() {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/course-category" component={CourseCategory} />
                <Route path="/course-single" component={CourseSingle}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/course-checkout" component={CourseCheckout}/>
            </Switch>
        </Router>
    )
}
export default Approuter