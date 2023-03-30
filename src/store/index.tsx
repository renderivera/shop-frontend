import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { categoriesApi } from "./api/categoriesApi";
import { userSlice, UserState } from "./slices/userSlice";
import { cartSlice, CartState } from "./slices/cartSlice";
import { checkoutApi } from "./api/checkoutApi";

export function buildStore() {
	const store = configureStore({
		reducer: {
			[cartSlice.name]: cartSlice.reducer,
			[userSlice.name]: userSlice.reducer,
			[productsApi.reducerPath]: productsApi.reducer,
			[categoriesApi.reducerPath]: categoriesApi.reducer,
			[checkoutApi.reducerPath]: checkoutApi.reducer,
		},
		middleware: (getDM) =>
			getDM().concat(
				productsApi.middleware,
				categoriesApi.middleware,
				checkoutApi.middleware
			),
	});
	return store;
}

export type { UserState, CartState };
export const { addToCart, removeOneFromCart, clearCart, removeAllFromCart } =
	cartSlice.actions;
export const { setUser } = userSlice.actions;
export const { useCreateCheckoutSessionMutation } = checkoutApi;
export const { useGetProductsQuery } = productsApi;
export const { useGetCategoriesQuery } = categoriesApi;
