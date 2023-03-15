import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsletterSignup from "./components/NewsletterSignup";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleCategory from "./pages/SingleCategory";
import SingleProduct from "./pages/SingleProduct";
import { buildStore } from "./store";

export default function App() {
	const store = buildStore();

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Announcement />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
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
