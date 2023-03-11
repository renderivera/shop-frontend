import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	background-color: #ffd4b2;
	padding: 20px;
`;
const Description = styled.p`
	margin-top: 0;
`;
const Title = styled.h2`
	margin-top: 0;
`;
const InputForm = styled.form`
	width: 100%;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Input = styled.input`
	border: none;
	width: 250px;
	height: 100%;
`;
const Button = styled.button`
	border: none;
	height: 100%;
	background-color: #fff6bd;
`;

export default function NewsletterSignup() {
	const handelSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
	};

	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>
				Never miss anything, get updates on new releases
			</Description>
			<InputForm onSubmit={handelSubmit}>
				<Input type={"text"} />
				<Button>submit</Button>
			</InputForm>
		</Container>
	);
}
