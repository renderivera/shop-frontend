import styled from "styled-components";
import { products } from "../mockdata";
import { useGetProductsQuery } from "../store";
import CategoryType from "../types/CategoryType";
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

interface productListProps {
	category: CategoryType;
}

export default function ProductList({ category }: productListProps) {
	const productsQuery = useGetProductsQuery("");
	const content = productsQuery.data
		?.filter((p) => p.categories.filter((c) => c.id === category.id).length > 0)
		.map((p) => <Product key={p.id} item={p} />);

	return (
		<Container>
			<ProductsContainer>{content}</ProductsContainer>
		</Container>
	);
}
