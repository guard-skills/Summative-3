import React, { Component } from 'react';
import logo from '../assets/logo-large.png';
import {Spring} from 'react-spring/renderprops';

class LoginRegister extends Component {
    constructor(props){
        super(props)

        this.state = {
            isSignUpActive: false,

            isLoginActive : false,
        }
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
            
                            <form className="register-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="register-username-input" id="register-username-input" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="register-email-input" id="register-email-input" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="register-password-input" id="register-password-input" placeholder="Password" />
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
                                <button type="submit" className="btn btn-primary btn-next" onClick={(e) => {
                                    e.preventDefault()
            
                                    this.setDashboardView()
                                }}>
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
        
                            <form className="login-form">
                                <div className="form-group">
                                <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Password" />
                                </div>
                                <div className="subtext">
                                Don't have an account? <span onClick={()=>{this.closeLogin()}}>Sign Up.</span>
                                </div>
        
                                <div className="buttons">
                                <button type="button" className="btn btn-light btn-back">
                                    <i className="fas fa-arrow-left" onClick={()=>{this.closeLogin()}}></i>
                                </button>
                                <button type="submit" className="btn btn-primary btn-next"
                                    onClick={(e) => {
                                    e.preventDefault()
        
                                    this.setDashboardView()
                                    }}>
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