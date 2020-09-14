import React, { Component } from 'react';
import Butterfly1 from '../assets/Butterfly1.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/*import {navigate} from '@reach/router'
import API from './API'*/

class Create extends Component {

  constructor() {
    super();
    this.state = {
        title: '',
        description: '',
        city: '',
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleBrowseBtnClick = (e)=>{
    this.fileInput.click()
  }
  handleBrowseBlur = (e)=>{
    this.closeBrowseInput()
  }
  
  handleUrlBtnClick = (e)=>{
    this.openUrlInput()
  }
  handleUrlBlur = (e)=>{
    this.closeUrlInput()
  }

  formSubmit = (e) => {
    e.preventDefault()

    /*var formData = new FormData(this.form)

    API.uploadFile(formData)
      .then(res => res.data)

      .then(fileName => {
        var {currentUser} = this.props;
        var data = {
          tittle:formData.get('tittle-input'),
          description:formData.get('description-input'),
          photo: fileName,
          type_id:formData.get('type-input'),
          user_id:currentUser.id
        }
        API.addProject(data).then(res => navigate('/post'))

      })*/
  
  }


  render() {
    const { title, description, city} = this.state;
    return (

      <div className="wrap" viewname="create-Page" activeview={this.state.activeView}>
        <div className="add-post">
          <Form onSubmit={this.onSubmit}>
          <h3 className="add-post-title">Upload Photo</h3>
          <div className="photo-upload-buttons">
            <Button type="button" className="btn btn-browse" onClick={this.handleBrowseBtnClick}>Browse</Button>
            <h3>or</h3>
            <input type="url" className="urlInput" placeholder="URL"></input>
          </div>
          <img src={Butterfly1} alt="#" className="add-post-img"></img>
              <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control id="title-input" type="title" defaultValue={title} onChange={this.onChange}></Form.Control>
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
  
        <div className="browse-popup">
          <input className="browse-input" id="browse-input" type="file" ref={(el) => {this.fileInput = el}}/>
        </div>
  

        <div className="url-popup">
          <input className="url-input" id="url-input" type="url" placeholder=" https://"></input>
        </div>
        
      </div>

    );
  }
}

export default Create;