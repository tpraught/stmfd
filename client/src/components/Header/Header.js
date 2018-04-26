import React from "react";
import "./Header.css";

const Header = () => (

<header>
		<div id="smallNav" className="row justify-content-between p-2">
			<div className="col-3">
				Weather API
			</div>
			<div className="col-3 text-right">
				JOIN SMFD | CONTACT
			</div>
		</div>
		<div id="brand" className="position-relative pt-4 pb-5">
			<h2 className="m-0">WELCOME TO THE </h2>
			<h1 className="m-0">ST. MICHAEL FIRE DEPARTMENT</h1>
			<div className="row justify-content-center">
				<div id="badge" className="position-absolute"><img src="assets/images/logo_badge.svg" width="200" alt="SMFD Badge" /></div>
			</div>
		</div>
	</header>
);

export default Header;
