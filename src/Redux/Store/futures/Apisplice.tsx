import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Products {
  id: number;
  title: string;
  price: number;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://dummyjson.com/` }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<Products[], void>({
      query: () => `products`,
    }),
    getProduct: builder.query<Products[], string>({
      query: (product) => `products/search?q${product}`
    })
  }),
});

export const { useGetAllProductQuery, useGetProductQuery } = productApi;
