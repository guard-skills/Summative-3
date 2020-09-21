import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import logoWhite from '../assets/Logo-small-white.png';
import {Spring} from 'react-spring/renderprops'

class Navbar extends Component {
    handleCloseNavbar = () => {
        var {closeNavbar} = this.props
        closeNavbar()
    }

    handleHomeClick = () => {
        var {setActiveView}= this.props
        this.handleCloseNavbar();
        setActiveView('dashboard')
    }

    handleProfileClick = () => {
        var {setActiveView}= this.props
        this.handleCloseNavbar();
        setActiveView('profile-Page')
    }

    handleAddPostClick = () => {
        var {setActiveView}= this.props
        this.handleCloseNavbar();
        setActiveView('create-page')
    }

    handleLogout = () => {
        var {activeViewLogout} = this.props
        this.handleCloseNavbar();
        activeViewLogout('landing');
    }

    render (){

        return (
            <Spring
                from={{ x: -50 }}
                to={{ x: 0 }}>
                {props => (
                    <div style={{left:props.x+'vw'}} className="nav-sidebar">
                        <div className="logo">
                            <img src={logoWhite} alt="logo-small" />
                        </div>
                        <Nav className="nav flex-column">
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" onClick={()=>{this.handleHomeClick()}}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" onClick={()=>{this.handleProfileClick()}}>Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" onClick={()=>{this.handleAddPostClick()}}>Add Post</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link href="https://zip.org.nz/contact" className="nav-link" target="_blank" rel="noopener noreferrer">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" onClick={this.handleLogout}>Logout</Nav.Link>
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