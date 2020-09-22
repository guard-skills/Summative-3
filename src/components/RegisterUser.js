import React, { Component } from 'react';
import apiInfo from '../components/apiInfo';
import '../App.css';
import logo from '../assets/logo-large.png';

class RegisterUser extends Component {

	constructor(props) {
		super(props);
	}

	handleFormSubmit = (e) => {
		e.preventDefault()
		var formData = new FormData(this.addForm)
		var data = {
			userName: formData.get('usernameInput'),
			email: formData.get('emailInput'),
			password: formData.get('passwordInput'),
			location: formData.get('regionInput'),
			id: Date.now() + Math.round(Math.random() * (1000000 - 1) + 1),
			profileImage: '',
			posts: [],
		}
		var { setActiveView, listPosts, setUserId } = this.props
		console.log(data)
		setUserId(data)

		apiInfo.postUser(data).then(() => listPosts())
		setActiveView('dashboard')
	}

	toLogin = (e) => {
		e.preventDefault()
		var { setActiveView } = this.props
		setActiveView('landing-Login')
    }
    
    toLanding = (e) => {
		e.preventDefault()
		var { setActiveView } = this.props
		setActiveView('landing')
    }
    

	render() {

		return (
                <div className="container signup">

                    <div className="logo">
                        <img src={logo} className="mw-100" alt="logo" />
                    </div>

                    <div className="signupBox">
                        <h3>Sign Up</h3>

                        <form className="register-form" onSubmit={this.handleFormSubmit} ref={(el) => { this.addForm = el }}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="usernameInput" id="usernameInput" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="emailInput" id="emailInput" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="passwordInput" id="passwordInput" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <select className="form-control custom-select" name="regionInput" id="regionInput">
                                    <option defaultValue="Auckland">Auckland</option>
                                    <option value="Northland">Northland</option>
                                    <option value="Waikato">Waikato</option>
                                    <option value="Wellington">Wellington</option>
                                </select>
                            </div>
                            <div className="subtext">
                                Already have an account? <span onClick={this.toLogin}>Login.</span>
                            </div>

                            <div className="buttons">
                                <div type="button" className="btn btn-light btn-back">
                                    <i className="fas fa-arrow-left" onClick={this.toLanding}></i>
                                </div>
                                <button type="submit" className="btn btn-primary btn-next">Next</button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default RegisterUser
