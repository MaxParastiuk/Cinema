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
				state.listFavorite.push({ ...payload, isFavorite: true });
			}
		},
		deleteFavorite: (state, { payload }) => {
			state.listFavorite = state.listFavorite.filter(
				(el) => el.imdbID !== payload.imdbID
			);
		},
	},
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
