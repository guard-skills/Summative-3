import React, { Component } from 'react';
import logo from '../assets/logo-large.png';
import {Spring} from 'react-spring/renderprops';
import SignupForm from './SignupForm';

class LoginRegister extends Component {
    constructor(props){
        super(props)

        this.state = {
            isSignUpActive: false,
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


    render() {
        return (
            <div className="landing landing-page">
                <div className="landing-background">
                </div>
        
                <div className="container landing-start">

                    {/* logo animation */}
                    {this.state.isSignUpActive ? 
                        <Spring
                        from={{ y: 50}}
                        to={{ y: 20}}>
                        {props => (
                            <div style={{top:props.y+'%'}} className="logo">
                                <img src={logo} className="mw-100" alt="logo" />
                            </div>                           
                        )}
                        </Spring> :                             
                        <div className="logo">
                            <img src={logo} className="mw-100" alt="logo" />
                        </div>                    
                    }
                    
                    {/* Start animation */}
                    {this.state.isSignUpActive ? 
                        <Spring
                        from={{ o: 100 }}
                        to={{ o: 0 }}>
                        {props => (
                            <div style={{opacity:props.o+'%'}} className="tapToStart" onClick={this.handleStartClick}>
                                Tap here to begin
                            </div>                            
                        )}
                        </Spring> : 
                        <div className="tapToStart" onClick={this.handleStartClick}>
                            Tap here to begin
                        </div>                             
                    }
                </div>
                    
                {/* Signup/Login box animation */}
                {this.state.isSignUpActive ? 
                    <Spring
                    from={{ y: -60 }}
                    to={{ y: -7.5 }}>
                    {props => (
                        <div style={{bottom:props.y+'%'}} className="signupBox">
                            <h3>Sign Up</h3>
            
                            <form className="register-form">
                                <SignupForm/>
                                <div className="subtext">
                                    Already have an account? <span onClick={
                                        <Spring
                                        
                                        >

                                        </Spring>
                                    }>Login.</span>
                                </div>
            
                                <div className="buttons">
                                <button type="button" className="btn btn-light btn-back">
                                    <i className="fas fa-arrow-left" onClick={
                                    () => this.setLandingStatus(false)
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
                    </Spring> : null
                }



            </div>

            
        )
    }
}

export default LoginRegister;