import React, { Component } from 'react';
/*import ReactDOM from 'react-dom';*/

import Butterfly1 from './Butterfly1.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Create extends Component {

  constructor() {
    super();
    this.state = {
        title: '',
        description: '',
        city: '',
        isUrlInputOpen: false,
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  openBrowseInput = ()=>{
    this.setState({
      isBrowseInputOpen:true
    })
  }
  closeBrowseInput = ()=>{
    this.setState({
      isBrowseInputOpen:false
    })
  }
  handleBrowseBtnClick = (e)=>{
    this.fileInput.click()
  }
  handleBrowseBlur = (e)=>{
    this.closeBrowseInput()
  }

  
  openUrlInput = ()=>{
    this.setState({
      isUrlInputOpen:true
    })
  }
  closeUrlInput = ()=>{
    this.setState({
      isUrlInputOpen:false
    })
  }
  handleUrlBtnClick = (e)=>{
    this.openUrlInput()
  }
  handleUrlBlur = (e)=>{
    this.closeUrlInput()
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, city, description } = this.state;

    this.ref.add({
      title,
      description,
      city
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        city: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


  render() {
    const { title, description, city ,isBrowseInputOpen, isUrlInputOpen} = this.state;
    return (

      <div className="wrap" viewName="create-Page" activeView={this.state.activeView}>
        <div className="add-post">
          <h3 className="add-post-title">Upload Photo</h3>
          <div className="photo-upload-buttons">
            <Button type="button" className="btn btn-browse" onClick={this.handleBrowseBtnClick}>Browse</Button>
            <h3>or</h3>
            <Button type="button" className="btn btn-url" onClick={this.handleUrlBtnClick}>url</Button>
          </div>
          <img src={Butterfly1} alt="" className="add-post-img"></img>
          <Form onSubmit={this.onSubmit}>
              <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control id="tittle-input" type="title" defaultValue={title} onChange={this.onChange}></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control id="city-input" type="city" defaultValue={city} onChange={this.onChange}></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Area</Form.Label>
                  <Form.Control id="area-input" as="select" onChange={this.onChange}>
                  <option>Auckland</option>
                  <option>Wellington</option>
                  <option>Christchurch</option>
                  <option>Dunedin</option>
                  <option>Waikato</option>
                  </Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" id="description-input" defaultValue={description} onChange={this.onChange} rows="2"></Form.Control>
              </Form.Group>
              <Button type="submit" className="btn btn-success">Submit</Button>
          </Form>
        </div>
  
        <div className="browse-popup" show={this.state.isBrowseInputOpen} >
          <input className="browse-input" id="browse-input" type="file" ref={(el) => {this.fileInput = el}}/>
        </div>
  

        <div className="url-popup" show={this.state.isUrlInputOpen} onBlur={this.handleUrlBlur}>
          <input className="url-input" id="url-input" type="url" placeholder=" https://"></input>
        </div>
        
      </div>

    );
  }
}

export default Create;