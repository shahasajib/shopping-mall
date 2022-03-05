import React from 'react';


const Signup = () => {
    return (
        <>
         {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn btn-outline-dark me-1" data-bs-toggle="modal" data-bs-target="#SignUpModel"><span className='fa fa-user-plus me-1'></span>
        Sign Up
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="SignUpModel" tabIndex="-1" aria-labelledby="SignUpModelLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="SignUpModelLabel">Log In</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <button className="btn btn-outline-primary w-100 mb-4"><span className='fa fa-google'></span> Sign up With Google</button>
             <button className="btn btn-outline-primary w-100 mb-4"><span className='fa fa-facebook'></span> Sign up With facebook</button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                {/* <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-outline-primary">Submit</button>
              </form>
            </div>
            
          </div>
        </div>
      </div>

        </>
    );
};

export default Signup;