import React, { Component } from "react";
import { Label, Button, Row, Col, Card } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import API from "../../utils/API";
import DefaultAdminHeader from "../../components/DefaultAdminHeader";
import { withRouter } from 'react-router-dom'
import Wrapper from "../../components/Wrapper";
// import FormErrors from "../../components/Errors";
import PropTypes from 'prop-types';

class AdminLogin extends Component{
	
	state = {
			username: '',
			password: '',
      message: '',
      authError:''
	}

    static propTypes = {
        history: PropTypes.object.isRequired
      }
    
	componentDidMount() {
		API.getCurrentUser()
	  	.then((response) => {
				const currentUser = response.data.user;
        this.props.onLogin(currentUser);
    });
  }

  submitForm = (e) => {
      e.preventDefault();
   
      if (this.state.password.length < 1 && this.state.username.length < 1) {
        throw new Error('Bad login info.');
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
          const  user = response.data;
          // reset username and password fields
          this.setState({ username: '', password: '' });
          // pass user information to App.js
         this.props.onLogin(user);
         //redirect to Admin Roster page
         this.props.history.push('/admin/roster');
      })
      .catch(err => {
        console.log('error on login', err);
        this.setState({authError:"Your login was not successful. Please try again." });
        console.log("line 58",this.state.authError);
      
      
      });
    }
	
		handleInputChange = event => this.setState({ [event.target.name]: event.target.value })

    render() {
      const error = this.state.authError;
        return (
          <div>
            <DefaultAdminHeader/>
            <Wrapper>
              <Col className="mt-5">
                <Row className="justify-content-center">
                  <Col sm="12" md="6">
                    <Card className="p-4">
                    <div>	
                      <div className="pageTitle">
                        <h1>LOGIN</h1>  
                      </div>
                      <div className="Login mt-5">
                   {error? ( 
                      <Col sm="12">
                        <Row className="clearfix text-center justify-content-center">
                          <Col sm="12" md="8" className="error">
                            <p> {this.state.authError} </p>
                          </Col>
                        </Row>
                      </Col>
                    ) : (
                        <div></div>

                    )}    
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
                       </Card>
                      </Col>
                   </Row>
               </Col>
            </Wrapper>
           </div>
    );
  }
}

export default withRouter(AdminLogin);