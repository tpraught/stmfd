import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label } from 'reactstrap';

export default class ProfilePage extends Component {
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
    handleValidSubmit() {
        const { registerFunction } = this.props;
        const formData = this.state;
        registerFunction(formData);
    }

    render() {
        return (
            <div className="">
                <div className="">
                    <p>Create account</p>
                    <AvForm onValidSubmit={this.handleValidSubmit}>
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

                        <Button>Register</Button>
                    </AvForm>
                </div>
            </div>
        );
    }
}