import React from "react";
import "./Signin.css";

function Signin() {
	return (
		<div className="FormWrapper">
			<div className="square"></div>
                <button className="signInBtn">Sign in</button>
                <p>New costumer? <a className="click" href="/">start here</a></p>
		</div>
	);
}

export default Signin;
