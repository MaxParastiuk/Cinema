import { createSlice } from "@reduxjs/toolkit";

const filmsSlice = createSlice({
	name: "films",
	initialState: {
		currentPage: 1,
	},
	reducers: {
		setCurrentPage: (state, { payload }) => {
			state.currentPage = payload;
		},
	},
});

export const { setCurrentPage } = filmsSlice.actions;

export default filmsSlice.reducer;
