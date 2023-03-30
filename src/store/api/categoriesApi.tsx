import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CategoryType from "../../types/CategoryType";

export const categoriesApi = createApi({
	reducerPath: "categories",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/categories" }),
	endpoints: (builder) => ({
		getCategories: builder.query<CategoryType[], string>({
			query: () => ({
				url: "",
				method: "GET",
			}),
		}),
	}),
});
