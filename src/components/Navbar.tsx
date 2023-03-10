import styled from "styled-components";
import { BsSearch, BsCart } from "react-icons/bs";
import { GiLotus } from "react-icons/gi";
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
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 30px;
`;

const Search = styled.div`
	border: 1px solid black;
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
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
`;

const Login = styled.div``;
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

export default function Navbar() {
	return (
		<Container>
			<Left>
				<Logo>
					<GiLotus color="#30cfd0" />
					Renderivera.
				</Logo>
			</Left>
			<Center></Center>
			<Right>
				<Search>
					<Input />
					<BsSearch size={10} />
				</Search>
				<Login>Login/Register</Login>
				<Cart>
					<CartBadge>4</CartBadge>
					<BsCart size={30} />
				</Cart>
			</Right>
		</Container>
	);
}
