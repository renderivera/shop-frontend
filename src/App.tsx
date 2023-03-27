import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./components/Announcement";
import AuthStateHandler from "./components/AuthStateHandler";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsletterSignup from "./components/NewsletterSignup";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SingleCategory from "./pages/SingleCategory";
import SingleProduct from "./pages/SingleProduct";

interface props {
	store: ToolkitStore;
}

export default function App({ store }: props) {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AuthStateHandler />
				<Announcement />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/products/:id" element={<SingleProduct />} />
					<Route path="/categories/:id" element={<SingleCategory />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<NewsletterSignup />
				<Footer />
			</BrowserRouter>
		</Provider>
	);
}
