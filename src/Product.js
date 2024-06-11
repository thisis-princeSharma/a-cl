import React from "react";
import "./Product.css";

function Product({
	title,
	info,
	price,
	photo,
	photoHover,
	rating,
	offer,
	id,
	reviews,
}) {
	return (
		<div
			className="product"
			id={id}>
			<div className="upperContent">
				<h1 className="title">{title}</h1>
				<p className="info">{info}</p>
				<p className="rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
					<strong>
						<small>({reviews})reviews</small>
					</strong>
				</p>
			</div>
			<div className="middleContent">
				<img
					className="productImage hide"
					src={photo}
					alt="product"
				/>
				<img
					className="productImage show"
					src={photoHover}
					alt="product"
				/>
			</div>
			<div className="lowerContent">
				<h2 className="price">
					<small>
						<strong>$</strong>
					</small>
					{price}
				</h2>
				<p className="offer">
					Today's&nbsp;special&nbsp;offer&nbsp;
					<span>{offer}</span>
				</p>
			</div>
			<div className="btns">
				<button className="addCart">Add to Cart</button>
			</div>
		</div>
	);
}

export default Product;
