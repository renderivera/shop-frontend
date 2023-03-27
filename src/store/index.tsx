import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { categoriesApi } from "./api/categoriesApi";
import { userSlice, UserState } from "./slices/userSlice";

export function buildStore() {
	const store = configureStore({
		reducer: {
			[userSlice.name]: userSlice.reducer,
			[productsApi.reducerPath]: productsApi.reducer,
			[categoriesApi.reducerPath]: categoriesApi.reducer,
		},
		middleware: (getDM) =>
			getDM().concat(productsApi.middleware, categoriesApi.middleware),
	});
	return store;
}

export type { UserState };
export const { setUser } = userSlice.actions;
export { useGetProductsQuery } from "./api/productsApi";
export { useGetCategoriesQuery } from "./api/categoriesApi";
