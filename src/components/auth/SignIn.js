import React, { Component } from 'react'
import { connect } from "react-redux";

import { signIn } from "../../store/actions/authActions";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign In</h1>
                <hr />

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        onChange={this.handleChange} />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={this.handleChange} />
                </div>
                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: (login) => dispatch(signIn(login))
});

export default connect(null, mapDispatchToProps)(SignIn);