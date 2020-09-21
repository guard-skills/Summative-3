import React, { Component } from 'react';
// import './App.css';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import profileSmall from '../assets/profile-image-small.png';
import {Spring} from 'react-spring/renderprops';

class Post extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      // isLiked: this.props.isLiked
      isLiked:false
    }
  }

  handleLikeClick = () => {
    this.setState({ isLiked:!this.state.isLiked })
    // console.log(this.state)
  }

  render (){
    const likeToggle = this.state.isLiked

    return (
        <div className="post-item">
          <div className="post-image">
            <img src={this.props.image} alt="" />
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

                    {/* <div className={ likeToggle ? 'likePost liked' : 'likePost'} onClick={this.handleLikeClick}>
                      <svg viewBox="-5 -5 110 110">
                        <defs>
                          <clipPath id="svgPath">
                            <path d='M70.617,6.296c-10.321,0-16.836,5.023-20.617,9.565c-3.781-4.542-10.295-9.565-20.62-9.565   C11.805,6.296,0,22.577,0,37.782c0,22.135,42.518,51.801,47.366,55.11c0.794,0.541,1.714,0.812,2.634,0.812s1.84-0.271,2.634-0.812   C57.482,89.583,100,59.917,100,37.782C100,22.577,88.193,6.296,70.617,6.296z' />
                          </clipPath>
                        </defs>
                        <g>
                          <path fill="none" stroke="#5B8C5A" strokeWidth="10px" d='M70.617,6.296c-10.321,0-16.836,5.023-20.617,9.565c-3.781-4.542-10.295-9.565-20.62-9.565   C11.805,6.296,0,22.577,0,37.782c0,22.135,42.518,51.801,47.366,55.11c0.794,0.541,1.714,0.812,2.634,0.812s1.84-0.271,2.634-0.812   C57.482,89.583,100,59.917,100,37.782C100,22.577,88.193,6.296,70.617,6.296z' />
                        </g>
                      </svg>
                      <div className="likeFill"></div>
                    </div> */}
                    
                    <div className="postLikeButton">
                      <svg viewBox="-5 -5 110 110" className='likePost'>
                        <g>
                          <path d='M70.617,6.296c-10.321,0-16.836,5.023-20.617,9.565c-3.781-4.542-10.295-9.565-20.62-9.565   C11.805,6.296,0,22.577,0,37.782c0,22.135,42.518,51.801,47.366,55.11c0.794,0.541,1.714,0.812,2.634,0.812s1.84-0.271,2.634-0.812   C57.482,89.583,100,59.917,100,37.782C100,22.577,88.193,6.296,70.617,6.296z' />
                        </g>
                      </svg>
                      <Spring
                        config={{ tension: 500, precision: 0.1 }}
                        from={{ opacity: 0 }}
                        to={{ opacity: likeToggle ? 1 : 0 }}
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
                      {this.props.location}
                  </div>
                    <div className="post-profile">
                      <div className="post-profile-picture">
                        <img src={this.props.photo} alt="profile-placeholder" />
                      </div>
                      <div className="post-profile-info">
                        <div className="post-name">
                          {this.props.name}
                  </div>
                        <div className="post-timestamp">
                        {this.props.time}
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

export default Post;