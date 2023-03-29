import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { categoriesApi } from "./api/categoriesApi";
import { userSlice, UserState } from "./slices/userSlice";
import { cartSlice, CartState } from "./slices/cartSlice";

export function buildStore() {
	const store = configureStore({
		reducer: {
			[cartSlice.name]: cartSlice.reducer,
			[userSlice.name]: userSlice.reducer,
			[productsApi.reducerPath]: productsApi.reducer,
			[categoriesApi.reducerPath]: categoriesApi.reducer,
		},
		middleware: (getDM) =>
			getDM().concat(productsApi.middleware, categoriesApi.middleware),
	});
	return store;
}

export type { UserState, CartState };
export const { addToCart, removeOneFromCart, clearCart, removeAllFromCart } =
	cartSlice.actions;
export const { setUser } = userSlice.actions;
export { useGetProductsQuery } from "./api/productsApi";
export { useGetCategoriesQuery } from "./api/categoriesApi";
