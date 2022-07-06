// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/ability/",
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => "pokemon",
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
