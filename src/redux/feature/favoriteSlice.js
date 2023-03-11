import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: {
		listFavorite: [],
	},
	reducers: {
		addFavorite: (state, { payload }) => {
			state.listFavorite = payload;
		},
	},
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
