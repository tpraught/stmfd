import React from "react";
import "./AdminHeader.css";
import { Link } from "react-router-dom";

const AdminHeader = () => (

<header>
		<div id="smallNav" className="row justify-content-between p-2">
			<div className="col-12 text-right">
			<Link to="/"> 
				GO TO SMFD.ORG 
			</Link>	
			|LOGOUT
			</div>
		</div>
		<div id="brand" className="position-relative pt-4 pb-5">
			<h1 className="m-0">ST. MICHAEL FIRE DEPARTMENT</h1>
			<h3>ADMINISTRATION SITE</h3>
		</div>
	</header>
);

export default AdminHeader;
