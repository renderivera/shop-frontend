import styled from "styled-components";
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
const SlideText = styled.div`
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
const SlideImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const SlideHeading = styled.h2`
	font-size: xx-large;
	margin: 0;
`;
const SlideDescription = styled.p`
	margin: 0;
`;
const SlideButton = styled.button`
	align-self: center;
	background-color: transparent;
	border: 1px solid black;
	width: 100px;
	cursor: pointer;
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
					<SlideText>
						<SlideHeading>{s.title}</SlideHeading>
						<SlideDescription>{s.description}</SlideDescription>
						<SlideButton>Learn more</SlideButton>
					</SlideText>
					<SlideImage src={s.image} />
				</Slide>
			))}
		</Carousel>
	);
}
