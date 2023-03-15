import styled from "styled-components";
import ProductType from "../types/ProductType";
import { NavLink } from "react-router-dom";

const Container = styled.div`
	width: 225px;
`;

const ImageContainer = styled.div`
	position: relative;
	height: 300px;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const ImageHover = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;

	opacity: 0;
	transition: all 1s;

	&:hover {
		opacity: 1;
	}
`;
const Title = styled.h3``;
const Price = styled.p``;

interface ProductItemProps {
	item: ProductType;
}

const maxTitleLength = 35;

export default function ProductItem({ item }: ProductItemProps) {
	const title =
		item.title.length > maxTitleLength
			? `${item.title.substring(0, maxTitleLength).trimEnd()}...`
			: item.title;

	return (
		<Container>
			<NavLink to={`/products/${item.id}`}>
				<ImageContainer>
					<Image src={item.images[0].url} />
					<ImageHover src={item.images[1].url} />
				</ImageContainer>
				<Title>{title}</Title>
				<Price>{item.price}$</Price>
			</NavLink>
		</Container>
	);
}
