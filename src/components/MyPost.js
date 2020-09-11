import React, { Component } from 'react';
// import './App.css';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import profileSmall from '../assets/profile-image-small.png';
import postImage from '../assets/post-image-1.png';

class MyPost extends Component {

    render (){
        return (
            <div className="my-post post-item">
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
                        <div className="postIcons">
                          <i className="far fa-edit editProfilePost"></i>
                          <i className="far fa-trash-alt deleteProfilePost"></i>
                        </div>
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
        )
    }
}

export default MyPost;