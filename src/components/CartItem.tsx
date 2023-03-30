import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart, removeOneFromCart } from "../store";
import CartItemType from "../types/CartItemType";

const Container = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	border: 1px solid #ccc;
	box-shadow: 2px 2px 2px #ccc;
	max-width: 400px;
`;

const Right = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CartInput = styled.input`
	width: 20px;
	text-align: center;
`;

const Image = styled.img`
	width: 50px;
`;

const CartCount = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

export default function CartItem({ count, product }: CartItemType) {
	const dispatch = useDispatch();

	const price = (product.price * count).toFixed(2);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};
	const handleRemoveFromCart = () => {
		dispatch(removeOneFromCart(product));
	};

	return (
		<Container>
			<Image src={product.images[0].url} />
			{product.title}
			<Right>
				<CartCount>
					<button onClick={handleRemoveFromCart}>-</button>
					<CartInput type="text" readOnly value={count} />
					<button onClick={handleAddToCart}>+</button>
				</CartCount>
				{price}$
			</Right>
		</Container>
	);
}
