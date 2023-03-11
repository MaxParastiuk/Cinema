import FilmItem from "@/components/FilmItem";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { IListFilm } from "@/interfaces/IListFilm";
import { API_ALL_FILMS } from "../../constants/index";

interface FilmsProps {
	data: {
		Search: IListFilm[];
	};
}

export default function Films({ data }: FilmsProps) {
	console.log(data);
	const { Search } = data;
	return (
		<>
			<ul>
				{Search.map((el) => (
					<h1>{el.Title}</h1>
				))}
			</ul>
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
