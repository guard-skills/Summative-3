import React, {Conponent, Component} from 'react';
import './App.css';
import logo from './logo-large.png';
import View from './View';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeView: 'landing',
    }
  }

  setActiveView = (view) => {
    this.setState({activeView:view})
  }

  render(){
    return (
      <div className="app">

        <View viewName="landing" activeView={this.state.activeView} className="landing landing-page">

            <div className="landing-background">
            </div>

            <div className="container landing-start"  onClick={
                  ()=>this.setActiveView('landing-Register')
              }>
                <div className="logo">
                    <img src={logo} className="mw-100" alt="logo" />
                </div>

                <div className="tapToStart">
                    Tap anywhere to begin
                </div>
            </div>

        </View>

        <View viewName="landing-Register" activeView={this.state.activeView} className="landing landing-register">
          <div className="landing-background">
          </div>

            <div className="container signup">

                <div className="logo">
                    <img src={logo} className="mw-100" alt="logo" />
                </div>

                <div className="signupBox">
                    <h3>Sign Up</h3>

                    <form className="register-form">
                        <div className="form-group">
                            <input type="text" className="form-control" name="username-input" id="username-input" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control custom-select" name="region-input" id="region-input">
                                <option value="Auckland" selected>Auckland</option>
                                <option value="Northland">Northland</option>
                                <option value="Waikato">Waikato</option>
                                <option value="Wellington">Wellington</option>
                            </select>
                        </div>
                        <div className="subtext">
                            Already have an account? <span onClick={
                              ()=>this.setActiveView('landing-Login')
                            }>Login.</span>
                        </div>
                        
                        <div className="buttons">
                            <button type="button" className="btn btn-light btn-back">
                            <i className="fas fa-arrow-left" onClick={
                              ()=>this.setActiveView('landing')
                            }></i>
                            </button>
                            <button type="submit" className="btn btn-primary btn-next" onClick={(e)=>{
                              e.preventDefault()
                            }}>
                            Next
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </View>

        <View viewName="landing-Login" activeView={this.state.activeView} className="landing landing-login">
          <div className="landing-background">
          </div>

            <div className="container signin">

                <div className="logo">
                    <img src={logo} className="mw-100" alt="logo" />
                </div>

                <div className="signinBox">
                    <h3>Login</h3>

                    <form className="login-form">
                        <div className="form-group">
                            <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Password"/>
                        </div>
                        <div className="subtext">
                            Don't have an account? <span onClick={
                              ()=>this.setActiveView('landing-Register')
                            }>Sign Up.</span>
                        </div>
                        
                        <div className="buttons">
                            <button type="button" className="btn btn-light btn-back">
                            <i className="fas fa-arrow-left" onClick={
                              ()=>this.setActiveView('landing')
                            }></i>
                            </button>
                            <button type="submit" className="btn btn-primary btn-next"
                            onClick={(e)=>{
                              e.preventDefault()
                            }}>
                            Next
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </View>
      
      </div>
    )
  }

}

export default App;
