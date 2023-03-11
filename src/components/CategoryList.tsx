import styled from "styled-components";
import { categories } from "../mockdata";
import CategoryType from "../types/CategoryType";
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
`;

interface CategoryListProps {
	filterCategories?: number[];
}

export default function CategoryList({ filterCategories }: CategoryListProps) {
	let catList: CategoryType[];

	if (filterCategories) {
		catList = categories.filter((c) => {
			if (filterCategories) return filterCategories.includes(c.id);
		});
	} else {
		catList = categories;
	}

	return (
		<Container>
			<Heading>Categories</Heading>
			<CategoriesContainer>
				{catList.map((c) => (
					<CategoryItem key={c.id} item={c} />
				))}
			</CategoriesContainer>
		</Container>
	);
}
