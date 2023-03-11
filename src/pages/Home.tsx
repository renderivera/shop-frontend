import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Hero />
			<CategoryList filterCategories={[0, 1, 2]} />
			<ProductList title="Trending Products" filter={{ category: 3 }} />
			<NewsletterSignup />
			<Footer />
		</div>
	);
}
