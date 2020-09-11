import React, { Component } from 'react';
import './App.css';
import logo from './logo-large.png';
import navbar from './navbar.png';
import profileSmall from './profile-image-small.png';
import View from './View';
import Post from './Post';
import Create from './Create';
import MyPost from './MyPost';
import Update from './Update';
import Modal from 'react-bootstrap/Modal';
import Drawer from '@material-ui/core/Drawer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeView: 'landing',

      isProfileImageModalOpen: false,
    }
  }

  setActiveView = (view) => {
    this.setState({ activeView: view })
  }

  openProfileImageModal = () => {
    this.setState({ isProfileImageModalOpen: true })
  }
  closeProfileImageModal = () => {
    this.setState({ isProfileImageModalOpen: false })
  }

  handleProfileImageClick = () => {
    this.openProfileImageModal();
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

                    this.setActiveView('dashboard')
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

                      this.setActiveView('dashboard')
                    }}>
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
            <div className="profile-image-small" onClick={this.handleProfileImageClick}>
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
            <Post />
            <Post />
          </div>

          <div className="nav-sidebar">

          </div>

          <div className="nav-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="selected" onClick={
              () => this.setActiveView('dashboard')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              () => this.setActiveView('create-page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              () => this.setActiveView('profile-Page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>

          <Modal show={this.state.isProfileImageModalOpen} onHide={() => { this.closeProfileImageModal() }} className="profileImageChange">

            <Modal.Body>
              <i className="far fa-times-circle" onClick={this.closeProfileImageModal}></i>
              <form className="uploadPhotoForm">
                <div className="profileImage">
                  <img src={profileSmall} alt="profileSmall"/>
                </div>
                <div>Upload Photo</div>
                <div className="form-group">
                  <label className="browseLabel" htmlFor="photoBrowse">Browse</label>
                  <input type="file" name="photoBrowse" id="photoBrowse" className="photoBrowse  form-control-file" />
                </div>
                <div>or</div>
                <div className="form-group">
                  <input type="url" className="photoURL" placeholder="URL" />
                </div>
                <button type="submit" className="btn btn-primary submitPhotoChange" onClick={
                  (e) => {
                    e.preventDefault()
                  }
                }>Submit</button>
              </form>
            </Modal.Body>

          </Modal>

        </View>

        <View viewName="create-page" activeView={this.state.activeView} className="create-page">

          <div className="nav-top">
            <img src={navbar} alt="navbar" className="navbar" />
            <div className="heading">Post</div>
            <div className="profile-image-small" onClick={this.handleProfileImageClick}>
              <img src={profileSmall} alt="profile-small" />
            </div>
          </div>

          <Create/>      

          <div className="nav-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              () => this.setActiveView('dashboard')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              () => this.setActiveView('create-page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="selected" onClick={
              () => this.setActiveView('profile-Page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </View>

        <View viewName="update-page" activeView={this.state.activeView} className="update-page">

          <div className="nav-top">
            <img src={navbar} alt="navbar" className="navbar" />
            <div className="heading">Post</div>
            <div className="profile-image-small" onClick={this.handleProfileImageClick}>
              <img src={profileSmall} alt="profile-small" />
            </div>
          </div>

          <Update/>      

          <div className="nav-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              () => this.setActiveView('dashboard')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              () => this.setActiveView('create-page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="selected" onClick={
              () => this.setActiveView('profile-Page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>

        </View>


        <View viewName="profile-Page" activeView={this.state.activeView} className="profile profile-page">

          <div className="nav-top">
            <img src={navbar} alt="navbar" className="navbar" />
            <div className="heading">My Profile</div>
            
          </div>

          <div className="profile-info">
            <div className="profile-image-big" onClick={this.handleProfileImageClick}>
              <img src={profileSmall} alt="profile-big" />
            </div>
            <div className="personal-details">
              <h1>Jane Doe</h1>
              <h2>Auckland</h2>
              <div className="edit-personal-details">
                <i className="fas fa-pen"></i>
              </div>
            </div>
          </div>

          <div className="posts-search">
            <div className="mypost">
              <div className="number-of-post">My posts</div>
              <div className="number-of-post2">2</div>
            </div>

            <div className="search">
              <div className="form-group-search">
                <div className="search-icon"><i className="fas fa-search"></i>
                </div>
                <input type="text" className="form-control" name="search-bar" id="search-bar" placeholder="Search by title" />
              </div>
            </div>
          </div>

          <div className="profile-posts">
            <MyPost/>
            <MyPost/>
            <MyPost/>
          </div>  

          <div className="nav-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              () => this.setActiveView('dashboard')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              () => this.setActiveView('create-page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="selected" onClick={
              () => this.setActiveView('profile-Page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          
          <Modal show={this.state.isProfileImageModalOpen} onHide={() => { this.closeProfileImageModal() }} className="profilePageImageChange">

            <Modal.Body>
              <i className="far fa-times-circle" onClick={this.closeProfileImageModal}></i>
              <form className="uploadPhotoForm">
                <div className="profileImage">
                  <img src={profileSmall} alt="profileSmall"/>
                </div>
                <div>Upload Photo</div>
                <div className="form-group">
                  <label className="browseLabel" htmlFor="photoBrowse">Browse</label>
                  <input type="file" name="photoBrowse" id="photoBrowse" className="photoBrowse  form-control-file" />
                </div>
                <div>or</div>
                <div className="form-group">
                  <input type="url" className="photoURL" placeholder="URL" />
                </div>
                <button type="submit" className="btn btn-primary submitPhotoChange" onClick={
                  (e) => {
                    e.preventDefault()
                  }
                }>Submit</button>
              </form>
            </Modal.Body>

          </Modal>

        </View>

      </div>
    )
  }

}

export default App;
