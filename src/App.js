import React, { Component } from 'react';
import './App.css';
import logo from './logo-large.png';
import navbar from './navbar.png';
import profileSmall from './profile-image-small.png';
import postImage from './post-image-1.png';
import View from './View';
// import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeView: 'landing',
    }
  }

  setActiveView = (view) => {
    this.setState({ activeView: view })
  }

  render() {
    return (
      <div className="app">

        <View viewName="landing" activeView={this.state.activeView} className="landing landing-page">

          <div className="landing-background">
          </div>

          <div className="container landing-start" onClick={
            () => this.setActiveView('landing-Register')
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
                  <input type="text" className="form-control" name="username-input" id="username-input" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Password" />
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
                    () => this.setActiveView('landing-Login')
                  }>Login.</span>
                </div>

                <div className="buttons">
                  <button type="button" className="btn btn-light btn-back">
                    <i className="fas fa-arrow-left" onClick={
                      () => this.setActiveView('landing')
                    }></i>
                  </button>
                  <button type="submit" className="btn btn-primary btn-next" onClick={(e) => {
                    e.preventDefault()
                  },
                    () => this.setActiveView('dashboard')}>
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
                  <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Password" />
                </div>
                <div className="subtext">
                  Don't have an account? <span onClick={
                    () => this.setActiveView('landing-Register')
                  }>Sign Up.</span>
                </div>

                <div className="buttons">
                  <button type="button" className="btn btn-light btn-back">
                    <i className="fas fa-arrow-left" onClick={
                      () => this.setActiveView('landing')
                    }></i>
                  </button>
                  <button type="submit" className="btn btn-primary btn-next"
                    onClick={(e) => {
                      e.preventDefault()
                    },
                      () => this.setActiveView('dashboard')
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

              {/* Tabbies */}
              <Tab.Container id="left-tabs-example" defaultActiveKey="home">
                <Nav className="nav nav-tabs post-tabs">
                  <Nav.Item className="nav-item comments-triangle">
                    <Nav.Link className="nav-link" href="#" eventKey="home">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className="nav-triangle"><title>ionicons-v5-q</title><path d='M464,464H48a16,16,0,0,1-14.07-23.62l208-384a16,16,0,0,1,28.14,0l208,384A16,16,0,0,1,464,464Z' /></svg>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link comments-tab" href="#" eventKey="comments">Comments</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content" id="postTabContent">
                  <Tab.Pane eventKey="home" className="tab-pane fade show post-info" id="home" >
                    <div className="container">
                      <div className="post-top">
                        <div className="post-title">
                          Bird
                      </div>
                        <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className="likePost"><title>ionicons-v5-f</title><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z' /></svg>
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
                  </Tab.Pane>
                  <Tab.Pane eventKey="comments" className="tab-pane fade comments-tab">

                    <div className="container comments">
                      <div className="author-comment comment">
                        <div className="author-profile-photo profile-photo">
                          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="author-profile" />
                                    </div>
                          <div className="author-info comment-content">
                            <span className="author-name comment-name">David Smith</span>
                                        This is a bird.
                                    </div>
                        </div>
                        <div className="comment">
                          <div className="profile-photo">
                            <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile" />
                                    </div>
                            <div className="comment-content">
                              <span className="comment-name">Mary Jane</span>
                                        Yes, I concur with that statement.
                                    </div>
                          </div>
                          
                          <div className="comment">
                            <div className="profile-photo">
                              <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile" />
                                    </div>
                              <div className="comment-content">
                                <span className="comment-name">Mary Jane</span>
                                        That is certainly a bird.
                                    </div>
                            </div>
                            
                            <div className="makeComment">
                              <div className="profile-image-small">
                                <img src={profileSmall} alt="profile-small" />
                              </div>
                              <form>
                                <input type="text" placeholder="Type comment..." />
                                <button type="submit">Submit</button>
                              </form>
                            </div>
                          </div>
                  </Tab.Pane>

                </Tab.Content>
              </Tab.Container>
                    {/* End of Tabbies */}

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

                <div className="nav-sidebar">

                </div>

        </View>

            </div>
    )
  }

}

export default App;
