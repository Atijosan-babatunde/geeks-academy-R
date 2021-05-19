import React from "react";
import {Link} from "react-router-dom";


export function Body(){
    return(
        <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
           
            <div className="card shadow ">
              
              <div className="card-body p-6">
                <div className="mb-4">
                  <Link to="/"><img src="images/brand/logo/logo-icon.svg" className="mb-4" alt=""/></Link>
                  <h1 className="mb-1 font-weight-bold">Sign in</h1>
                  <span>Don’t have an account? <Link to="sign-up" className="ml-1">Sign up</Link></span>
                </div>
                
                <form>
                      
                  <div className="form-group">
                    <label for="email" className="form-label">Username or email</label>
                    <input type="email" id="email" className="form-control" name="email" placeholder="Email address here" required=""/>
                  </div>
                      
                  <div className="form-group">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" name="password" placeholder="**************" required=""/>
                  </div>
                      
                  <div className="d-lg-flex justify-content-between align-items-center mb-4">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="rememberme"/>
                      <label className="custom-control-label " for="rememberme">Remember me</label>
                    </div>
                    <div>
                      <a href="forget-password.html">Forgot your password?</a>
                    </div>
                  </div>
                  <div>
                        
                        <Link to="course-checkout" className="btn btn-primary btn-block">Sign in</Link>
                  </div>
                  <hr className="my-4"/>
                  <div className="mt-4 text-center">
                    
                    <a href="#!" className="btn-social btn-social-outline btn-facebook">
                      <i className="fab fa-facebook"></i>
                    </a>
                    
                    <a href="#!" className="btn-social btn-social-outline btn-twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    
                    <a href="#!" className="btn-social btn-social-outline btn-linkedin">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    
                    <a href="#!" className="btn-social btn-social-outline btn-github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}