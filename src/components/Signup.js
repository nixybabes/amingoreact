import React, { Component } from "react";

export class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Parent Sign Up</h3>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Title</label>
                        <select className="form-control">
                            <option defaultValue>Select...</option>
                            <option>Mr</option>
                            <option>Miss</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                        </select>
                    </div>
                    <div className="form-group col-md-8">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="text" className="form-control" placeholder="Date of Birth" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Country</label>
                        <select className="form-control">
                            <option defaultValue>Select...</option>
                            <option>+1</option>
                            <option>+44</option>
                            <option>+91</option>
                            <option>+971</option>
                        </select>
                    </div>
                    <div className="form-group col-md-8">
                        <label>Mobile Phone No.</label>
                        <input type="text" className="form-control" placeholder="Mobile Phone No." />
                    </div>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/log-in">Log in</a>
                </p>
            </form>
        );
    }
}

export default SignUp;