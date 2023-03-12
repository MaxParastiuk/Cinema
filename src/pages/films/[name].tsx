import { GetServerSideProps } from "next/types";
import { IListFilm } from "@/interfaces/IListFilm";
import { API_ALL_FILMS } from "../../constants/index";
import Pagination from "@/components/paginatation";
import { useSelector } from "react-redux";
import Link from "next/link";
import Error404 from "../404";
import Head from "next/head";
import Image from "next/image";

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
			<Head>
				<title>Films</title>
				<meta name='title' content={`Films ${title}`} />
			</Head>
			{Search ? (
				<>
					{" "}
					<ul className='flex justify-center  max-[640px]:mx-6 min-[320px]:h-ful mt-20 my-gap  mx-24 max-w-full flex-wrap gap-y-14 gap-x-4'>
						{Search.map((el, index) => (
							<li
								className='flex flex-col 2xl:my-flex-basis xl:my-flex-basis md:my-flex-basis-xl'
								key={index}>
								<Link href={`/film/${el.imdbID}`}>
									<Image
										width={300}
										height={444}
										src={el.Poster}
										alt='poster'
									/>
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
				<Error404 />
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
