import styled from "styled-components";
import ProductType from "../types/ProductType";

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

export default function ProductItem({ item }: ProductItemProps) {
	return (
		<Container>
			<ImageContainer>
				<Image src={item.images[0]} />
				<ImageHover src={item.images[1]} />
			</ImageContainer>
			<Title>{item.title}</Title>
			<Price>{item.price}$</Price>
		</Container>
	);
}
