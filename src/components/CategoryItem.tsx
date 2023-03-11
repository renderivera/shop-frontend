import styled from "styled-components";
import CategoryType from "../types/CategoryType";

const Container = styled.div`
	position: relative;
	overflow: hidden;
	width: 300px;
	height: 300px;
	transition: all 0.5s;

	&:hover {
		box-shadow: 2px 2px 10px gray;
	}

	&:active {
		translate: 2px 2px;
	}
`;
const ItemTitle = styled.h3`
	margin: 0;
`;
const ItemDesc = styled.p``;
const ItemImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Button = styled.button`
	background-color: transparent;
	border: 1px solid;
	color: white;
	cursor: pointer;
`;
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
`;

const OverlayBg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #00000085;
	width: 100%;
	padding: 10px;
`;

interface CategoryItemProps {
	item: CategoryType;
}

export default function CategoryItem({ item }: CategoryItemProps) {
	return (
		<Container>
			<ItemImage src={item.image} />
			<Overlay>
				<OverlayBg>
					<ItemTitle>{item.title}</ItemTitle>
					<ItemDesc>{item.description}</ItemDesc>
					<Button>shop now</Button>
				</OverlayBg>
			</Overlay>
		</Container>
	);
}
