import React from "react";
import {Link} from "react-router-dom";


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
export function Content(){
    return(
        <div className="py-lg-6 py-4 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div>
                <h1 className="text-white display-4 mb-0">Checkout Page</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};
export function Body(){
    return(
        <div className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
             
              <div className="card  mb-4">
                
                <div className="card-header">
                  <h3 className="hed">Billing Address</h3>
                </div>
                
                <div className="card-body">
                  
                  <form className="form-row">
                        
                    <div className="form-group col-12 col-md-6">
                      <label className="form-label" for="fname">First Name</label>
                      <input type="text" id="fname" className="form-control" placeholder="First Name" required=""/>
                    </div>
                       
                    <div className="form-group col-12 col-md-6">
                      <label className="form-label" for="lname">Last Name</label>
                      <input type="text" id="lname" className="form-control" placeholder="Last Name" required=""/>
                    </div>
                        
                    <div className="form-group col-12 col-md-12">
                      <label className="form-label" for="phone">Phone Number <span className="text-muted">(Optional)</span></label>
                      <input type="text" id="phone" className="form-control" placeholder="Phone" required=""/>
                    </div>
                        
                    <div className="form-group col-12 col-md-12">
                      <label className="form-label" for="address">Address Line 1</label>
                      <input type="text" id="address" className="form-control" placeholder="Address" required=""/>
                    </div>
                       
                    <div className="form-group col-12 col-md-12">
                      <label className="form-label" for="address2">Address Line 2 <span className="text-muted">(Optional)</span></label>
                      <input type="text" id="address2" className="form-control" placeholder="Address" required=""/>
                    </div>
                      
                    <div className="form-group col-12 col-md-4">
                      <label className="form-label">State</label>
                      <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                        <option value="">Select State</option>
                        <option value="1">Gujarat</option>
                        <option value="2">Rajasthan</option>
                        <option value="3">Maharashtra</option>
                      </select><button type="button" tabindex="-1" className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown"  aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Select State"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select State</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabindex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
    
                    </div>
                        
                    <div className="form-group col-12 col-md-4">
                      <label className="form-label">Country</label>
                      <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                        <option value="">Select Country</option>
                        <option value="1">India</option>
                        <option value="2">UK</option>
                        <option value="3">USA</option>
                      </select><button type="button" tabindex="-1" className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown"  aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Select Country"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select Country</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabindex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                    </div>
                        
                    <div className="form-group col-12 col-md-4">
                      <label className="form-label" for="zipCode">Zip/Postal Code</label>
                      <input type="text" id="zipCode" className="form-control" placeholder="Zip" required=""/>
                    </div>
                    <div className="col-12">
                          
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="shippingAddress"/>
                        <label className="ped custom-control-label" for="shippingAddress">Shipping address is the same as my billing
                          address</label>
                      </div>
                          
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="saveCard" checked=""/>
                        <label className="ped custom-control-label" for="saveCard">Save this information for next time</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            
              <div className="card  mb-3 mb-lg-0">
                
                <div className="card-header">
                  <h3 className="hed">Payment Method</h3>
                </div>
                
                <div className="card-body">
                     
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="cardRadioone" name="cardRadioone" className="custom-control-input" checked=""/>
                    <label className="custom-control-label " for="cardRadioone"><span className="  text-dark">Credit
                        or Debit card</span></label>
                  </div>
                  
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="cardRadioTwo" name="cardRadioone" className="custom-control-input"/>
                    <label className="custom-control-label" for="cardRadioTwo"><span className="  text-dark">PayPal</span></label>
                  </div>
                  
                  <form className="form-row " id="cardpayment">
                    
                    <div className="form-group mt-4 col-12">
                      
                      <label className="d-flex justify-content-between align-items-center form-label" for="cc-mask">Card
                        Number <span><i className="fab fa-cc-amex mr-1  text-primary"></i><i className="fab fa-cc-mastercard mr-1  text-primary"></i> <i className="fab fa-cc-discover mr-1  text-primary"></i> <i className="fab fa-cc-visa  text-primary"></i></span></label>
                      <div className="input-group">
                        <input type="text" className="form-control" id="cc-mask" data-inputmask="'mask': '9999 9999 9999 9999'" inputmode="numeric" placeholder="xxxx-xxxx-xxxx-xxxx" required=""/>
                        <div className="input-group-append border-left-0">
                          <span className="input-group-text" id="basic-addon2"><i className="fe fe-lock "></i></span>
                        </div>
                      </div>
                      <small className="text-muted">Full name as displayed on card.</small>
                    </div>
                    
                    <div className="form-group col-12 col-md-4">
                      <label className="form-label">Month</label>
                      <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                        <option value="">Month</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                      </select><button type="button" tabindex="-1" className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown"  aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Month"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Month</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-3" tabindex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                    </div>
                    
                    <div className="form-group col-12 col-md-4">
                      <label className="form-label">Year</label>
                      <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                        <option value="">Year</option>
                        <option value="June">2018</option>
                        <option value="July">2019</option>
                        <option value="August">2020</option>
                        <option value="Sep">2021</option>
                        <option value="Oct">2022</option>
                      </select><button type="button" tabindex="-1" className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown"  aria-owns="bs-select-4" aria-haspopup="listbox" aria-expanded="false" title="Year"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Year</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-4" tabindex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                    </div>
                    
                    <div className="form-group col-12 col-md-4">
                      <label for="cvv" className="form-label">CVV Code <i className="fe fe-help-circle ml-1 font-size-xs" data-toggle="tooltip" data-placement="right" title="" data-original-title="A 3 - digit number, typically printed on the back of a card."></i></label>
                      <input type="password" className="cc-inputmask form-control" name="cvv" id="cvv" placeholder="xxx" maxlength="3"/>
                    </div>
                   
                    <div className="form-group col-12">
                      <label for="nameoncard" className="form-label">Name on Card</label>
                      <input id="nameoncard" type="text" className="form-control" name="nameoncard" placeholder="Name" required=""/>
                    </div>
                    
                    <div className="form-group col-6">
                      <label className="form-label">Country</label>
                      <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                        <option value="">India</option>
                        <option value="uk">UK</option>
                        <option value="usa">USA</option>
                      </select><button type="button" tabindex="-1" className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown"  aria-owns="bs-select-5" aria-haspopup="listbox" aria-expanded="false" title="India"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">India</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-5" tabindex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                    </div>
                    
                    <div className="form-group col-6">
                      <label for="postalcode" className="form-label">Zip/Postal Code</label>
                      <input id="postalcode" type="text" className="form-control" name="postalcode" placeholder="Zipcode" required=""/>
                    </div>
                    
                    <div className="col-12 mb-5">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="ped custom-control-label " for="customCheck1">Remember this
                          card</label>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      
                      <div>
                        <button type="submit" className="btn btn-primary mb-3 mb-lg-0 mr-4">Make a
                          Payment</button>
                      </div>
                    </div>
                    
                    <div className="col-md-8 col-12 d-flex align-items-center justify-content-end">
                      <small className="ped">By click start learning, you agree to our <a href="#!">Terms of
                          Service and Privacy Policy.</a></small>
                    </div>
                  </form>
                  
                  <form id="internetpayment" style={{display: 'none'}}>
                    <div className="form-group mt-4 ">
                      <label for="paypalemail" className="form-label">PayPal</label>
                      <input type="email" id="paypalemail" name="paypalemail" placeholder="Enter your PayPal email" className="form-control" required=""/>
                    </div>
                    <button type="submit" className="btn btn-primary">PayPal Checkout</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              
              <div className="card  border-0 mb-3">
                
                <div className="p-5 text-center">
                  <span className="badge badge-warning">Selected Plan</span>
                  <div className="mb-5 mt-3">
                    <h1 className="hed font-weight-bold">Individual</h1>
                    <p className="ped ">Access all <span className="text-dark font-weight-medium">premium courses,
                        workshops, and mobile apps.</span> Renewed monthly.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <span className="h3 mb-0 font-weight-bold text-primary">$</span>
                    <div className="display-4 font-weight-bold text-primary">39</div>
                    <span className=" align-self-end mb-1">/Monthly</span>
                  </div>
                </div>
                <hr className="m-0"/>
                <div className="p-5">
                  <h4 className="font-weight-bold hed">Everything in Starter, plus:</h4>
                  
                  <ul className="list-unstyled mb-0">
                    <li className="ped">
                      <span className="text-success mr-2"><i className="far fa-check-circle"></i></span>
                      <span>Offline viewing </span>
                    </li>
                    <li className="ped">
                      <span className="text-success mr-2"><i className="far fa-check-circle"></i></span>
                      <span><span className="font-weight-bold text-dark">Offline </span>projects </span>
                    </li>
                    <li className="ped">
                      <span className="text-success mr-2"><i className="far fa-check-circle"></i></span>
                      <span><span className="font-weight-bold text-dark">Unlimited </span>storage</span>
                    </li>
                    <li className="ped">
                      <span className="text-success mr-2"><i className="far fa-check-circle"></i></span>
                      <span>Custom domain support </span>
                    </li>
                    <li className="ped">
                      <span className="text-success mr-2"><i className="far fa-check-circle"></i></span>
                      <span>Bulk editing </span>
                    </li>
                    <li className="ped">
                      <span className="text-success mr-2"><i className="far fa-check-circle"></i></span>
                      <span>12 / 5 support</span>
                    </li>
                  </ul>
                </div>
                
                <hr className="m-0"/>
                <div className="p-4">
                  <a href="#!" className="btn btn-outline-primary">Change the Plan</a>
                </div>
              </div>
             
              <div className="card border-0 mb-3 mb-lg-0">
               
                <div className="card-body">
                  <h3 className="hed">Discount Codes</h3>
                  <form>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Enter your code" aria-describedby="couponCode"/>
                      <div className="input-group-append">
                        <button className="btn btn-secondary" id="couponCode">Apply</button>
                      </div>
                    </div>
                  </form>
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
                <Link className="nav-link active pl-0" to ="/privacy/">Privacy </Link>
                    <Link className="nav-link" to="course-checkout" >Terms </Link>
                    <Link className="nav-link" to="course-checkout" >Feedback</Link>
                    <Link className="nav-link" to="course-checkout" >Support</Link>
                </nav>
            </div>
        </div>
    </div>
</div>
    )
}