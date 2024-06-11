import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Checkout from "./Checkout";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Signin from "./Signin";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
								<Footer />
							</>
						}
					/>

					<Route
						path="checkout"
						element={
							<>
								<Header />
								<Checkout />
								<Footer />
							</>
						}
					/>
					<Route
						path="signin"
						element={
							<>
								<Header />
								<Signin />
								<Footer />
							</>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
