import { NavLink, useParams } from "react-router-dom";
import { CartState, useGetProductsQuery } from "../store";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { addToCart, removeOneFromCart } from "../store";
import { useDispatch, useSelector } from "react-redux";
import SimilarProducts from "../components/SimilarProducts";

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	margin: 20px;
	max-width: 1024px;
`;

const ProductDetails = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
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
		<Center>
			<Container>
				<Carousel
					showArrows={false}
					showThumbs={true}
					showStatus={false}
					autoPlay={false}
					width="350px"
				>
					{product?.images.map((i) => (
						<img key={i.id} src={i.url} />
					))}
				</Carousel>
				<ProductDetails>
					<h1>{product?.title}</h1>
					<p>{product?.description}</p>
					<div>
						<button onClick={handleRemoveFromCart}>-</button>
						<CartInput type="text" readOnly value={productInCart} />
						<button onClick={handleAddToCart}>+</button>
					</div>
					<NavLink to="/cart">
						<button>View Cart</button>
					</NavLink>
				</ProductDetails>
			</Container>
			<div>
				<SimilarProducts product={product} />
			</div>
		</Center>
	);
}
