import React from "react";
import "./Footer.css";

const Footer = () =>(
 <footer>
		<div id="footerLinks" className="row">
			<div className="container mt-5 mb-4">
				<div className="row justify-content-center">
					<a className="border-0" href="">Home</a>
					<a href="">Community</a>
					<a href="">Fire Safety</a>
					<a href="">News & Events</a>
					<a href="">About</a>
					<a href="">Firefighters & EMTs</a>
					<a href="">Explorers</a>
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

