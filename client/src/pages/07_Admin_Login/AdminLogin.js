import React, { Component } from "react";
import { Label, Button, Row, Col, Card } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import API from "../../utils/API";
import DefaultAdminHeader from "../../components/DefaultAdminHeader";
import Wrapper from "../../components/Wrapper";

class AdminLogin extends Component{
	
	state = {
			username: '',
			password: '',
			message: ''
	};

	componentDidMount() {
		API.getCurrentUser()
		.then((response) => {
      const currentUser = response.data.user;
      this.props.onLogin(currentUser);
    });
  }

    submitForm = (e) => {
			console.log("line 24 : will submit")
				e.preventDefault();
				// this.props.history.push('/admin/ros?ter');
				if (this.state.password.length < 1 && this.state.username.length < 1) {
					throw new Error('Bad login info. This is a crappy error message');
				}
				// create object containing username/password from the components state
				const data = {
					username: this.state.username,
					password: this.state.password,
				};
				// attempt login
				API.loginUser(data)
					.then((response) => {
						// get user from response
						console.log("line 39 :",response.data);
						const { user } = response.data;
						// reset username and password fields
						this.setState({ username: '', password: '' });
						// pass user information to App.js
						this.props.onLogin(user);
						// close dialogue
					
					})
					.catch(err => console.log('error on login', err));
		}
		
		logoff = (event) => {
			event.preventDefault();
			API.logoutUser()
			.then(this.props.onLogin('null'));
		}

		handleInputChange = event => this.setState({ [event.target.name]: event.target.value })
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
  
 

    render() {
      const { classes } = this.props;
        return (
            <div>
                <DefaultAdminHeader/>
                <Wrapper>
							<Col className="mt-5">
									<Row className="justify-content-center">
											<Col sm="12" md="6">
													<Card className="p-4">
													{this.props.currentUser && this.props.currentUser.username ?
												<div className="pageTitle">
													<Button 
															className="mt-3 redButton addButton float-right"
															/* disabled={!this.validateForm()} */
															id="submit"
															type="submit"
															onClick = {this.logoff}
														>
														Login
														</Button> 
													</div> :

													<div>	
															<div className="pageTitle">
																	<h1>LOGIN</h1>  
															</div>
															<div className="Login mt-5">
																	<Form >
																		
																			<FormGroup>
																					<Label for="username">
																							Username      
																					</Label>
																					<Input
																							type="text"
																							id="username"
																							name="username"
																							onChange={this.handleInputChange}
																							value={this.state.username}
																					
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
																							value={this.state.password}
																							onChange={this.handleInputChange}
																						
																						                   
																					/>
																				
																			</FormGroup>   
																			<Button 
																					className="mt-3 redButton addButton float-right"
																					/* disabled={!this.validateForm()} */
																					id="submit"
																					type="submit"
																					onClick = {this.submitForm}
																			>
																					Login
																			</Button>
																	</Form>
															</div>
														</div>
													}
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