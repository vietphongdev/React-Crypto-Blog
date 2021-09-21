import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { REACT_APP_RAPIDAPI_KEY, REACT_APP_NEWS_RAPIDAPI_HOST, REACT_APP_NEWS_API_URL } =
  process.env;

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': REACT_APP_NEWS_RAPIDAPI_HOST,
};

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => ({
        headers: cryptoNewsHeaders,
        url: '/news',
        params: {
          safeSearch: 'Off',
          textFormat: 'Raw',
          freshness: 'Day',
          q: newsCategory,
          count: count,
        },
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
