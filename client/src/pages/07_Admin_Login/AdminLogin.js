import React, { Component } from "react";
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Label, Button, Row, Col, Card } from 'reactstrap';
import AdminHeader from "../../components/AdminHeader";
import Wrapper from "../../components/Wrapper";

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);

        // bound functions
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);

        // component state
        this.state = {
            email: '',
            password: '',
        };
    }

    // update state as value changes
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    // update state as value changes
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    // handle submit once all data is valid
    handleValidSubmit() {
        const { loginFunction } = this.props;
        const formData = this.state;
        loginFunction(formData);
    }

// class AdminLogin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: ""
//         };
//     }
  
    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }
  
    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }
  
    // handleSubmit = event => {
    //     event.preventDefault();
    // }

    render() {
        return (
            <div>
                <AdminHeader/>
                <Wrapper>
                    <Col className="mt-5">
                        <Row className="justify-content-center">
                            <Col sm="12" md="6">
                                <Card className="p-4">
                                    <div className="pageTitle">
                                        <h1>LOGIN</h1>  
                                    </div>
                                    <div className="Login mt-5">
                                        <AvForm onValidSubmit={this.handleValidSubmit} className="adminForm">
                                            <AvGroup>
                                                <Label for="email">
                                                    Email        
                                                </Label>
                                                <AvInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    onChange={this.handleEmailChange}
                                                    onKeyPress={this.handleKeyPress}
                                                    required
                                                    value={this.state.email}
                                                />
                                                <AvFeedback>A valid email is required to log in</AvFeedback>
                                            </AvGroup>  
                                            <AvGroup>
                                                <Label>
                                                    Password
                                                </Label>
                                                <AvInput
                                                    type="text"
                                                    id="password"
                                                    name="password"
                                                    onChange={this.handlePasswordChange}
                                                    onKeyPress={this.handleKeyPress}
                                                    required
                                                    value={this.state.password}                    
                                                />
                                                <AvFeedback>A password is required to log in</AvFeedback>
                                                {/* <span><Link to="/account/reset-password">Forgot your password?</Link></span> */}
                                            </AvGroup>   
                                            <Button className="mt-3 redButton addButton float-right"
                                                /* disabled={!this.validateForm()} */
                                                id="submit"
                                            >
                                                Login
                                            </Button>
                                        </AvForm>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Wrapper>
            </div>
        );
    }
}