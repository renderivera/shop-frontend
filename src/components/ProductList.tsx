import styled from "styled-components";
import { products } from "../mockdata";
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

interface ProductListProps {
	title: string;
	filter?: {
		category?: number;
		title?: string;
	};
}

export default function ProductList({ title, filter }: ProductListProps) {
	let prodList: ProductType[];

	if (filter) {
		prodList = products.filter((p) => {
			if (filter?.category) return p.categories.includes(filter.category);
			if (filter?.title) return p.title.includes(filter.title);
		});
	} else {
		prodList = products;
	}

	return (
		<Container>
			<h2>{title}</h2>
			<ProductsContainer>
				{prodList.map((p) => (
					<Product key={p.id} item={p} />
				))}
			</ProductsContainer>
		</Container>
	);
}
