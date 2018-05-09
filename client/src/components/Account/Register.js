import React, { Component } from "react";
import API from "../../utils/API";
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label } from 'reactstrap';
// import AdminHeader from "../../components/AdminHeader";
// import Wrapper from "../../components/Wrapper";
// import FormErrors from "../../components/Errors";
// import Footer from "../../components/Footer";

export default class Register extends Component {
    constructor(props) {
        super(props);

        // bound functions
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);

        // component state
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            username: ''
        };
    }

    // handle input changes
    handleInputChange(e) {
        this.setState({ [e.currentTarget.id]: e.target.value });
    }

    // handle submit
    handleValidSubmit = event => {
        event.preventDefault();

        API.saveUser({
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            username: this.state.username
        });
        this.props.history.push('/account/register');
    }

    render() {
        return (
            <div className="">
                <div className="">
                    <p>Create account</p>
                    <AvForm>
                        <AvGroup>
                            <Label for="email">Email</Label>
                            <AvInput 
                                id="email"
                                name="email"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                required
                                type="email"
                                value={this.state.email}
                            />
                            <AvFeedback>Valid email required.</AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="password">Password</Label>
                            <AvInput 
                                id="password"
                                minLength="8"
                                name="password"
                                require
                                type="password"
                                value={this.state.password}
                            />
                            <AvFeedback>Password must be at least 8 characters</AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="username">Username</Label>
                            <AvInput 
                                id="username"
                                name="username"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                required
                                type="text"
                                value={this.state.username}
                            />
                            <AvFeedback>Username is required</AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="firstName">First Name</Label>
                            <AvInput 
                                id="firstName"
                                name="firstName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                required
                                type="text"
                                value={this.state.firstName}
                            />
                            <AvFeedback>First name is required</AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="lastName">Last Name</Label>
                            <AvInput 
                                id="lastName"
                                name="lastName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                required
                                type="text"
                                value={this.state.lastName}
                            />
                            <AvFeedback>Last name is required</AvFeedback>
                        </AvGroup>

                        <Button type="submit" onClick={this.handleValidSubmit}>Register</Button>
                    </AvForm>
                </div>
            </div>
        );
    }
}



// router.route("/addUser")
// .post(rosterController.create);

// create: function(req, res) {
// 	console.log(req.body);
//     db.Roster
//       .create(req.body)
//       .then(console.log("Record successfully created"))
//       .catch(err => res.status(422).json(err));
//   }