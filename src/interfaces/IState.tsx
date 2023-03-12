import { IFilm } from "./IFilm";
import { IListFilm } from "./IListFilm";

export interface IState {
	films: {
		currentPage: number;
	};
	favorite: {
		listFavorite: IFilm[];
	};
}
