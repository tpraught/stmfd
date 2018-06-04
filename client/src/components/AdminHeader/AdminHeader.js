import React,  { Component } from 'react';
import "./AdminHeader.css";
import { Link, withRouter } from "react-router-dom";
import API from "../../utils/API";
import PropTypes from 'prop-types';

const LogOutButton = props => (
	<button type="submit" className="homeLink btn btn-link text-light " {...props} onClick={() => {
		API.logoutUser()
		 props.history.push('/admin/users/login')}}>
		 LOGOUT
	</button>
   );


class AdminHeader extends Component {
	static propTypes = {
         history: PropTypes.object.isRequired
      }
   
  render() {
		const isLoggedIn = this.props.isLoggedIn;
		const {history } = this.props
        
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
								&nbsp;&nbsp;|&nbsp;&nbsp;
								<Link className="homeLink" to="/"> 
									GO TO SMFD.ORG 
								</Link>		
							</div>

							<div className="col-4 text-right">
								{isLoggedIn ? (
									<LogOutButton history={history}/>
								) : (
									<p></p>
								)}
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
