import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CategoryType from "../../types/CategoryType";
import ProductType from "../../types/ProductType";

export const productsApi = createApi({
	reducerPath: "products",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/products" }),
	endpoints: (builder) => ({
		getProducts: builder.query<ProductType[], string>({
			query: () => ({
				url: "/",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;