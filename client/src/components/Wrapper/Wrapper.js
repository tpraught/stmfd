import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
	<div id="wrapper" className="container mb-5">
		<div className="row">
			{props.children}
		</div>
	</div>
)

export default Wrapper;
