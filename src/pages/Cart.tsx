import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { CartState, useCreateCheckoutSessionMutation } from "../store";
import { getCartItemsReduced } from "../types/CartItemType";

const Container = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 20px;
`;

export default function Cart() {
	const [createCheckoutSession, result] = useCreateCheckoutSessionMutation();

	const cartItems = useSelector(
		({ cart }: { cart: CartState }) => cart.cartItems
	);

	const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
	const cartItemsReduced = getCartItemsReduced(cartItems);

	const content = cartItemsReduced.map((p) => (
		<CartItem key={p.product.id} {...p} />
	));

	const handleCheckout = () => {
		createCheckoutSession({ cartItems });
	};

	if (result.isSuccess) {
		result.data?.url && window.location.replace(result.data.url);
	}

	return (
		<Container>
			<h1>Cart</h1>
			{content}
			<p>Total: {total}$</p>
			<button onClick={handleCheckout}>Checkout</button>
		</Container>
	);
}
