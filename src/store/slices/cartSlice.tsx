import { createSlice } from "@reduxjs/toolkit";
import ProductType from "../../types/ProductType";

export interface CartState {
	cartItems: ProductType[];
}

const initialState: CartState = {
	cartItems: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cartItems.push(action.payload);
		},
		removeOneFromCart: (state, action) => {
			let foundOne = false;
			state.cartItems = state.cartItems.filter((item) => {
				if (!foundOne && item.id === action.payload.id) {
					foundOne = true;
					return false;
				}
				return true;
			});
		},
		removeAllFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload.id
			);
		},
		clearCart: (state) => {
			state.cartItems = [];
		},
	},
});
