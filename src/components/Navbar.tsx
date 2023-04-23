import styled from "styled-components";
import { BsSearch, BsCart } from "react-icons/bs";
import { GiLotus } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartState, UserState } from "../store";
import { signOutUser } from "../firebase";
import { AiOutlineUser } from "react-icons/ai";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	gap: 20px;
`;

const Right = styled.div`
	flex: 1;
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 10px;
`;

const Logo = styled.h1`
	text-transform: uppercase;
	margin: 0;
	display: flex;
	align-items: center;
	gap: 10px;
	background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
	-webkit-background-clip: text;
	color: transparent;
	font-size: 25px;
`;

const Login = styled.div`
	font-size: 30px;
`;
const Cart = styled.div`
	position: relative;
`;
const CartBadge = styled.div`
	position: absolute;
	background-color: green;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	font-size: 12px;
	color: white;
	text-align: center;
	right: -5px;
	top: 0px;
`;

const SignedInAs = styled.p`
	margin: 0;
	font-size: small;
`;

export default function Navbar() {
	const user = useSelector(({ user }: { user: UserState }) => user.user);
	const cartItemsLength = useSelector(
		({ cart }: { cart: CartState }) => cart.cartItems.length
	);
	const signedIn = user !== undefined;

	const handleLogout = () => {
		signOutUser();
	};

	return (
		<Container>
			<Left>
				<Logo>
					<GiLotus color="#30cfd0" />
					Renderivera.
				</Logo>
			</Left>

			<Right>
				{!signedIn && (
					<Login>
						<NavLink to="/signup">
							<AiOutlineUser />
						</NavLink>
					</Login>
				)}
				{signedIn && <button onClick={handleLogout}>logout</button>}
				<Cart>
					<NavLink to="/cart">
						<CartBadge>{cartItemsLength}</CartBadge>
						<BsCart size={30} />
					</NavLink>
				</Cart>
			</Right>
		</Container>
	);
}
