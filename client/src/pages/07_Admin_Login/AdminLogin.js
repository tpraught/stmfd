import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
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
                    <Button
                        disabled={!this.validateForm()}
                        id="submit"
                    >
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AdminLogin;