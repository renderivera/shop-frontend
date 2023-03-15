import styled, { keyframes } from "styled-components";
import { slides } from "../mockdata.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SlideType from "../types/SlideType";

const Slide = styled.div<SlideType>`
	background-color: ${(p) => p.color};
	height: 60vh;
	display: flex;
	gap: 10%;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	position: relative;
`;
const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	z-index: 2;
	width: 100%;
	background-color: inherit;
	opacity: 0.75;
	padding: 20px;
`;
const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Heading = styled.h2`
	font-size: xx-large;
	margin: 0;
`;
const Description = styled.p`
	margin: 0;
`;
const Button = styled.button`
	align-self: center;
	background-color: transparent;
	border: 1px solid black;
	width: 100px;
	cursor: pointer;
`;

const breathAnimation = keyframes`
 50%  { scale: 1.15 }
`;
const Ball = styled.div`
	background-color: inherit;
	box-shadow: 0px 0px 5px white;
	border-radius: 50%;
	position: absolute;
	top: 25%;
	width: 30vh;
	height: 30vh;
	opacity: 1;
	animation: ${breathAnimation} 10s ease-in-out infinite;
	transition: all 0.5s;
	&:hover {
		box-shadow: 0px 0px 5px yellow;
	}
`;

export default function Hero() {
	return (
		<Carousel
			showArrows={true}
			showThumbs={false}
			showStatus={false}
			autoPlay={true}
			interval={10000}
			infiniteLoop={true}
		>
			{slides.map((s) => (
				<Slide color={s.color} key={s.id}>
					<Text>
						<Heading>{s.title}</Heading>
						<Description>{s.description}</Description>
						<Button>Learn more</Button>
					</Text>
					<Image src={s.image} />
					<Ball />
				</Slide>
			))}
		</Carousel>
	);
}
