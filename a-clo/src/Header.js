import React from "react";
import "./Header.css";
import Signin from "./Signin";
import { Link } from "react-router-dom";
function Header() {
	function searchCategory() {
		let categoryWidth = document.getElementById("categories");
		let inputWidth = document.getElementById("searchForm");
		categoryWidth.style.width = "auto";
		inputWidth.style.width = "30vw";
	}

	return (
		<div className="HeaderWrapper">
			<ul className="UpperHeader">
				<li className="logo">
					<Link
						to="/"
						className="link">
						<a href="#main">
							<img
								src="https://ik.imagekit.io/Prince/amazon-logo.png?updatedAt=1680061824004"
								alt="amazon.in"
							/>
						</a>
						
					</Link>
				</li>
				<li className="search">
					<form>
						<select
							onClick={searchCategory}
							className="categories"
							name="categories"
							id="categories"
							placeholder="All">
							<option>All Categories</option>
							<option>Electronics</option>
							<option>Fashion</option>
							<option>Alexa</option>
							<option>Home</option>
							<option>Beauty</option>
							<option>Car & Motorbike</option>
							<option>Deals</option>
							<option>Sports</option>
							<option>Books</option>
							<option>Stationary</option>
						</select>
						<input
							id="searchForm"
							type={"text"}
							placeholder="Search Amazon.com"
							className="SearchArea"
						/>
						<input
							type={"submit"}
							className="SearchBtn"
							placeholder="none"
						/>
					</form>
				</li>
				<li className="account">
					<span className="guest">Hello guest,</span>
					<span
						className="signIn"
						id="signIn">
						Sign in
					</span>
				</li>
				<li className="return">
					<span className="ret">return</span>
					<span className="orders">& Orders</span>
				</li>
				<li className="cart">
					<Link
						to="/Checkout"
						className="link">
						<img
							className="cartImage"
							src="https://ik.imagekit.io/Prince/Asset_1cart_icon.svg?updatedAt=1680970736360"
						/>
						<span>0</span>
					</Link>
				</li>
			</ul>
			<ul className="LowerHeader">
				<li className="toogle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						fill="currentColor"
						class="bi bi-list"
						viewBox="0 0 16 16">
						<path
							fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
					&nbsp;All
				</li>
				<li>Amazon&nbsp;miniTV</li>
				<li>Best&nbsp;Sellers</li>
				<li>Mobiles</li>
				<li>Today's&nbsp;Deals</li>
				<li>Costumer&nbsp;Service</li>
				<li>Electronics</li>
			</ul>
		</div>
	);
}

export default Header;
