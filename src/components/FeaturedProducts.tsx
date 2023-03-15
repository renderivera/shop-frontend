import styled from "styled-components";
import { useGetProductsQuery } from "../store";
import CategoryType from "../types/CategoryType";
import Product from "./ProductItem";

const Container = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;
	flex-direction: column;
`;

const ProductsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
`;

export default function FeaturedProducts() {
	const productsQuery = useGetProductsQuery("");

	const content = productsQuery.data
		?.filter((p) => p.featured)
		.map((p) => <Product key={p.id} item={p} />);

	return (
		<Container>
			<h2>Featured Products</h2>
			<ProductsContainer>{content}</ProductsContainer>
		</Container>
	);
}
