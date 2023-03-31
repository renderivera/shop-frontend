import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ProductType from "../../types/ProductType";

export const productsApi = createApi({
	reducerPath: "products",
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_SERVER_URL}/products`,
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<ProductType[], string>({
			query: () => ({
				url: "/",
				method: "GET",
			}),
		}),
	}),
});
