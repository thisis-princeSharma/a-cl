import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
	return (
		<div
			className="main"
			id="main">
			<div
				id="carouselExampleAutoplaying"
				className="carousel slide"
				data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://ik.imagekit.io/Prince/1__2_.jpg?updatedAt=1680163654868"
							className=" d-block w-100"
							alt="img"
						/>
					</div>
					<div className="carousel-item active">
						<img
							src="https://ik.imagekit.io/Prince/1__1_.jpg?updatedAt=1680163651918"
							className=" d-block w-100"
							alt="img"
						/>
					</div>
					<div className="carousel-item active">
						<img
							src="https://ik.imagekit.io/Prince/1__3_.jpg?updatedAt=1680163659224"
							className=" d-block w-100"
							alt="img"
						/>
					</div>
					<div className="carousel-item active">
						<img
							src="https://ik.imagekit.io/Prince/1__5_.jpg?updatedAt=1680163696994"
							className=" d-block w-100"
							alt="img"
						/>
					</div>
					<div className="carousel-item active">
						<img
							src="https://ik.imagekit.io/Prince/1.jpg?updatedAt=1680163667853"
							className=" d-block w-100"
							alt="img"
						/>
					</div>
				</div>

				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
			<div className="Product__rows__top">
				<Product
					rating={5}
					title={"shree bhagwad gita"}
					reviews={510}
					photo="https://ik.imagekit.io/Prince/product.jpg?updatedAt=1680170695910"
					photoHover="https://ik.imagekit.io/Prince/product.jpg?updatedAt=1680170695910"
					offer={"15% off"}
					price={"6.80"}
					info={
						"The Lean Startup, a book by eric reese to how to become a good entreprenure and how to get the business shine in the world"
					}
				/>
				<Product
					rating={4}
					title={"shoe dog by phil knight"}
					reviews={510}
					photoHover="https://ik.imagekit.io/Prince/shoe_dog.jpg?updatedAt=1680171733610"
					photo="https://ik.imagekit.io/Prince/shoe_dog.jpg?updatedAt=1680171733610"
					offer={"15% off"}
					price={"6.80"}
					info={
						"The Lean Startup, a book by eric reese to how to become a good entreprenure and how to get the business shine in the world"
					}
				/>
				<Product
					rating={4}
					title={"the lean startup by eric ries"}
					reviews={130}
					photo="https://ik.imagekit.io/Prince/product.webp?updatedAt=1680079089848"
					photoHover="https://ik.imagekit.io/Prince/product.webp?updatedAt=1680079089848"
					offer={"20% off"}
					price={"2.99"}
					info={
						"The Lean Startup, a book by eric reese to how to become a good entreprenure and how to get the business shine in the world"
					}
				/>
			</div>
			<div className="Product__rows">
				<Product
					rating={4}
					title={"macbook air m1 - gold"}
					reviews={50}
					photo="https://ik.imagekit.io/Prince/mac.jpg?updatedAt=1680234115078"
					photoHover="https://ik.imagekit.io/Prince/mac.jpg?updatedAt=1680234115078"
					offer={"15% off"}
					price={"999"}
					info={
						"Macbook air m1 256gb storage and 8gb ram for smooth usage and light weight, charger in the box"
					}
				/>
				<Product
					id={"boatearphone"}
					rating={5}
					title={"BoAt nirvana Ion Earphones - 120 hourse Playback"}
					reviews={250}
					photo="https://ik.imagekit.io/Prince/ion-b_800x.webp?updatedAt=1681201898261"
					photoHover="https://ik.imagekit.io/Prince/ion-W_800x.webp?updatedAt=1681201898238"
					offer={"5% off"}
					price={"25"}
					info={
						"Boat nirvana ion true wireless headphones, 24 hours play with a single charge and 120 hours total playback with case, with noise cancellation feature."
					}
				/>
			</div>
			<div className="Product__rows">
				<Product
					rating={5}
					title={"shree bhagwad gita"}
					reviews={510}
					photo="https://ik.imagekit.io/Prince/product.jpg?updatedAt=1680170695910"
					photoHover="https://ik.imagekit.io/Prince/product.jpg?updatedAt=1680170695910"
					offer={"15% off"}
					price={"6.80"}
					info={
						"The Lean Startup, a book by eric reese to how to become a good entreprenure and how to get the business shine in the world"
					}
				/>
				<Product
					rating={5}
					title={"shoe dog by phil knight"}
					reviews={510}
					photoHover="https://ik.imagekit.io/Prince/shoe_dog.jpg?updatedAt=1680171733610"
					photo="https://ik.imagekit.io/Prince/shoe_dog.jpg?updatedAt=1680171733610"
					offer={"15% off"}
					price={"6.80"}
					info={
						"The Lean Startup, a book by eric reese to how to become a good entreprenure and how to get the business shine in the world"
					}
				/>
			</div>
		</div>
	);
}

export default Home;
