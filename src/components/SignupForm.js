import React, { Component } from 'react';

class SignupForm extends Component {

    render(){

        return (

                <div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="username-input" id="username-input" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <select className="form-control custom-select" name="region-input" id="region-input">
                            <option defaultValue="Auckland">Auckland</option>
                            <option value="Northland">Northland</option>
                            <option value="Waikato">Waikato</option>
                            <option value="Wellington">Wellington</option>
                        </select>
                    </div>
                </div>

        )

    }
}

export default SignupForm;