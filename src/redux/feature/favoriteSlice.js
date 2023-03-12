import { createSlice } from "@reduxjs/toolkit";
import { IFilm } from "@/interfaces/IFilm";

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: {
		listFavorite: [],
	},
	reducers: {
		addFavorite: (state, { payload }) => {
			const isInFavorite = state.listFavorite.find(
				(el) => el.imdbID === payload.imdbID
			);
			if (!isInFavorite) {
				state.listFavorite.push(payload);
			}
		},
	},
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
