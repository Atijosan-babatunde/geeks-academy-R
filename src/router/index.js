import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
// import { decrypt, fetchCookie, removeCookie } from '../redux/actions/helpers';
import * as Pages from '../web/pages';

// const auth = {
//     isAuthenticated: fetchCookie('token') ? true : false,
//     isAuthorized: window && window.localStorage && atob(decrypt(process.env.REACT_APP_ENC_SALT, window.localStorage.getItem('auth:id')))
// }

const AppRouter = ({ history, isOffline }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Pages.Landing} />
                <Route path="/courses/" exact component={Pages.Courses} />
                <Route path="/join/sign-in/" exact component={Pages.SignIn} />
                <Route path="/join/sign-up/" exact component={Pages.SignUp} />
                <Route path="/enroll/checkout/" exact component={Pages.Checkout} />
                <Route path="/course/:slug/" exact component={Pages.Single} />
                <Route component={Pages.E_404} />
            </Switch>
        </Router>
    )
}


// const PrivateRoute = ({ component: Component, ...rest }) => {
//     if (auth.isAuthenticated && auth.isAuthorized === 'false') removeCookie('token')
//     return (
//         <Route {...rest} render=
//             {props => auth.isAuthenticated && auth.isAuthorized === 'true' ?
//                 (<Component {...props} />) :
//                 (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
//             }
//         />
//     );
// }

// const SessionRoute = ({ component: Component, session, ...rest }) => {
//     return (
//         <Route {...rest} render=
//             {props => auth.isAuthenticated && auth.isAuthorized === 'true' ? 
//                 (<Redirect to={{ pathname: rest.pathRedirect, state: { from: props.location } }} />) :
//                 (<Component {...props} />)
//             }
//         />
//     );
// }

export default AppRouter;