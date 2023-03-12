import { IFilm } from "@/interfaces/IFilm";
import Link from "next/link";
import { IListFilm } from "@/interfaces/IListFilm";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "@/redux/feature/favoriteSlice";

interface FilmProps {
	data: IFilm[];
}

export default function FilmItem({ data }: FilmProps) {
	const dispatch = useDispatch();
	return (
		<>
			<ul className='flex  min-[320px]:h-ful mt-20 my-gap  max-w-full  flex-wrap gap-y-14 gap-x-4'>
				{data.map((el, index) => (
					<li className='flex flex-col my-flex-basis' key={index}>
						<Link href={`/film/${el.imdbID}`}>
							<img
								className='min-[320px]:mx-auto'
								src={el.Poster}
								alt='poster'
							/>
							<div className='min-[320px]:text-center md:text-left my-2.5'>
								<p className='text-lg font-semibold'>{el.Title}</p>
								<p>{el.Type}</p>
								<p>{el.Year}</p>
							</div>
						</Link>
						<button
							onClick={() => dispatch(deleteFavorite(el))}
							type='button'
							className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
							X
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
