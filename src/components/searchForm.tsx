import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function SearchForm() {
	const router = useRouter();
	const [searchInput, setSearchInput] = useState("");

	const onSerch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/films/${searchInput}`);
	};

	return (
		<form className='w-2/6' onSubmit={(e) => onSerch(e)}>
			<label
				htmlFor='default-search'
				className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
				Search
			</label>
			<div className='relative'>
				<input
					type='search'
					id='default-search'
					className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='name of the film'
					required
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button
					type='submit'
					className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Search
				</button>
			</div>
		</form>
	);
}
