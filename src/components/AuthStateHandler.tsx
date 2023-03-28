import { useDispatch } from "react-redux";
import { auth, onAuthStateChanged } from "../firebase";
import { setUser } from "../store";
import { useEffect } from "react";

export default function AuthStateHandler() {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubsribe = onAuthStateChanged(auth, (user) => {
			dispatch(setUser(user?.toJSON()));
		});
		return unsubsribe;
	}, []);

	return <div />;
}
