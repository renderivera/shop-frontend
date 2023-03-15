import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import { useGetCategoriesQuery } from "../store";

export default function SingleCategory() {
	const { id } = useParams();
	const categoriesQuery = useGetCategoriesQuery("");

	let content = <div>loading...</div>;

	if (categoriesQuery.data) {
		const category = categoriesQuery.data.filter(
			(c) => c.id.toString() === id
		)[0];

		content = <ProductList category={category} />;
	}

	return content;
}
