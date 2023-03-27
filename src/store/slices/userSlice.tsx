import { createSlice } from "@reduxjs/toolkit";
import { User } from "@firebase/auth";

export interface UserState {
	user: User | undefined;
}

const initialState: UserState = { user: undefined };

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload as User;
		},
	},
});
