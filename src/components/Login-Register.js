import React, { Component } from 'react';
import logo from '../assets/logo-large.png';
import {Spring} from 'react-spring/renderprops';
import apiInfo from '../components/apiInfo';

class LoginRegister extends Component {
    constructor(props){
        super(props)

        this.state = {
            isSignUpActive: false,

            isLoginActive : false,

            loginMessage: '',

            noUser: '',

            registerMessage: ''
        }
    }

    handleLoginFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.loginForm)
        var data = {
            email: formData.get('email-input'),
            password: formData.get('password-input'),
        }
        var { setActiveView, listPosts, setUserId,} = this.props

        apiInfo.userCheck(data.email).then(res => {
            var user = res.data
            if (user == null) {
                this.setState({ noUser: 'Cannot find user. Please sign up or try another email.' })
            }
            else if (user != null && data.email!= null && data.password != null) {

                apiInfo.getUser(user.id).then(res => {
                    this.setState({ noUser: '' })
                    if (data.password === res.data.password) {
                        setUserId(res.data)
                        listPosts()
                        setActiveView('dashboard')
                        this.setState({ loginMessage: '' })
                        localStorage.setItem('id',user.id)
                    } else {
                        this.setState({ loginMessage: 'Email/password is incorrect. Please try again.' })
                    }
                })
            }
        })
    }

    handleRegisterFormSubmit = (e) => {
		e.preventDefault()
		var formData = new FormData(this.addForm)
		var data = {
			userName: formData.get('register-username-input'),
			email: formData.get('register-email-input'),
			password: formData.get('register-password-input'),
			location: formData.get('region-input'),
			id: Date.now() + Math.round(Math.random() * (1000000 - 1) + 1),
			profileImage: '',
			posts: [],
		}
        var { setActiveView, listPosts, setUserId } = this.props
        
        apiInfo.userCheck(data.email).then(res => {
            var email = res.data
            if (email == null) {
                apiInfo.userCheck(data.userName).then(res => {
                    var user = res.userName
                    if ( user == null ) {
                        console.log(data)
                        setUserId(data)
                        apiInfo.postUser(data).then(() => listPosts())
                        setActiveView('dashboard')
                    } else {
                        this.setState({ registerMessage: 'This user already exists.' })
                    }
                })
            } else {
                this.setState({ registerMessage: 'This user already exists.' })
            }
        })

	}

    setDashboardView = () => {
        var {setActiveView} = this.props

        setActiveView('dashboard')
    }

    setLandingStatus = (status) => {
        this.setState({ isSignUpActive: status })
    }

    //Sign Up
    openSignUp = () => {
        this.setState({ isSignUpActive: true })
    }

    closeSignUp = () => {
        this.setState({ isSignUpActive: false })
    }
    
    handleStartClick = () => {
        this.openSignUp();
    }

    //Login
    openLogin = () => {
        this.setState({ isLoginActive: true })
    }

    closeLogin = () => {
        this.setState({ isLoginActive: false })
    }

    handleLoginClick = () => {
        this.openLogin();
    }


    render() {
        const signupToggle = this.state.isSignUpActive
        const loginToggle = this.state.isLoginActive
        const noUser = this.state.noUser
        const loginMessage = this.state.loginMessage
        const registerMessage = this.state.registerMessage

        return (
            <div className="landing landing-page">
                <div className="landing-background">
                </div>
        
                <div className="container landing-start">

                    {/* logo animation */}
                    <Spring
                    from={{ y: 50}}
                    to={{ y: signupToggle ? 30 : 50}}>
                    {props => (
                        <div style={{top:props.y+'%'}} className="logo">
                            <img src={logo} className="mw-100" alt="logo" />
                        </div>                           
                    )}
                    </Spring>            
                    
                    {/* Start animation */} 
                    <Spring
                    from={{ o: 100 }}
                    to={{ o: signupToggle ? 0 : 100 }}>
                    {props => (
                        <div style={{opacity:props.o+'%'}} className="tapToStart" onClick={this.handleStartClick}>
                            Tap here to begin
                        </div>                            
                    )}
                    </Spring>     

                </div>

                {/* Signup Box animation */}
                <Spring
                    from={{ y: -60, x: 0}}
                    to={{ y: signupToggle ? -7.5 : -60, x: loginToggle ? -100: 0 }}>
                    {props => (
                        <div style={{bottom:props.y+'%', left:props.x+'%'}} className="signupBox">
                            <h3>Sign Up</h3>
            
                            <form className="register-form" onSubmit={this.handleRegisterFormSubmit} ref={(el) => { this.addForm = el }}>
                                <div className="registerError">{ registerMessage }</div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="register-username-input" id="register-username-input" placeholder="Username" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="register-email-input" id="register-email-input" placeholder="Email Address" autoComplete="email" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="register-password-input" id="register-password-input" placeholder="Password" autoComplete="current-password" required />
                                </div>
                                <div className="form-group">
                                    <select className="form-control custom-select" name="region-input" id="region-input">
                                        <option defaultValue="Auckland">Auckland</option>
                                        <option value="Northland">Northland</option>
                                        <option value="Waikato">Waikato</option>
                                        <option value="Wellington">Wellington</option>
                                    </select>
                                </div>
                                <div className="subtext">
                                    Already have an account? <span onClick={()=>{this.handleLoginClick()}}>Login.</span>
                                </div>
            
                                <div className="buttons">
                                <button type="button" className="btn btn-light btn-back">
                                    <i className="fas fa-arrow-left" onClick={
                                    () => this.closeSignUp()
                                    }></i>
                                </button>
                                <button type="submit" className="btn btn-primary btn-next">
                                    Next
                                </button>
                                </div>
                            </form>
            
                        </div>
                    )}
                </Spring>

                {/* Signup to Login */}

                <Spring
                    from={{ x: 100}}
                    to={{ x: loginToggle ? 0: 100 }}>
                    {props => (
                        <div className="signinBox" style={{left:props.x+'%'}}>
                            <h3>Login</h3>
        
                            <form className="login-form" onSubmit={this.handleLoginFormSubmit} ref={(el) => { this.loginForm = el }}>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Email Address" autoComplete="email" />
                                    <div className="error">{ noUser }</div>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Password" autoComplete="current-password" required/>
                                    <div className="error">{ loginMessage }</div>
                                </div>
                                <div className="subtext">
                                Don't have an account? <span onClick={()=>{this.closeLogin()}}>Sign Up.</span>
                                </div>
        
                                <div className="buttons">
                                <button type="button" className="btn btn-light btn-back">
                                    <i className="fas fa-arrow-left" onClick={()=>{this.closeLogin()}}></i>
                                </button>
                                <button type="submit" className="btn btn-primary btn-next">
                                    Next
                                    </button>
                                </div>
                            </form>
        
                        </div>
                    )}
                </Spring>


                
            </div>

            
        )
    }
}

export default LoginRegister;