import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import logoWhite from '../assets/Logo-small-white.png';
import {Spring} from 'react-spring/renderprops'

class Navbar extends Component {

    constructor(props){
        super(props)
        this.state = {
            isActive:props.isActive
        }
    }

    handleLogoutClick = () => {
        var {setActiveView, closeNavbar} = this.props

        setActiveView('landing')

        closeNavbar()
    }

    handleCloseNavbar = () => {
        var {closeNavbar} = this.props
        closeNavbar()
    }

    handleHomeClick = () => {
        var {setActiveView}= this.props

        setActiveView('dashboard')
    }

    handleProfileClick = () => {
        var {setActiveView}= this.props

        setActiveView('profile-Page')
    }

    handleAddPostClick = () => {
        var {setActiveView}= this.props

        setActiveView('create-page')
    }
    
    componentWillUnmount(){
    
        this.setState({isActive:false})
        // console.log(this.state.isActive)
    }

    render (){

        var {isActive} = this.props

        return (
            <Spring
                from={{ x: -50 }}
                to={{ x: isActive ? 0 : -50 }}>
                {props => (
                    <div style={{left:props.x+'vw'}} className="nav-sidebar">
                        <div className="logo">
                            <img src={logoWhite} alt="logo-small" />
                        </div>
                        <Nav className="nav flex-column" activeKey={this.state.active} defaultActiveKey="1">
                            <Nav.Item className="nav-item">
                                <Nav.Link eventKey="1" className="nav-link" onClick={()=>{this.handleHomeClick()}}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link eventKey="2" className="nav-link" onClick={()=>{this.handleProfileClick()}}>Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link eventKey="3" className="nav-link" onClick={()=>{this.handleAddPostClick()}}>Add Post</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link href="https://zip.org.nz/contact" className="nav-link" target="_blank" rel="noopener noreferrer">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link onClick={this.handleLogoutClick} className="nav-link">Logout</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <i className="far fa-times-circle" onClick={this.handleCloseNavbar}></i>
                            </Nav.Item>
                        </Nav>
                        <div className="visit">
                            <div>visit the website</div>
                            <div>
                            <Nav.Link className="visitLink" href="http://www.zip.org.nz" target="_blank" rel="noopener noreferrer">www.zip.org.nz</Nav.Link>
                            </div>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

export default Navbar;