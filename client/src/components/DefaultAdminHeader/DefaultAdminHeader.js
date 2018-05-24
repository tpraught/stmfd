import React from "react";
import "./DefaultAdminHeader.css";
import { Link } from "react-router-dom";

const DefaultAdminHeader = () => (

<header>
		<div id="smallNav" className="row justify-content-between p-2">
				
	<div className="col-4 text-left">
			<Link className="homeLink" to="/"> 
				GO TO SMFD.ORG 
			</Link>	
		
			
			</div>
		</div>
		<div id="brand" className="position-relative pt-4 pb-5">
		<p className="homeLink" href="/admin/roster"><h2 className="m-0">ADMINISTRATION SITE</h2> </p>
			<h1 className="m-0">ST. MICHAEL FIRE DEPARTMENT</h1>
		</div>
	</header>
);

export default DefaultAdminHeader;
