import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./components/Announcement";
import AuthStateHandler from "./components/AuthStateHandler";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsletterSignup from "./components/NewsletterSignup";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OrderCancel from "./pages/OrderCancel";
import OrderSuccess from "./pages/OrderSuccess";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SingleCategory from "./pages/SingleCategory";
import SingleProduct from "./pages/SingleProduct";
import "./styles.css";
import ScrollToTop from "./components/ScrollToTop";

interface props {
	store: ToolkitStore;
}

export default function App({ store }: props) {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AuthStateHandler />
				<ScrollToTop />
				<Announcement />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/order/success" element={<OrderSuccess />} />
					<Route path="/order/cancel" element={<OrderCancel />} />
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
