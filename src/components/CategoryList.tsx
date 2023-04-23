import styled from "styled-components";
import { useGetCategoriesQuery } from "../store";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Heading = styled.h2``;

const CategoriesContainer = styled.div`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export default function CategoryList() {
	const categoriesQuery = useGetCategoriesQuery("");

	const content = categoriesQuery.data?.map((c) => {
		return <CategoryItem key={c.id} item={c} />;
	});

	return (
		<Container>
			<Heading>Categories</Heading>
			<CategoriesContainer>{content}</CategoriesContainer>
		</Container>
	);
}
