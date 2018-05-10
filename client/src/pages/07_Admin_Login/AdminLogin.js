import React, { Component } from "react";
import { Label, Button, Row, Col, Card } from 'reactstrap';
import { Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import axios from 'axios';
import AdminHeader from "../../components/AdminHeader";
import Wrapper from "../../components/Wrapper";

class AdminLogin extends Component{
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            message: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
				e.preventDefault();
				this.props.history.push('/admin/roster');
        // const { username, password } = this.state;

        // axios.post('/api/auth/login', { username, password })
        // .then((result) => {
        //     localStorage.setItem('jwtToken', result.data.token);
        //     this.setState({ message: '' });
        //     this.props.history.push('/')
        // })
        // .catch((error) => {
        //     if(error.response.status === 401) {
        //         this.setState({ message: 'login failed'});
        //     }
        // });
    }
// export default class AdminLogin extends Component {
//     constructor(props) {
//         super(props);

//         // bound functions
//         this.handleEmailChange = this.handleEmailChange.bind(this);
//         this.handlePasswordChange = this.handlePasswordChange.bind(this);
//         this.handleValidSubmit = this.handleValidSubmit.bind(this);

//         // component state
//         this.state = {
//             email: '',
//             password: '',
//         };
//     }

//     // update state as value changes
//     handleEmailChange(e) {
//         this.setState({ email: e.target.value });
//     }

//     // update state as value changes
//     handlePasswordChange(e) {
//         this.setState({ password: e.target.value });
//     }

//     // handle submit once all data is valid
//     handleValidSubmit() {
//         const { loginFunction } = this.props;
//         const formData = this.state;
//         loginFunction(formData);
//     }

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
        const { username, password, message } = this.state;
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
                                        <Form onSubmit={this.onSubmit} className="adminForm">
                                            {message !== '' &&
                                                <div className="alert" role="alert">
                                                    { message }
                                                </div>
                                            }
                                            <FormGroup>
                                                <Label for="email">
                                                    Email        
                                                </Label>
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    name="username"
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    required
                                                    value={username}
                                                />
                                                <FormFeedback>A valid email is required to log in</FormFeedback>
                                            </FormGroup>  
                                            <FormGroup>
                                                <Label>
                                                    Password
                                                </Label>
                                                <Input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    required
                                                    value={password}                    
                                                />
                                                <FormFeedback>A password is required to log in</FormFeedback>
                                                {/* <span><Link to="/account/reset-password">Forgot your password?</Link></span> */}
                                            </FormGroup>   
                                            <Button 
                                                className="mt-3 redButton addButton float-right"
                                                /* disabled={!this.validateForm()} */
                                                id="submit"
                                                type="submit"
                                            >
                                                Login
                                            </Button>
                                        </Form>
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

export default AdminLogin;