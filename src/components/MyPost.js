import React, { Component } from 'react';
// import './App.css';
import Butterfly1 from '../assets/Butterfly1.jpg';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import placeholder from '../assets/profile-placeholder.png';
import Moment from 'react-moment';
import 'moment-timezone';
import apiInfo from './apiInfo'

class MyPost extends Component {

  handleSubmitComment = (e) => {
    e.preventDefault();

    // var user = this.props.currentUser

    var {comments, listUserPosts} = this.props

    var formData = new FormData(this.form);

    var newComment = {
      // user_id: user.id,
      user_id: this.props.currentUser.userName,
      profileImage: this.props.currentUser.profileImage,
      profileImageURL: this.props.currentUser.profileImageURL,
      comment: formData.get('comment-input'),
    }

    comments.push(newComment)

    var data = { comments }
    var {id} = this.props

    apiInfo.updatePost(id, data).then(()=>listUserPosts());

  }

  handleEditClick = () => {
    var { setActiveView, setPostToUpdate, id } = this.props
    setPostToUpdate(id)
    setActiveView('update-Page')
    console.log(id)
  }

  handleDeleteClick = (e) => {
    var { id, listUserPosts, listPosts } = this.props;
    apiInfo.deletePost(id);
    listUserPosts()
    listPosts()
  }
    
  render (){

    var dateString = this.props.createdAt;

    var { comments, type, currentUser } = this.props 

      return (
        <div className="my-post post-item">
          <div className="post-image">
            <img src={this.props.postImage ? apiInfo.serverUrl+this.props.postImage : this.props.postImageURL ? this.props.postImageURL : Butterfly1} alt="" />
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
                      {this.props.title}
                    </div>
                    <div className="postIcons">
                      <i className="far fa-edit editProfilePost" onClick={this.handleEditClick}></i>
                      <i className="far fa-trash-alt deleteProfilePost" onClick={this.handleDeleteClick}></i>
                    </div>
                  </div>
                  <div className="post-bottom">
                    <div className="post-location">
                      {type.location}
                    </div>
                    <div className="post-profile">
                      <div className="post-profile-picture">
                        <img src={ this.props.currentUser.profileImage  ? apiInfo.serverUrl+this.props.currentUser.profileImage : this.props.currentUser.profileImageURL ? this.props.currentUser.profileImageURL : placeholder } alt="profile-placeholder" />
                      </div>
                      <div className="post-profile-info">
                        <div className="post-name">
                          {this.props.currentUser ? this.props.currentUser.userName : '' }
                        </div>
                        <div className="post-timestamp">
                          <Moment fromNow>{dateString}</Moment>
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
                      <img src={ this.props.currentUser.profileImage  ? apiInfo.serverUrl+this.props.currentUser.profileImage : this.props.currentUser.profileImageURL ? this.props.currentUser.profileImageURL : placeholder } alt="author-profile" />
                    </div>
                      <div className="author-info comment-content">
                        <span className="author-name comment-name">{currentUser.userName}</span>
                          {this.props.description}
                      </div>
                  </div>

                  {comments.map((comment, i) => {
                    return (
                      <div className="comment" key={i}>
                        <div className="profile-photo">
                          <img src={ comment.profileImage ? apiInfo.serverUrl+comment.profileImage : comment.profileImageURL ? comment.profileImageURL : placeholder} alt="profile" />
                        </div>
                        <div className="comment-content">
                          <span className="comment-name">{comment.user_id}</span>
                            {comment.comment}
                          </div>
                      </div>
                    )
                  })}
                  <div className="makeComment">
                    <div className="profile-image-small">
                      <img src={this.props.currentUser.profileImage ? apiInfo.serverUrl+this.props.currentUser.profileImage : this.props.currentUser.profileImageURL ? this.props.currentUser.profileImageURL : placeholder} alt="profile-small" />
                    </div>
                    <form onSubmit={this.handleSubmitComment} ref={(el) => {this.form = el}}>
                      <input type="text" name="comment-input" placeholder="Type comment..." />
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </Tab.Pane>

            </Tab.Content>
          </Tab.Container>
                {/* End of Tabbies */}

        </div>
    )
  }
}

export default MyPost;