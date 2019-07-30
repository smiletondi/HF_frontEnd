import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        confirmedPassword: ""
    }

    handleSubmit = (e) => {
        console.log("Form submited");
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                    <small className="form-text text-muted">You only know your password (Your password is stored encrypted in our database).</small>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmedPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="confirmedPassword" 
                        placeholder="Confirm your Password"
                        onChange={this.handleChange} />
                </div>
                <input type="submit" value="Sign Up" className="btn btn-primary" />
            </form>
        )
    }
}

export default SignUp;