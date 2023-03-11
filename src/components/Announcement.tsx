import styled from "styled-components";
import { useState } from "react";
import { announcement } from "../mockdata";
import { AiFillCloseCircle } from "react-icons/ai";

interface BarProps {
	closed: boolean;
}

const Bar = styled.div<BarProps>`
	background-color: darkgray;
	overflow: hidden;
	height: 20px;
	height: ${(p) => p.closed && "0px"};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	transition: all 1s;
`;

const CloseButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	margin-left: auto;
	display: flex;
	align-items: center;
`;
const Spacer = styled.div`
	margin-right: auto;
`;

export default function Announcement() {
	const [closed, setClosed] = useState(false);

	return (
		<Bar closed={closed}>
			<Spacer />
			{announcement}
			<CloseButton onClick={() => setClosed(true)}>
				<AiFillCloseCircle />
			</CloseButton>
		</Bar>
	);
}
