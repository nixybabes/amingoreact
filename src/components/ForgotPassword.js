import React, { Component } from "react";

export class ForgotPassword extends Component {
    render() {
        return (
            <form>
                <h3>Password Reset</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Email Address" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Me An Email</button>
                <p className="forgot-password text-right">
                    <a href="/log-in">Return to Login</a>
                </p>
            </form>
        );
    }
}

export default ForgotPassword; 