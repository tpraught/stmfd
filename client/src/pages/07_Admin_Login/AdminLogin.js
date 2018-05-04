import React, { Component } from "react";
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import AdminHeader from "../../components/AdminHeader";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";


class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
  
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
  
    handleSubmit = event => {
        event.preventDefault();
    }

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
                                        <Form onSubmit={this.handleSubmit} className="adminForm">
                                            <FormGroup>
                                                <Label for="email">
                                                    Email        
                                                </Label>
                                                <Input
                                                    type="text"
                                                    id="email"
                                                    value={this.state.email}
                                                    onChange={this.handleChange}
                                                />
                                            </FormGroup>  
                                            <FormGroup>
                                                <Label>
                                                    Password
                                                </Label>
                                                <Input
                                                    type="text"
                                                    id="password"
                                                    value={this.state.password}
                                                    onChange={this.handleChange}                    
                                                />
                                            </FormGroup>   
                                            <Button className="mt-3 redButton addButton float-right"
                                                disabled={!this.validateForm()}
                                                id="submit"
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