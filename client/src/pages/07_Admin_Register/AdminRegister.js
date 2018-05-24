import React, { Component } from "react";
import { Label, Button, Row, Col, Card } from 'reactstrap';
import { Form, FormGroup, Input, FormFeedback } from 'reactstrap';

import AdminHeader from "../../components/AdminHeader";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
// import { Typography, } from 'material-ui';


class AdminRegister extends Component {
   
    state = {
        username: "",
        email: "",
        password: "",
        passwordconfirm: "",
        fullname:"",
        error: '',
        open: false
       
    }


  // open login modal
  errDialogOpen = () => { this.setState({ open: true }); };
  // close login modal
  errDialogClose = () => { this.setState({ open: false }); };

    onSubmit = (event) => {
			event.preventDefault();
        console.log('state: ', this.state);
        if (this.state.password !== this.state.passwordConfirm) {
          this.setState({ error: 'Password and Password Confirmation do not match' });
					// launch error dialog
					console.log(this.state.error);
          this.errDialogOpen();
          // return console.error(this.state.error);
        } else if (this.state.password.length < 6) {
          this.setState({ error: 'Password must be at least 6 characters long' });
					// launch error dialog
					console.log(this.state.error);
          this.errDialogOpen();
          // return console.error(this.state.error);
        } else if (
          this.state.username.length < 1 ||
          this.state.email.length < 1 ||
          this.state.fullname.length < 1 
        ) {
					this.setState({ error: 'One or more missing required fields' });
					console.log(this.state.error);
          // launch error dialog
          this.errDialogOpen();
          // return console.error(this.state.error);
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
             
            }, ((typeof this.props.onLogin === 'function') && this.props.onLogin(newUser)));
          })
          .catch(err => console.log('error on registration', err));
      }
    handleInputChange = event => this.setState({ [event.target.name]: event.target.value });

       

  render() {
    return (
  	  <div>
    	  <AdminHeader/>
          <Wrapper>
						<div className="pageTitle mb-5">
							<div className="pageTitle mb-5">
								<h1>REGISTER</h1>  
							</div>
							<Col sm="12">
								<Row className="clearfix text-center justify-content-center">
									<Col sm="12" md="8" className="error">
										<FormErrors formErrors={this.state.error} />
									</Col>
								</Row>
        		  </Col>
							
							<Col>
								<Row className="justify-content-center">
										<Col sm="12" md="6">
										
														<div className="pageTitle">
																<h1>Register</h1>  
														</div>
														<div className="Login mt-5">
															
																<Form className="adminForm">
																 <FormGroup>		  
																	
													       <Label for="fullname">Full Name*</Label>
		                                  <Input 
		                                    type="text" 
		                                    name="fullname"
		                                    id="fullname"
		                                    required value={this.state.fullname}
		                                    onChange={this.handleInputChange}
		                                    />
																				</FormGroup>
																	<FormGroup>
																	<Label for="username">User Name*</Label>
																	<Input 
																		type="text" 
																		name="username"
																		id="username"
																		required value={this.state.username}
																		onChange={this.handleInputChange}
																		/>
																		</FormGroup>
																		<FormGroup>
																				<Label for="email">
																						Email*        
																				</Label>
																				<Input
																						type="email"
																						id="email"
																						name="email"
																						className="form-control"
																						onChange={this.handleInputChange}
																						required value={this.state.email}
																				/>
																		</FormGroup>  
																		<FormGroup>
																				<Label for="password">
																						Password*
																				</Label>
																				<Input
																						type="password"
																						id="password"
																						name="password"
																			
																						required value={this.state.password}
																						onChange={this.handleInputChange}
																				/>
																		</FormGroup>   
																		<FormGroup>
																				<Label for="passwordconfirm">
																						Confirm Password*
																				</Label>
																				<Input
																						type="password"
																						id="passwordconfirm"
																						name="passwordconfirm"
																					
																						required value={this.state.passwordconfirm}
																						onChange={this.handleInputChange}
																				/>
																		</FormGroup>   
																		<Button 
																				className="mt-3 redButton addButton float-right"
																				/* disabled={!this.validateForm()} */
																				id="submit"
																				type="submit"
																				onClick={this.onSubmit}
																		>
																				Register
																		</Button>
																</Form>
														</div>
										
										</Col>
								</Row>
                 </Col>
								</div>
            </Wrapper>

						{/* <Dialog
								open={this.state.open}
								onClose={this.errDialogClose}
								aria-labelledby="alert-dialog-title"
								aria-describedby="alert-dialog-description"
							>
								<DialogTitle id="alert-dialog-title">Error</DialogTitle>
								<DialogContent>
									<h1>{this.state.error}</h1>
								</DialogContent>
								<DialogActions>
									<Button onClick={this.errDialogClose} color="primary">
										OK
									</Button>
									</DialogActions>
      		  </Dialog> */}
        </div>
        );
    }
}

export default AdminRegister;