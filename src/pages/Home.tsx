import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import Featured from "../components/FeaturedProducts";

export default function Home() {
	return (
		<div>
			<Hero />
			<CategoryList />
			<Featured />
		</div>
	);
}
