import styled from "styled-components";
import { useRef, useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 400px;
`;

const Input = styled.input`
	margin-bottom: 10px;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Error = styled.div`
	background-color: #ef9aab;
	padding: 5px;
	color: red;
	font-size: small;
`;

export default function SignUp() {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordConfRef = useRef<HTMLInputElement>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const email = emailRef.current?.value as string;
		const pwd = passwordRef.current?.value as string;
		const pwdConf = passwordConfRef.current?.value as string;

		if (pwd !== pwdConf) {
			setError("passwords do not match");
			return;
		}
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, pwd)
			.catch((reason: Error) => {
				setError(reason.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<Container>
			<h1>Sign Up</h1>
			{error && <Error>{error}</Error>}
			<Form onSubmit={handleSubmit}>
				<label htmlFor="email">email</label>
				<Input id="email" type="email" ref={emailRef} required />
				<label htmlFor="password">password</label>
				<Input id="password" type="password" ref={passwordRef} required />
				<label htmlFor="password-confirm">password(confirm)</label>
				<Input
					id="password-confirm"
					type="password"
					ref={passwordConfRef}
					required
				/>
				<Input type="submit" value="sign up" disabled={loading} />
			</Form>
		</Container>
	);
}
