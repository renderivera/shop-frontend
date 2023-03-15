import ProductType from "../types/ProductType";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../store";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

interface SingleProductProps {
	product: ProductType;
}

const Container = styled.div`
	display: flex;
	gap: 20px;
	margin: 20px;
	justify-content: center;
`;

export default function SingleProduct() {
	const { id } = useParams();

	const { data, error, isLoading } = useGetProductsQuery("");
	const product = data?.filter((p) => p.id.toString() === id)[0];

	return (
		<Container>
			<Carousel
				showArrows={false}
				showThumbs={true}
				showStatus={false}
				autoPlay={false}
			>
				{product?.images.map((i) => (
					<img key={i.id} src={i.url} />
				))}
			</Carousel>
			<div>
				<h1>{product?.title}</h1>
				<p>{product?.description}</p>
			</div>
		</Container>
	);
}
