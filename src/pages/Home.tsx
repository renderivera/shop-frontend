import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";

import Featured from "../components/FeaturedProducts";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div>
			<Hero />
			<CategoryList />
			<Featured />
		</div>
	);
}
