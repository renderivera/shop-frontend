import styled from "styled-components";
const Bar = styled.div`
	background-color: darkgray;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
`;
export default function Announcement() {
	return <Bar>Super Deal! Free Shipping on orders above 30$</Bar>;
}
