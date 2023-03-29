import styled from "styled-components";
import { useGetProductsQuery } from "../store";
import ProductType from "../types/ProductType";
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

export default function SimilarProducts({
	product,
}: {
	product: ProductType | undefined;
}) {
	const productsQuery = useGetProductsQuery("");

	const content = productsQuery.data
		?.filter(
			(p) =>
				p.categories[0].id === product?.categories[0].id && p.id !== product?.id
		)
		.map((p) => <Product key={p.id} item={p} />);

	return (
		<Container>
			<h2>Similar Products</h2>
			<ProductsContainer>{content}</ProductsContainer>
		</Container>
	);
}
