import React,  { Component } from 'react';
import { Button } from 'reactstrap';
import "./AdminHeader.css";
import { Link, withRouter } from "react-router-dom";
import API from "../../utils/API";
import PropTypes from 'prop-types';

const LogOutButton = props => (
	<button type="submit" className="homeLink btn btn-link text-secondary" {...props} onClick={() => {
		API.logoutUser()
		 props.history.push('/admin/users/login')}}>
		 LOGOUT
	</button>
   );


class AdminHeader extends Component {
	static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    logout(event) {
        event.preventDefault()
        console.log('logging out')
       
        console.log("line20", this.props.history)
		API.logoutUser()
		.then(response => {
          console.log("Response back from controller on logout", response.data)
        //   if (response.status === 200) {
        //     this.props.updateUser({
        //       isLoggedIn: false,
        //       currentUser: null
        //     })
		//   }
		this.props.history.push('/admin/users/login');
        }).catch(error => {
            console.log('Logout error', error)
		})
		// this.props.history.push('/admin/users/login');
      }

    render() {
		const isLoggedIn = this.props.isLoggedIn;
		const { match, location, history } = this.props
		console.log("Admin header", this.props.history)
       
        console.log("Passed logged in prop in Admin Header",isLoggedIn);
        
        return (
            <div>

						<header>
					<div id="smallNav" className="row justify-content-between p-2">
					
					<div className="col-8 text-leftt">
						<Link className="homeLink" to="/admin/roster"> 
							FD ROSTER
						</Link>	
						&nbsp;&nbsp;|&nbsp;&nbsp;
						<Link className="homeLink" to="/admin/trainingschedule"> 
							FD SCHEDULE
						</Link>		
						&nbsp;&nbsp;|&nbsp;&nbsp;
						<Link className="homeLink" to="/admin/explorerschedule"> 
							EXPLORER SCHEDULE
						</Link>			

						</div>

						<div className="col-4 text-right">
						<Link className="homeLink" to="/"> 
							GO TO SMFD.ORG 
						</Link>	
						&nbsp;&nbsp;|&nbsp;&nbsp;
						{/* <Button className ="homeLink " type = "submit"  onClick={this.logout}>LOGOUT</Button> */}
						<LogOutButton isLoggedIn = {isLoggedIn} history={history}/>
					
						{/* <Link className="homeLink btn btn-link text-secondary"  onClick={this.logout}>>
						LOGOUT
						</Link> */}
						</div>
					</div>
					<div id="brand" className="position-relative pt-4 pb-5">
					<a className="homeLink" href="/admin/roster"><h2 className="m-0">ADMINISTRATION SITE</h2>
						<h1 className="m-0">ST. MICHAEL FIRE DEPARTMENT</h1></a>
					</div>
				</header>
            </div>

        );

    }
}

export default withRouter(AdminHeader);
