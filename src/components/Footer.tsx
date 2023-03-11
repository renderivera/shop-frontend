import styled from "styled-components";
import {
	AiFillTwitterSquare,
	AiFillFacebook,
	AiFillInstagram,
	AiFillMail,
} from "react-icons/ai";
import { BsFillTelephoneFill, BsFillPinMapFill } from "react-icons/bs";

const Container = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Columns = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	gap: 40px;
	flex-wrap: wrap;
`;

const Left = styled.div`
	flex: 3;
`;
const Center = styled.div`
	flex: 2;
`;
const Right = styled.div`
	flex: 2;
`;

const Socials = styled.div`
	font-size: 25px;
`;
const Contact = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
	margin-top: 4px;
`;
const Text = styled.p`
	margin: 2px;
	font-size: small;
`;
const Copyright = styled.p`
	font-size: small;
	margin-bottom: 5px;
`;

const Title = styled.h4``;
const Links = styled.div`
	font-size: small;
`;

export default function Footer() {
	return (
		<Container>
			<Columns>
				<Left>
					<Title>Renderivera.</Title>
					<Text>
						For over 20 years, Yogamatters has been faithfully supporting yoga
						teachers, yoga studio owners and yoga practitioners around the world
						as they step in and out of classes, journey to retreats and commit
						to daily practice at home.
					</Text>
					<Socials>
						<AiFillTwitterSquare />
						<AiFillFacebook />
						<AiFillInstagram />
					</Socials>
				</Left>
				<Center>
					<Title>Links</Title>
					<Links>
						<Text>Categories</Text>
						<Text>Products</Text>
						<Text>FAQ</Text>
						<Text>Shipping</Text>
					</Links>
				</Center>
				<Right>
					<Title>Contact</Title>
					<Text>
						<Contact>
							<BsFillPinMapFill />
							8532 Melrose Ave, Los Angeles
						</Contact>
						<Contact>
							<AiFillMail />
							contact@renderivera.com
						</Contact>
						<Contact>
							<BsFillTelephoneFill />
							+1 424-999-0954
						</Contact>
					</Text>
				</Right>
			</Columns>
			<Copyright>Copyright 2023, Renderivera</Copyright>
		</Container>
	);
}
