import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CategoryType from "../../types/CategoryType";

export const categoriesApi = createApi({
	reducerPath: "categories",
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_SERVER_URL}/categories`,
	}),
	endpoints: (builder) => ({
		getCategories: builder.query<CategoryType[], string>({
			query: () => ({
				url: "",
				method: "GET",
			}),
		}),
	}),
});
