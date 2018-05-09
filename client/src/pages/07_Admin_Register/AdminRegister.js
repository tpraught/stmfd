import React, { Component } from "react";
import { Label, Button, Row, Col, Card } from 'reactstrap';
import { Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import axios from 'axios';
import AdminHeader from "../../components/AdminHeader";
import Wrapper from "../../components/Wrapper";


class AdminRegister extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        axios.post('/api/auth/register', { username, password })
        .then((result) => {
            this.props.history.push("/login")
        });
    }

    render() {
        const { username, password } = this.state;
        return (
        <div>
            <AdminHeader/>
            <Wrapper>
            <Col className="mt-5">
                        <Row className="justify-content-center">
                            <Col sm="12" md="6">
                                <Card className="p-4">
                                    <div className="pageTitle">
                                        <h1>Register</h1>  
                                    </div>
                                    <div className="Login mt-5">
                                        <Form onSubmit={this.onSubmit} className="adminForm">
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
                                            </FormGroup>   
                                            <Button 
                                                className="mt-3 redButton addButton float-right"
                                                /* disabled={!this.validateForm()} */
                                                id="submit"
                                                type="submit"
                                            >
                                                Register
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

export default AdminRegister;