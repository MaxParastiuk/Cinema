import { GET_BY_ID_FILM } from "@/constants";
import { IFilm } from "@/interfaces/IFilm";
import { GetServerSideProps } from "next/types";
import FilmItem from "@/components/FilmItem";
import { useDispatch } from "react-redux";
import { addFavorite } from "@/redux/feature/favoriteSlice";
import Head from "next/head";

interface FilmProps {
	data: IFilm;
}

const Film = ({ data }: FilmProps) => {
	const { Title, Poster, Year, Runtime, Genre, Plot, imdbRating, Actors } =
		data;

	const dispatch = useDispatch();
	return (
		<>
			<Head>
				<title>Film</title>
				<meta name='title' content={`Film ${Title}`} />
			</Head>
			<div className=' xl:h-screen min-[320px]:flex-col max-[640px]:mx-6 min-[320px]:h-full mx-24 gap-x-14  xl:flex-row px-4 sm:px-6 lg:px-8  flex  m-16  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
				<img
					className='md:w-8/12 max-w-md sm:self-center xl:self-auto h-4/6 p-8 rounded-t-lg'
					src={Poster}
					alt='product image'
				/>

				<div
					className='p-8 flex flex-col  gap-y-6
			'>
					<div className='min-[320px]:text-center xl:text-left'>
						<h5 className=' text-3xl max-[640px]:text-2xl  font-semibold tracking-tight text-gray-900 dark:text-white'>
							{Title}
						</h5>
						<p className='text-2xl max-[640px]:text-xl my-2'>
							Year: <span className='text-gray-600'>{Year}</span>
						</p>
						<p className='text-2xl max-[640px]:text-xl my-2'>
							Runtime: <span className='text-gray-600'>{Runtime}</span>
						</p>
						<p className='text-2xl max-[640px]:text-xl my-2'>
							Genre: <span className='text-gray-600'>{Genre}</span>
						</p>
						<p className='text-2xl max-[640px]:text-xl my-2'>
							Actors: <span className='text-gray-600'>{Actors}</span>{" "}
						</p>
						<p className='text-2xl max-[640px]:text-xl my-2'>
							Plot: <span className='text-gray-600'>{Plot}</span>
						</p>
					</div>

					<div className='flex min-[320px]:gap-y-7 items-center xl:flex-row min-[320px]:flex-col 2xl:flex-row justify-between  '>
						<span className='max-[640px]:text-xl  text-3xl font-bold text-gray-900 dark:text-white'>
							IMDB Rating: {imdbRating}
						</span>
						<button
							onClick={() => dispatch(addFavorite(data))}
							className='focus:bg-green-500 min-[320px]:w-8/12 sm:text-2xl max-[640px]:text-xl xl:text-lg xl:w-4/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Add to favorite
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps<{
	data: FilmProps;
}> = async ({ query }) => {
	const res = await fetch(GET_BY_ID_FILM + query.title);
	const data: FilmProps = await res.json();

	return {
		props: {
			data,
		},
	};
};

export default Film;
