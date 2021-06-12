import React from 'react';
import {Link} from 'react-router-dom';


export function Body(){
    return(
        <div className="container d-flex flex-column">
		<div className="row align-items-center justify-content-center no-gutters min-vh-100">
			<div className="col-lg-5 col-md-8 py-8 py-xl-0">
				
				<div className="card shadow">
					
					<div className="card-body p-6">
						<div className="mb-4">
							<Link to="/"><img src="images/brand/logo/logo-icon.svg" className="mb-4" alt=""/></Link>
							<h1 className="mb-1 font-weight-bold">Sign up</h1>
							<span>Already have an account?
								<Link to="sign-in" className="ml-1">Sign in</Link></span>
						</div>
						
						<form>
								
							<div className="form-group">
								<label for="username" className="form-label">User Name</label>
								<input type="text" id="username" className="form-control" name="username" placeholder="User Name" required=""/>
							</div>
								
							<div className="form-group">
								<label for="email" className="form-label">Email</label>
								<input type="email" id="email" className="form-control" name="email" placeholder="Email address here" required=""/>
							</div>
								
							<div className="form-group">
								<label for="password" className="form-label">Password</label>
								<input type="password" id="password" className="form-control" name="password" placeholder="**************" required=""/>
							</div>
								
							<div className="form-group">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="agreeCheck"/>
									<label className="custom-control-label" for="agreeCheck"><span>I agree to the <a href="terms-condition-page.html">Terms of
												Service </a>and
											<a href="terms-condition-page.html">Privacy Policy.</a></span></label>
								</div>
							</div>
							<div>
									
									<Link to="course-checkout" className="btn btn-primary btn-block">Create Account</Link>
								
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