import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getRooms, postRooms } from "./modules/modules";
export const dataApi = createApi({
  reducerPath: "dataApi/api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getRooms: builder.query<getRooms[], void>({
      query: () => "room/get-all-rooms",
    }),
    addRooms: builder.mutation<postRooms, postRooms>({
      query: (body: postRooms) => ({
        url: "room/add-room",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          address: body.address,
          name: body.name,
          description: body.description,
          price: body.price,
          places: body.places,
        },
      }),
    }),
  }),
});

export const { useAddRoomsMutation, useGetRoomsQuery } = dataApi;
