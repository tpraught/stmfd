import React from "react";
import "./Footer.css";

const Footer = () =>(
 <footer>
	<div id="footerLinks" className="row">
		<div className="container mt-5 mb-4">
			<div className="row justify-content-center">
				<a className="border-0" href="/">Home</a>
				<a href="/ContactUs">Contact Us</a>
				<a href="https://www.facebook.com/stmichaelfire/" target="_blank">SMFD Facebook</a>
				<a href="https://www.facebook.com/StMichael-Fire-Explorers-495984477146310/" target="_blank">SMFD Explorers Facebook</a>
				<a href="http://www.ci.st-michael.mn.us/" target="_blank">City of St. Michael</a>
			</div>
		</div>
	</div>
	<div className="container mb-5">
		<div id="copyRight" className="row justify-content-center border-0">
			Copyright &#169; 2018 - St. Michael Fire Department
		</div>
	</div>
</footer>	

)

export default Footer;

