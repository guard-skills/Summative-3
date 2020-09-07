import React, {Component} from 'react';
import './App.css';
import logo from './logo-large.png';
import navbar from './navbar.png';
import profileSmall from './profile-image-small.png';
import postImage from './post-image-1.png';
import View from './View';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

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
                                <option defaultValue="Auckland">Auckland</option>
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
                            },
                            ()=>this.setActiveView('dashboard')}>
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
                            },
                            ()=>this.setActiveView('dashboard')
                            }>
                            Next
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </View>

        <View viewName="dashboard" activeView={this.state.activeView} className="dashboard">

            <div className="nav-top">
                <img src={navbar} alt="navbar" className="navbar" />
                <div className="heading">Dashboard</div>
                <div className="profile-image-small">
                    <img src={profileSmall} alt="profile-small" />
                </div>
            </div>

            <div className="filter-bar">
                <div>All</div>
                <div className="filter">
                    <i className="fas fa-chevron-down"></i>
                    Filter
                </div>
            </div>

            <div className="posts">
                <div className="post-item">
                    <div className="post-image">
                        <img src={postImage} alt="" />
                    </div>
                    <Tabs variant="tabs" defaultActiveKey="postInfo" className="nav nav-tabs post-tabs" transition={false}>
                        <Tab className="nav-item comments-triangle" eventKey="postInfo" title="Info">
                          <div className="post-info tab-content" id="postTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="post-top">
                                    <div className="post-title">
                                        Bird
                                    </div>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className="likePost"><title>ionicons-v5-f</title><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'/></svg>
                                </div>
                                <div className="post-bottom">
                                    <div className="post-location">
                                        Warkworth, Auckland
                                    </div>
                                    <div className="post-profile">
                                        <div className="post-profile-picture">
                                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="profile-placeholder" />
                                        </div>
                                        <div className="post-profile-info">
                                            <div className="post-name">
                                                David Smith
                                            </div>
                                            <div className="post-timestamp">
                                                2m ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                          </div>
                        </Tab>

                        <Tab className="nav-item" eventKey="comments" title="Comments">
                            <div className="post-info tab-content" id="postTabContent">
                              <div className="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                                  
                              </div>
                            </div>
                        </Tab>
                    </Tabs>


                </div>
                
            </div>

            <div className="nav-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="selected">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            </div>

        </View>
      
      </div>
    )
  }

}

export default App;
