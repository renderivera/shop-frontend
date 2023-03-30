import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ProductType from "../../types/ProductType";

export const checkoutApi = createApi({
	reducerPath: "checkout",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000/create-checkout-session",
	}),
	endpoints: (builder) => ({
		createCheckoutSession: builder.mutation({
			query: ({ cartItems }: { cartItems: ProductType[] }) => ({
				url: "/",
				method: "POST",
				body: { cartItems },
			}),
		}),
	}),
});
