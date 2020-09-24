import React, { Component } from 'react';
// import './App.css';
import Butterfly1 from '../assets/Butterfly1.jpg';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import placeholder from '../assets/profile-placeholder.png';
import {Spring} from 'react-spring/renderprops';
import Moment from 'react-moment';
import 'moment-timezone';
import apiInfo from './apiInfo'

class Post extends Component {
  constructor(props) {
    super(props)

    var {likes,currentUser} = this.props
    this.state = {
      isLiked: currentUser && likes.includes(currentUser.id) ? true : false,
    }
  }

  handleLikeClick = () => {
    var {isLiked} = this.state
    if(!isLiked){
      // console.log('yes')
      apiInfo.addLikes(this.props.id,this.props.currentUser.id)
    }else{
      apiInfo.removeLikes(this.props.id,this.props.currentUser.id)
      // console.log('no')
    }

    this.setState({ isLiked:!this.state.isLiked })
    // console.log(this.state)
  }

  handleSubmitComment = (e) => {
    e.preventDefault();

    // var user = this.props.currentUser

    var {comments, listPosts} = this.props

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

    apiInfo.updatePost(id, data).then(()=>listPosts());

  }

  render (){
    const {isLiked} = this.state

    var dateString = this.props.createdAt;

    var { comments } = this.props 
    

    return (
        <div className="post-item">
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
                    
                    <div className="postLikeButton">
                      <svg viewBox="-5 -5 110 110" className='likePost'>
                        <g>
                          <path d='M70.617,6.296c-10.321,0-16.836,5.023-20.617,9.565c-3.781-4.542-10.295-9.565-20.62-9.565   C11.805,6.296,0,22.577,0,37.782c0,22.135,42.518,51.801,47.366,55.11c0.794,0.541,1.714,0.812,2.634,0.812s1.84-0.271,2.634-0.812   C57.482,89.583,100,59.917,100,37.782C100,22.577,88.193,6.296,70.617,6.296z' />
                        </g>
                      </svg>
                      <Spring
                        config={{ tension: 500, precision: 0.1 }}
                        from={{ opacity: 0 }}
                        to={{ opacity: isLiked ? 1 : 0 }}
                        >
                          {props => 
                            <svg style={props} viewBox="-5 -5 110 110" className='likePost liked' onClick={this.handleLikeClick}>
                            <g>
                              <path d='M70.617,6.296c-10.321,0-16.836,5.023-20.617,9.565c-3.781-4.542-10.295-9.565-20.62-9.565   C11.805,6.296,0,22.577,0,37.782c0,22.135,42.518,51.801,47.366,55.11c0.794,0.541,1.714,0.812,2.634,0.812s1.84-0.271,2.634-0.812   C57.482,89.583,100,59.917,100,37.782C100,22.577,88.193,6.296,70.617,6.296z' />
                            </g>
                            </svg>
                          }
                      </Spring>
                    </div>

                  </div>
                  <div className="post-bottom">
                    <div className="post-location">
                      {this.props.type.location}
                  </div>
                    <div className="post-profile">
                      <div className="post-profile-picture">
                        <img src={ this.props.user.profileImage  ? apiInfo.serverUrl+this.props.user.profileImage : this.props.user.profileImageURL ? this.props.user.profileImageURL : placeholder } alt="profile-placeholder" />
                      </div>
                      <div className="post-profile-info">
                        <div className="post-name">
                          {this.props.user ? this.props.user.userName : '' }
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
                      <img src={ this.props.user.profileImage  ? apiInfo.serverUrl+this.props.user.profileImage : this.props.user.profileImageURL ? this.props.user.profileImageURL : placeholder } alt="author-profile" />
                    </div>
                      <div className="author-info comment-content">
                        <span className="author-name comment-name">{this.props.user.userName}</span>
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
                  {/* <div className="comment">
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
                        */}
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

export default Post;