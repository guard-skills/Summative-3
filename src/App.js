import React, { Component } from 'react';
import './App.css';
import navbar from './assets/navbar.png';
import Modal from 'react-bootstrap/Modal';
import placeholder from './assets/profile-placeholder.png';
//components
import Navbar from './components/Navbar';
import View from './components/View';
import Post from './components/Post';
import Create from './components/Create';
import MyPost from './components/MyPost';
import Update from './components/Update';
import LoginRegister from './components/Login-Register';
import Select from 'react-select';
import apiInfo from './components/apiInfo';
import { Form, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: [],

      postToUpdate: {
        id: '',
        name: '',
        description: '',
        type_id: '',
      },

      postCount: '0',

      typeFilter : [],

      typeFilterId: 0,

      typeFilterReset: 'All',

      currentUser: 0,

      activeView: 'landing',

      isProfileImageModalOpen: false,

      isProfilePageImageModalOpen: false,

      isNavbarOpen: false,

      isFilterOpen: false,
      
      isProfileEditActive: false,
      
      profileEdit: "",

      file: null,

      url: null,
    }

  }

  handleProfileImage = (e) => {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  handleProfileImageURL = (e) => {
    this.setState({
      url: e.target.value
    })
  }

  setActiveView = (view) => {
    this.setState({ activeView: view })
  }

  handlePostCount = () => {
    var length = this.state.currentUser.posts.length

    this.setState({postCount: length})
  }

  handleDashboardClick = () => {
    this.listPosts()

    this.setState({ activeView: 'dashboard' })
  }

  handleProfileClick = () => {
    this.handlePostCount()

    this.setState({ activeView: 'profile-Page'})
  }

  handleProfileEditClick = () => {
    this.setState({ isProfileEditActive: true })

    this.setState({profileEdit:'active'})

    console.log('hi')
  }

  handleProfileEditForm = (e) => {
    e.preventDefault()

    this.setState({ isProfileEditActive: false })

    var formData = new FormData(this.form);
      
    var data = {
      userName: formData.get('username-input'),
      location: formData.get('location-input'),
    }

    apiInfo.updateUser(this.state.currentUser.id,data).then(res => {
      // console.log(res.data)
      this.setState({ currentUser: res.data })
    })  

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

  handleProfileChangeClick = (e) => {
    e.preventDefault()

    var formData = new FormData(this.form);

    if(formData.get('photoBrowse').size > 0){
      apiInfo.uploadFile(formData).then(res => {
        var fileName = res.data;
  
        var data = {
          profileImage: fileName,
          profileImageURL : null,
        }
  
        apiInfo.updateUser(this.state.currentUser.id,data).then(res => this.setState({ currentUser: res.data }))
  
      })
    } else {
      
      var data = {
        profileImageURL: formData.get('url-input'),
        profileImage: null,
      }

      apiInfo.updateUser(this.state.currentUser.id,data).then(res => {
        console.log(res.data)
        this.setState({ currentUser: res.data })
      })
    }
    
    this.closeProfileImageModal()
    this.closeProfilePageImageModal()
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

  //Jin's functions (login/logout)

  setUserId = (user) => {
    this.setState({ currentUser: user })
    return user
  }

  setPostToUpdate = (id) => { //take info from Post to updatedPostForm
    var foundPost = this.state.currentUser.posts.find((post) => {
      // console.log(post.id)
      return post.id === id
    })
    this.setState({ postToUpdate: foundPost }) //state postToUpdate
  }

  listPosts = () => { //create list of posts from DB (all posts)
    apiInfo.getPosts().then(res => {
      this.setState({ post: res.data })
    })
  }

  listUserPosts = () => { //create list of user's post from DB (only current logged in user)
    apiInfo.getUser(this.state.currentUser.id).then(res => {
      this.setState({ currentUser: res.data })
      this.handlePostCount()
    })
  }

  activeViewLogout = () => {
    localStorage.removeItem('id')
    this.setState({currentUser:0})
    this.setActiveView('landing')
    this.closeNavbar()
  }

  componentDidMount = () => {
    apiInfo.getPosts()
    this.listPosts()
    
    //local storage
    var userId = localStorage.getItem('id')
    if(userId){
      // console.log(userId)
      apiInfo.getUser(userId).then(res => {
        this.setState({ currentUser: res.data })
      })
      .then(()=>this.listUserPosts())

      this.setActiveView('dashboard')
      // this.setActiveView('profile-Page')
    }

    // types
    apiInfo.getTypes()
    .then( res => res.data)
    .then( types => {
      return types.map(type => {
        return { value : type.id, label: type.location }
      })
    })
    .then( typeFilter => this.setState({typeFilter : typeFilter}))

  }

  //Filter/Search

  handleTypeFilter = (e) => {
    var selected = e.value;

    this.setState({typeFilterId:selected});
    this.setState( {typeFilterReset : 'Reset'})
    // this.setActiveView('dashboard')
  }

  handeAllClick = () => {
    this.setState( {typeFilterId : 0})
    this.setState( {typeFilterReset : 'All'})
  }


  render() {
    var { typeFilter,typeFilterId,typeFilterReset, postCount } = this.state
    var posts = typeFilterId ? this.state.post.filter(post=>post.type.id === typeFilterId): this.state.post

    return (


      <div className="app">

        <View viewName="landing" activeView={this.state.activeView} className="landing landing-page">

          <LoginRegister {...this.state.activeView}             
            setActiveView={this.setActiveView}
            listPosts={this.listPosts}
            setUserId={this.setUserId}
            listUserPosts={this.listUserPosts}
          />

        </View>

        <Navbar isActive={this.state.isNavbarOpen} {...this.state.activeView} closeNavbar={this.closeNavbar} setActiveView={this.setActiveView} activeViewLogout={this.activeViewLogout} handleProfileClick={this.handleProfileClick} handleDashboardClick={this.handleDashboardClick}/>
        
        <View viewName="dashboard" activeView={this.state.activeView} className="dashboard">

          <div className="nav-top">
            <img src={navbar} alt="navbar" className="navbar" onClick={this.handleNavbarClick} />
            <div className="heading">Dashboard</div>
            <div className="dashboard-image-change" onClick={this.handleProfileImageClick}>
              <img src={this.state.currentUser && this.state.currentUser.profileImage ? apiInfo.serverUrl+this.state.currentUser.profileImage : this.state.currentUser.profileImageURL ? this.state.currentUser.profileImageURL : placeholder} alt="profile-small" />
            </div>
          </div>

          <div className="filter-bar">
            <div className="all" onClick={this.handeAllClick}>{typeFilterReset}</div>
            <div className="filter-select">
              <Select className="select" onChange={this.handleTypeFilter} options={typeFilter} placeholder="Filter..."/> 
            </div>
          </div> 

          <div className="posts">
            
            {
              posts.reverse().map((item) => {
                var itemProps = {
                  key: item.id,
                  listPosts: this.listPosts,
                  setPostToUpdate: this.setPostToUpdate,
                  currentUser: this.state.currentUser,
                  ...item
                }

                return (<Post {...itemProps}/>)
              })
            }

          </div>

            <div className="nav-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="selected" onClick={
                this.handleDashboardClick}>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
                () => this.setActiveView('create-page')}>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={this.handleProfileClick}>
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
              <img src={this.state.currentUser && this.state.currentUser.profileImage ? apiInfo.serverUrl+this.state.currentUser.profileImage : this.state.currentUser.profileImageURL ? this.state.currentUser.profileImageURL : placeholder} alt="profile-small" />
            </div>
          </div>

          <Create listPosts={this.listPosts} user={this.state.currentUser} setActiveView={this.setActiveView} listUserPosts={this.listUserPosts} handlePostCount={this.handlePostCount}/>

          <div className="nav-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              this.handleDashboardClick}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="selected" onClick={
              () => this.setActiveView('create-page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={this.handleProfileClick}>
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
              <img src={this.state.currentUser && this.state.currentUser.profileImage ? apiInfo.serverUrl+this.state.currentUser.profileImage : this.state.currentUser.profileImageURL ? this.state.currentUser.profileImageURL : placeholder} alt="profile-small" />
            </div>
          </div>

          <Update {...this.state.postToUpdate} setActiveView={this.setActiveView} listUserPosts={this.listUserPosts} listPosts={this.listPosts}/>

          <div className="nav-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              this.handleDashboardClick}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              () => this.setActiveView('create-page')}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="selected" onClick={this.handleProfileClick}>
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
              <img src={this.state.currentUser && this.state.currentUser.profileImage ? apiInfo.serverUrl+this.state.currentUser.profileImage : this.state.currentUser.profileImageURL ? this.state.currentUser.profileImageURL : placeholder} alt="profile-big" />
            </div>
            <div className="personal-details">
              <h1>{this.state.currentUser ? this.state.currentUser.userName : null}</h1>
              <h2>{this.state.currentUser ? this.state.currentUser.location : null}</h2>
              <div className="edit-personal-details">
                <i className="fas fa-pen" onClick={this.handleProfileEditClick}></i>
              </div>
              <Form tabIndex={0} className={this.state.isProfileEditActive ? this.state.profileEdit + " edit-profile-form" : "edit-profile-form"} onSubmit={this.handleProfileEditForm} ref={(el) => {this.form = el}}>
                <Form.Group controlId="changeUserName">
                  <Form.Control type="text" className="name" name="username-input" defaultValue={this.state.currentUser ? this.state.currentUser.userName : null}/>
                </Form.Group>
                <Form.Group controlId="changeLocation">
                  <Form.Control type="text" name="location-input" defaultValue={this.state.currentUser ? this.state.currentUser.location : null}/>
                </Form.Group>
                <Button className="btn" type="submit">
                  Save
                </Button>
              </Form>
            </div>
          </div>

          <div className="posts-search">
            <div className="mypost">
              <div className="number-of-post">My posts</div>
            <div className="number-of-post2">{postCount}</div>
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
            {
      

              this.state.currentUser ? 

              this.state.currentUser.posts.reverse().map((item) => {
                var itemProps = {
                  key: item.id,
                  listUserPosts: this.listUserPosts,
                  listPosts: this.listPosts,
                  setPostToUpdate: this.setPostToUpdate,
                  setActiveView: this.setActiveView,
                  currentUser: this.state.currentUser,
                  ...item
                }
                return (<MyPost {...itemProps}/>)
              }) 

              : null


            }
          </div>

          <div className="nav-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={
              this.handleDashboardClick}>
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
              <form className="uploadPhotoForm" onSubmit={this.handleProfileChangeClick} ref={(el) => {this.form = el}}>
                <div className="profileImage">
                  <img src={this.state.file ? this.state.file : this.state.url ? this.state.url : this.state.currentUser.profileImage  ? apiInfo.serverUrl+this.state.currentUser.profileImage : this.state.currentUser.profileImageURL ? this.state.currentUser.profileImageURL : placeholder} alt="profileSmall" />
                </div>
                <div>Upload Photo</div>
                <div className="form-group">
                  <label className="browseLabel" htmlFor="photoBrowse">Browse</label>
                  <input type="file" name="photoBrowse" id="photoBrowse" className="photoBrowse form-control-file" onChange={this.handleProfileImage}/>
                </div>
                <div>or</div>
                <div className="form-group">
                  <input type="url" name="url-input" className="photoURL" placeholder="URL" onChange={this.handleProfileImageURL}/>
                </div>
                <button type="submit" className="btn btn-primary submitPhotoChange">Submit</button>
              </form>
            </Modal.Body>

          </Modal>

        </View>

        <Modal show={this.state.isProfileImageModalOpen} onHide={() => { this.closeProfileImageModal() }} className="profileImageChange">

          <Modal.Body>
            <i className="far fa-times-circle" onClick={this.closeProfileImageModal}></i>
            <form className="uploadPhotoForm" onSubmit={this.handleProfileChangeClick} ref={(el) => {this.form = el}}>
              <div className="profileImage">
                <img src={this.state.file ? this.state.file : this.state.url ? this.state.url : this.state.currentUser.profileImage  ? apiInfo.serverUrl+this.state.currentUser.profileImage : this.state.currentUser.profileImageURL ? this.state.currentUser.profileImageURL : placeholder} alt="profileSmall" />
              </div>
              <div>Upload Photo</div>
              <div className="form-group">
                <label className="browseLabel" htmlFor="photoBrowse">Browse</label>
                <input type="file" name="photoBrowse" id="photoBrowse" className="photoBrowse form-control-file" onChange={this.handleProfileImage} />
              </div>
              <div>or</div>
              <div className="form-group">
                <input type="url" name="url-input" className="photoURL" placeholder="URL" onChange={this.handleProfileImageURL}/>
              </div>
              <button type="submit" className="btn btn-primary submitPhotoChange">Submit</button>
            </form>
          </Modal.Body>

        </Modal>

      </div>
    )
  }

}

export default App;
