import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="upperFooter">
				<div className="columns">
					<h3>Get to Know Us</h3>
					<a href="#">Careers</a>
					<a href="#">Press Releases</a>
					<a href="#">Amazon Science</a>
				</div>
				<div className="columns">
					<h3>Connect with Us</h3>
					<a href="#">Facebook</a>
					<a href="#">Instagram</a>
					<a href="#">Twitter</a>
				</div>
				<div className="columns">
					<h3>Make Money with Us</h3>
					<a href="#">Sell on Amazon</a>
					<a href="#">Sell under Amazon Accelerator</a>
					<a href="#">Protect and Build Your Brand</a>
					<a href="#">Amazon Global Selling</a>
				</div>
			</div>

			<div className="middleFooter">
				<li>Australia</li>
				<li>India</li>
				<li>America</li>
				<li>United Kingdom</li>
				<li>Germany</li>
				<li>Frane</li>
				<li>China</li>
				<li>Canada</li>
			</div>
			<div className="lowerFooter">
				<div className="columns">
					<img src="https://ik.imagekit.io/Prince/amazon-logo.png?updatedAt=1680061824004" />
				</div>

				<div className="columns">
					<a href="#">© 1996-2023, Amazon.com, Inc. or its affiliates</a>
				</div>
			</div>
			<div className="lowerFooter">
				<div className="columns">
					<p>#This amazon clone site is just a practice project!#</p>
					<h6>Made By Prince Sharma</h6>
					<a href="http://princesharma.ca">Go On My Portfolio Website</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
