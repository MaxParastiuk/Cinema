import { createSlice } from "@reduxjs/toolkit";

const filmsSlice = createSlice({
	name: "films",
	initialState: {
		listFilms: [],
	},
	reducers: {
		addFilms: (state, { payload }) => {
			state.listFilms = payload;
		},
	},
});

export const { addFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
