import { IFilm } from "@/interfaces/IFilm";
import Link from "next/link";
import { IListFilm } from "@/interfaces/IListFilm";

interface FilmProps {
	data: IFilm[];
}

export default function FilmItem({ data }: FilmProps) {
	return (
		<>
			<ul className='h-screen flex mt-20 my-gap  max-w-full flex-wrap gap-y-14 gap-x-4'>
				{data.map((el, index) => (
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
		</>
	);
}
