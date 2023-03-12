import FilmItem from "@/components/FilmItem";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { IListFilm } from "@/interfaces/IListFilm";
import { API_ALL_FILMS } from "../../constants/index";
import Pagination from "@/components/Paginatation";
import { useSelector } from "react-redux";
import Link from "next/link";
import ErrorSearch from "@/components/ErrorSearch";

interface FilmsProps {
	data: {
		Search: IListFilm[];
		totalResults: string;
	};
	query: { name: string };
}

export default function Films({ data, query }: FilmsProps) {
	const { Search, totalResults } = data;
	const currentPage = useSelector((state: any) => state.films.currentPage);
	const title = query.name?.split("&")[0];

	return (
		<>
			{Search ? (
				<>
					{" "}
					<ul className='flex mt-20 my-gap  mx-24 max-w-full px-4 sm:px-6 lg:px-8 flex-wrap gap-y-14 gap-x-4'>
						{Search.map((el, index) => (
							<li className='flex flex-col my-flex-basis ' key={index}>
								<Link href={`/film/${el.imdbID}`}>
									<img src={el.Poster} alt='poster' />
									<div className=''>
										<p>{el.Title}</p>
										<p>{el.Type}</p>
										<p>{el.Year}</p>
									</div>
								</Link>
							</li>
						))}
					</ul>
					<Pagination
						totalResult={totalResults}
						currentPage={currentPage}
						title={title}
					/>
				</>
			) : (
				<ErrorSearch></ErrorSearch>
			)}
		</>
	);
}

interface СontextProps {
	data: {
		Search: IListFilm[];
		totalResults: string;
	};
	query: { name: string };
}

export const getServerSideProps: GetServerSideProps<{
	data: FilmsProps;
}> = async ({ query }) => {
	const res = await fetch(API_ALL_FILMS + query.name);
	const data: FilmsProps = await res.json();

	return {
		props: {
			data,
			query,
		},
	};
};
