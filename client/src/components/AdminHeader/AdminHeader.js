import React from "react";
import "./AdminHeader.css";
import { Link } from "react-router-dom";

const AdminHeader = () => (

<header>
		<div id="smallNav" className="row justify-content-between p-2">
		
		<div className="col-8 text-leftt">
			<Link to="/admin/add"> 
				ADD FIRE FIGHTER
			</Link>	
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/admin/trainingform"> 
				ADD TRAINING
			</Link>	
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/admin/explorerform"> 
				ADD EXPLORER TRAINING
			</Link>	

			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/admin/roster"> 
				FD ROSTER
			</Link>	

			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/admin/explorerschedule"> 
				EXPLORER SCHEDULE
			</Link>	

			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/admin/trainingschedule"> 
				TRAINING SCHEDULE
			</Link>				

			</div>

			<div className="col-4 text-right">
			<Link to="/"> 
				GO TO SMFD.ORG 
			</Link>	
			&nbsp;&nbsp;|&nbsp;&nbsp;LOGOUT
			</div>
		</div>
		<div id="brand" className="position-relative pt-4 pb-5">
		<a className="homeLink" href="/admin/roster"><h2 className="m-0">ADMINISTRATION SITE</h2>
			<h1 className="m-0">ST. MICHAEL FIRE DEPARTMENT</h1></a>
		</div>
	</header>
);

export default AdminHeader;
