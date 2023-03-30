import ProductType from "../types/ProductType";
import { useParams } from "react-router-dom";
import { CartState, useGetProductsQuery } from "../store";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { addToCart, removeOneFromCart } from "../store";
import { useDispatch, useSelector } from "react-redux";
import SimilarProducts from "../components/SimilarProducts";
import ProductList from "../components/ProductList";

interface SingleProductProps {
	product: ProductType;
}

const Container = styled.div`
	display: flex;
	gap: 20px;
	margin: 20px;
	justify-content: center;
`;

const CartInput = styled.input`
	width: 20px;
	text-align: center;
`;

export default function SingleProduct() {
	const { id } = useParams();

	const { data, error, isLoading } = useGetProductsQuery("");
	const product = data?.filter((p) => p.id.toString() === id)[0];
	const cartItems = useSelector(
		({ cart }: { cart: CartState }) => cart.cartItems
	);
	const productInCart = cartItems.filter((p) => p === product).length;

	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};
	const handleRemoveFromCart = () => {
		dispatch(removeOneFromCart(product));
	};

	return (
		<>
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
					<div>
						<button onClick={handleRemoveFromCart}>-</button>
						<CartInput type="text" readOnly value={productInCart} />
						<button onClick={handleAddToCart}>+</button>
					</div>
				</div>
			</Container>
			<div>
				<SimilarProducts product={product} />
			</div>
		</>
	);
}
