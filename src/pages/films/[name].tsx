import FilmItem from "@/components/FilmItem";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { IListFilm } from "@/interfaces/IListFilm";
import { API_ALL_FILMS } from "../../constants/index";
import Pagination from "@/components/paginatation";

interface FilmsProps {
	data: {
		Search: IListFilm[];
		totalResults: string;
	};
}

export default function Films({ data }: FilmsProps) {
	console.log(data);
	const { Search, totalResults } = data;
	return (
		<>
			<ul className='flex mt-20 my-gap  mx-24 max-w-full px-4 sm:px-6 lg:px-8 flex-wrap gap-y-14 gap-x-4'>
				{Search.map((el, index) => (
					<li className='flex flex-col my-flex-basis ' key={index}>
						<img src={el.Poster} alt='poster' />
						<div className=''>
							<p>{el.Title}</p>
							<p>{el.Type}</p>
							<p>{el.Year}</p>
						</div>
					</li>
				))}
			</ul>
			<Pagination totalResult={totalResults} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps<{
	data: FilmsProps;
}> = async (context) => {
	const res = await fetch(API_ALL_FILMS + context.query.name);
	const data: FilmsProps = await res.json();

	return {
		props: {
			data,
		},
	};
};
