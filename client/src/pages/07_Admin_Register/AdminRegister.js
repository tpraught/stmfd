import React, { Component } from "react";
import { Label, Button, Row, Col } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
// import FormErrors from "../../components/Errors";
import DefaultAdminHeader from "../../components/DefaultAdminHeader";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";



class AdminRegister extends Component {
   
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        fullname:"",
        error: ''
    }


		onSubmit = (event) => {
			event.preventDefault();
				console.log('state: ', this.state);
				
					

        if (this.state.password !== this.state.passwordConfirm) {
          this.setState({ error: 'Password and Password Confirmation do not match' });
					// launch error dialog
					console.log(this.state.error);
        
          return console.error(this.state.error);
        } else if (this.state.password.length < 6) {
          this.setState({ error: 'Password must be at least 6 characters long' });
					// launch error dialog
					console.log(this.state.error);

          return console.error(this.state.error);
        } else if (
          this.state.username.length < 1 ||
          this.state.email.length < 1 ||
          this.state.fullname.length < 1 
        ) {
					this.setState({ error: 'One or more missing required fields' });
					console.log(this.state.error);
          // launch error dialog
        
          return console.error(this.state.error);
        }
        const data = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          fullname: this.state.fullname
          
				};
				
			  API.registerUser(data)
          .then((response) => {
            const newUser = response.data.user;
            // send the new user data up to the App.js component
            console.log('newUser: ', newUser);
            this.setState({
              username: '',
              email: '',
              password: '',
              passwordConfirm: '',
              fullname: ''
             
						}
						// , ((typeof this.props.onLogin === 'function') && this.props.onLogin(newUser))
					);
          })
					.catch(err => console.log('error on registration', err));
					this.props.history.push('/admin/users/login');
      }
		handleInputChange = event => 
			this.setState({ [event.target.name]: event.target.value });

       

  render() {
    return (
  	  <div>
    	  <DefaultAdminHeader/>
          <Wrapper>
							<div className="pageTitle mb-5">
								<h1>REGISTER</h1>  
							</div>

							<Col sm="12">
								<Row className="clearfix text-center justify-content-center">
									<Col sm="12" md="8" >
										{/* <FormErrors formErrors={this.state.error} /> */}
										<p>{this.state.error}</p>
									</Col>
								</Row>
        		  </Col>
							
							<Col>
								<Row className="justify-content-center">
								<Form className="adminForm">
									 <FormGroup>
											<Col sm="12" >
													<Row>
													<Col sm="12" md="6">			
															<Label for="fullname">Full Name*</Label>
	                                  <Input 
	                                    type="text" 
	                                    name="fullname"
	                                    id="fullname"
	                                    required value={this.state.fullname}
	                                    onChange={this.handleInputChange}
	                                    />
														</Col>	
																	
														<Col sm="12" md="6">			
															<Label for="username">Username*</Label>
																<Input 
																	type="text" 
																	name="username"
																	id="username"
																	required value={this.state.username}
																	onChange={this.handleInputChange}
																	/>
														</Col>
													</Row>

													<Row>				
														<Col sm="12" md="12">			
															<Label for="email">	Email* </Label>
															<Input
																	type="email"
																	id="email"
																	name="email"
																	onChange={this.handleInputChange}
																	required value={this.state.email}
															/>
														</Col>
													</Row>	

													<Row>				
														<Col sm="12" md="6">	
															<Label for="password"> Password* </Label>
															<Input
																	type="password"
																	id="password"
																	name="password"
																	required value={this.state.password}
																	onChange={this.handleInputChange}
															/>
														</Col>
															
														<Col sm="12" md="6">				
															<Label for="passwordconfirm">	Confirm Password*</Label>
																<Input
																		type="password"
																		id="passwordConfirm"
																		name="passwordConfirm"
																		required value={this.state.passwordConfirm}
																		onChange={this.handleInputChange}
															/>
															</Col>
													</Row>	
											</Col>		
										</FormGroup>	 
										<Row>
                		  <Col sm="12" md="6" className="float-left">
                 			   <p className="pl-3">* Required fields</p>
                		  </Col>
                		  <Col sm="12" md="6">
													<Button className="mt-3 redButton addButton float-right" id="submit" type="submit" 	onClick={this.onSubmit}>Register</Button>
											</Col>
                		</Row>
              </Form>
            </Row>
          </Col>
            </Wrapper>
					
        </div>
        );
    }
}

export default AdminRegister;