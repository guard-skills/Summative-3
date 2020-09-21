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

  handleFormSubmit = (e) => {
    e.preventDefault()

    var {uploadFile,addPost,setActiveView} = this.props;

    var formData = new FormData(this.form);

    uploadFile(formData).then(res => {
      var fileName = res.data;

      var data = {
        title: formData.get('title-input'),
        description: formData.get('description-input'),
        postImage: formData.get('url'),
        type_id: parseInt(formData.get('area-input')) 
      }

      addPost(data)
      setActiveView('dashboard')
      
    })
  
  }


  render() {
    const imagePlaceholder = Butterfly1;
    
    return (

      <div className="wrap" viewname="create-Page" activeview={this.state.activeView}>
        <div className="add-post">
          <Form className="createForm" onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
          <h3 className="add-post-title">Upload Photo</h3>
          <div className="photo-upload-buttons">
            <div className="form-group">
              <label className="browseLabel" htmlFor="photoBrowse">Browse</label>
              <input type="file" name="photoBrowse" id="photoBrowse" className="photoBrowse form-control-file" />
            </div>
            <div className="or">or</div>
            <div className="form-group">
              <input type="url" id="url-input" className="photoURL" placeholder="URL" />
            </div>
          </div>
          <img src={this.props.postImage ? this.props.postImage : imagePlaceholder} alt="#" className="add-post-img"></img>
              <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control id="title-input" type="title"></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <Form.Control id="area-input" as="select">
                    <option value="1">Auckland</option>
                    <option value="2">Wellington</option>
                    <option value="3">Christchurch</option>
                    <option value="4">Dunedin</option>
                    <option value="5">Waikato</option>
                  </Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" id="description-input" rows="2"></Form.Control>
              </Form.Group>
              <Button type="submit" className="btn btn-success">Submit</Button>
          </Form>
        </div>
        
      </div>

    );
  }
}

export default Create;