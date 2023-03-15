import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { categoriesApi } from "./api/categoriesApi";

export function buildStore() {
	const store = configureStore({
		reducer: {
			[productsApi.reducerPath]: productsApi.reducer,
			[categoriesApi.reducerPath]: categoriesApi.reducer,
		},
		middleware: (getDM) =>
			getDM().concat(productsApi.middleware, categoriesApi.middleware),
	});
	return store;
}

export { useGetProductsQuery } from "./api/productsApi";
export { useGetCategoriesQuery } from "./api/categoriesApi";
