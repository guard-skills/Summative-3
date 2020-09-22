import React, { Component } from 'react';
import apiInfo from '../components/apiInfo';
import '../App.css';
import logo from '../assets/logo-large.png';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.loginForm)
        var data = {
            userName: formData.get('nameInput'),
            password: formData.get('passwordInput'),
        }
        var { setActiveView, listPosts, setUserId,} = this.props

        apiInfo.userCheck(data.userName).then(res => {
            var user = res.data
            if (user == null) {
                console.log('user is null')
            }
            else if (user != null && data.userName != null && data.password != null) {
                apiInfo.getUser(user.id).then(res => {
                    console.log(res.data.password)
                    if (data.password == res.data.password) {
                        setUserId(res.data)
                        listPosts()
                        setActiveView('dashboard')
                    } else {
                        console.log('wrong pw')
                    }
                })
            }
        })
    }

    toRegister = (e) => {
        e.preventDefault()
        var { setActiveView } = this.props
        setActiveView('landing-Register')
    }

    toLanding = (e) => {
		e.preventDefault()
		var { setActiveView } = this.props
		setActiveView('landing')
    }

    render() {

        return (
            <div className="container signin">

                <div className="logo">
                    <img src={logo} className="mw-100" alt="logo" />
                </div>

                <div className="signinBox">
                    <h3>Login</h3>

                    <form className="login-form" onSubmit={this.handleFormSubmit} ref={(el) => { this.loginForm = el }}>
                        <div className="form-group" >
                            <input type="text" className="form-control" name="nameInput" id="nameInput" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="passwordInput" id="passwordInput" placeholder="Password" />
                        </div>
                        <div className="subtext">
                            Don't have an account? <span onClick={this.toRegister}>Sign Up.</span>
                        </div>

                        <div className="buttons">
                            <button type="button" className="btn btn-light btn-back">
                                <i className="fas fa-arrow-left" onClick={this.toLanding}></i>
                            </button>
                            <button type="submit" className="btn btn-primary btn-next">Next</button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default Login
