import React, { Component } from 'react';
import './App.css';
import navbar from './assets/navbar.png';
import profileSmall from './assets/profile-image-small.png';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
//components
import Navbar from './components/Navbar';
import View from './components/View';
import Post from './components/Post';
import Create from './components/Create';
import MyPost from './components/MyPost';
import Update from './components/Update';
import LoginRegister from './components/Login-Register';
import Modal from 'react-bootstrap/Modal';
import Navbar from './components/Navbar';
import {Spring} from 'react-spring/renderprops';
import { Button,Form } from 'react-bootstrap';

var url = 'http://localhost:4000/api'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: [
        {
          id: 1,
          image: "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          title: "Bird",
          location: "Auckland",
          name: "David Smith",
          time: "2m ago",
        }
      ],

      activeView: 'landing',

      isProfileImageModalOpen: false,

      isProfilePageImageModalOpen: false,

      isNavbarOpen: false,

      isFilterOpen: false,
    }
  }


  setActiveView = (view) => {
    this.setState({ activeView: view })
  }

  //Modal
  openProfileImageModal = () => {
    this.setState({ isProfileImageModalOpen: true })
  }
  closeProfileImageModal = () => {
    this.setState({ isProfileImageModalOpen: false })
  }

  handleProfileImageClick = () => {
    this.openProfileImageModal();
  }

  //Modal
  openProfilePageImageModal = () => {
    this.setState({ isProfilePageImageModalOpen: true })
  }
  closeProfilePageImageModal = () => {
    this.setState({ isProfilePageImageModalOpen: false })
  }

  handleProfilePageImageClick = () => {
    this.openProfilePageImageModal();
  }

  //Navbar
  openNavbar = () => {
    this.setState({ isNavbarOpen: true })
  }
  closeNavbar = () => {
    this.setState({ isNavbarOpen: false })
  }

  handleNavbarClick = () => {
    this.openNavbar();
  }

  //CRUD
  getPosts = () => {
    axios.get(url + '/posts')
    .then(res => {
      this.setState({news:res.data})
    })
  }

  addPost = (data) => {
    axios.get(url + '/posts', data)
    .then(res => {
      this.getPosts()
    })
  }

  updatePost = (id,data) => {
    axios.put(url + '/posts/' + id, data)
    .then(res => {
      this.getPosts()
    })
  }

  deletePost = (id) => {
    axios.delete(url + '/posts/' + id)
    .then(rest=>{
      this.getPosts()
    })
  }
  
  componentDidMount = () => {
    // this.getPosts()
  }
  
  //Filter
  openFilter = () => {
    this.setState({ isFilterOpen: true })
  }
  closeFilter = () => {
    this.setState({ isFilterOpen: false })
  }

  handleFilterClick = () => {
    this.openFilter();
  }

  render() {

    return (
      <div className="app">

        <View viewName="landing" activeView={this.state.activeView} className="landing landing-page">

          <LoginRegister {...this.state.activeView} setActiveView={this.setActiveView}/>

        </View>

        <Navbar isActive={this.state.isNavbarOpen} {...this.state.activeView} closeNavbar={this.closeNavbar} setActiveView={this.setActiveView}/>
        
        <View viewName="dashboard" activeView={this.state.activeView} className="dashboard">

          <div className="nav-top">
            <img src={navbar} alt="navbar" className="navbar" onClick={this.handleNavbarClick} />
            <div className="heading">Dashboard</div>
            <div className="dashboard-image-change" onClick={this.handleProfileImageClick}>
              <img src={profileSmall} alt="profile-small" />
            </div>
          </div>

          <div className="filter-bar">
            <div>All</div>
            <div className="filter" onClick={this.handleFilterClick}>
              <i className="fas fa-chevron-down"></i>
                    Filter
                </div>
          </div>
          {this.state.isFilterOpen ? 
            <Spring 
            from={{ y: -100 }} 
            to={{ y: 0 }}> 
              {props => (
                <div className="filter-select"> 
                  <Form style={{ top: props.y + '%' }}> 
                    <i className="far fa-times-circle" onClick={this.closeFilter}></i> 
                    <Form.Check id="Auckland" label="Auckland" /> 
                    <Form.Check id="Wellington" label="Wellington" /> 
                    <Form.Check id="Christchurch" label="Christchurch" /> 
                    <Form.Check id="Dunedin" label="Dunedin" /> 
                    <Form.Check id="Waikato" label="Waikato" /> 
                    <div className="form-buttons"> 
                      <Button type="submit" className="submit" onClick={(e) => { e.preventDefault() }, this.closeFilter}>
                        Submit
                      </Button> 
                      <Button type="reset">
                        Reset
                      </Button> 
                    </div> 
                  </Form> 
              </div>
              )}
            </Spring> : null}

          <div className="posts">
            {
              this.state.post.map((post) => {
                var postProps = {
                  ...post
                }

                return (<Post {...postProps}/>)
              })
            }

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


        </View>

            <View viewName="create-page" activeView={this.state.activeView} className="create-page">

              <div className="nav-top">
                <img src={navbar} alt="navbar" className="navbar" onClick={this.handleNavbarClick} />
                <div className="heading">Create Post</div>
                <div className="profile-image-small" onClick={this.handleProfileImageClick}>
                  <img src={profileSmall} alt="profile-small" />
                </div>
              </div>

              <Create />

              <div className="nav-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
                  () => this.setActiveView('dashboard')}>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="selected" onClick={
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
            </View>

            <View viewName="update-Page" activeView={this.state.activeView} className="update-page">

              <div className="nav-top">
                <img src={navbar} alt="navbar" className="navbar" onClick={this.handleNavbarClick} />
                <div className="heading">Update Post</div>
                <div className="profile-image-small" onClick={this.handleProfileImageClick}>
                  <img src={profileSmall} alt="profile-small" />
                </div>
              </div>

              <Update />

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
                <img src={navbar} alt="navbar" className="navbar" onClick={this.handleNavbarClick} />
                <div className="heading">My Profile</div>

              </div>

              <div className="profile-info">
                <div className="profile-image-big" onClick={this.handleProfilePageImageClick}>
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
                <MyPost setActiveView={this.setActiveView} />
                <MyPost setActiveView={this.setActiveView} />
                <MyPost setActiveView={this.setActiveView} />
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

              <Modal show={this.state.isProfilePageImageModalOpen} onHide={() => { this.closeProfilePageImageModal() }} className="profilePageImageChange">

                <Modal.Body>
                  <i className="far fa-times-circle" onClick={this.closeProfilePageImageModal}></i>
                  <form className="uploadPhotoForm">
                    <div className="profileImage">
                      <img src={profileSmall} alt="profileSmall" />
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

            <Modal show={this.state.isProfileImageModalOpen} onHide={() => { this.closeProfileImageModal() }} className="profileImageChange">

              <Modal.Body>
                <i className="far fa-times-circle" onClick={this.closeProfileImageModal}></i>
                <form className="uploadPhotoForm">
                  <div className="profileImage">
                    <img src={profileSmall} alt="profileSmall" />
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

      </div>
    )
  }

}

export default App;
