import React,  { Component } from 'react';
import "./AdminHeader.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class AdminHeader extends Component {
  

    logout(event) {
        event.preventDefault()
        console.log('logging out')
		API.logoutUser()
		.then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              isLoggedIn: false,
              currentUser: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
       
        console.log("Passed logged in prop in Admin HEader",isLoggedIn);
        
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
						<Link className="homeLink btn btn-link text-secondary" to="/admin/users/login" onClick={this.logout}>>
						LOGOUT
						</Link>
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

export default AdminHeader;
