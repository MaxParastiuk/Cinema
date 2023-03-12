import { IState } from "@/interfaces/IState";
import { useSelector } from "react-redux";
import FilmItem from "@/components/FilmItem";

const Favorite = () => {
	const favoriteFilms = useSelector(
		(state: IState) => state.favorite.listFavorite
	);

	return (
		<>
			<div className='min-h-full h-screen  mx-24 max-w-full px-4 sm:px-6 lg:px-8'>
				<h1 className="xl:text-6xl mt-10 lg:text-5xl md:text-4xl sm:text-2xl text-yellow-200'">
					My favorite films:
				</h1>
				<FilmItem data={favoriteFilms}></FilmItem>
			</div>
		</>
	);
};

export default Favorite;
