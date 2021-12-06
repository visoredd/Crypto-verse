import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "5af4ec9abemsh532dba7e2e545a3p19d38cjsnb0e1d0bd51b9",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url: string) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (coins) => createRequest(`/coins?limit=${coins}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
