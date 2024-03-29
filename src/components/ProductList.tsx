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

interface productListProps {
	category: CategoryType | undefined;
}

export default function ProductList({ category }: productListProps) {
	const productsQuery = useGetProductsQuery("");
	const content = productsQuery.data
		?.filter(
			(p) => p.categories.filter((c) => c.id === category?.id).length > 0
		)
		.map((p) => <Product key={p.id} item={p} />);

	return (
		<Container>
			<ProductsContainer>{content}</ProductsContainer>
		</Container>
	);
}
