import Link from "next/link";

export default function FilmItem() {
	return (
		<>
			<Link href={"/sdds"}>
				<div>
					<img src='#' alt='dsds' />
				</div>
				<p>Title</p>
				<p>Year</p>
				<p>Runtime</p>
				<p>Genre</p>
			</Link>
		</>
	);
}
