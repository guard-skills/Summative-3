import React, { Component } from 'react';
import Butterfly1 from '../assets/Butterfly1.jpg'
import Button from 'react-bootstrap/Button';
import apiInfo from '../components/apiInfo';

class Create extends Component {

  constructor(props) {
    super(props);
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

	handleFormSubmit = (e) => {

		e.preventDefault()
		var formData = new FormData(this.addForm)
		var {currentUser}=this.props;
		var data = {
			name:formData.get('nameInput'),
			description:formData.get('descriptionInput'),
      location: formData.get('location'),
			user_id: currentUser.id,
		}
		
		var {setActiveView , listPosts, listUserPosts} = this.props
    apiInfo.addPost(data)
    .then(()=>listPosts())
    .then(()=>listUserPosts())
    .then(()=>setActiveView('dashboard'))
  }
  
  render() {

    return (
      <div className="wrap" viewname="create-Page">
        <div className="add-post">
          <form onSubmit={this.handleFormSubmit} ref={(el) => {this.addForm = el}}>
          <h3 className="add-post-title">Upload Photo</h3>
          <div className="photo-upload-buttons">
            <Button type="button" className="btn btn-browse" onClick={this.handleBrowseBtnClick}>Browse</Button>
            <h3>or</h3>
            <input type="url" className="urlInput" placeholder="URL"></input>
          </div>
          <img src={Butterfly1} alt="#" className="add-post-img"></img>
              <div className="form-group">
                  <label>Title</label>
                  <input className="form-control" type="text" id="nameInput" name="nameInput" type="title"></input>
              </div>
              <div className="form-group">
                  <label>City</label>
                  <input className="form-control" type="text" type="title"></input>
              </div>
              <div className="form-group">
                  <label>Area</label>
                  <select className="form-control" name="location">
                    <option value="Auckland">Auckland</option>
                    <option value="Wellington">Wellington</option>
                    <option value="Christchurch">Christchurch</option>
                    <option value="Dunedin">Dunedin</option>
                    <option value="Waikato">Waikato</option>
                  </select>
              </div>
              <div className="form-group">
                  <label>Description</label>
                  <input className="form-control" type="text" id="descriptionInput" name="descriptionInput" type="title"></input>
              </div>
              <Button type="submit" className="btn btn-success">Submit</Button>
          </form>
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