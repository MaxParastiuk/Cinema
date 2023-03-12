import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "@/redux/feature/filmsSlice";

interface PaginProps {
	totalResult: string;
	currentPage: number;
	title: string;
}

const Pagination = ({ totalResult, currentPage, title }: PaginProps) => {
	const dispatch = useDispatch();
	const pages: number[] = [];
	createPages(pages, +totalResult, currentPage);

	return (
		<div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
			<div className='flex flex-1 justify-between sm:hidden'>
				<a
					href='#'
					className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
					Previous
				</a>
				<a
					href='#'
					className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
					Next
				</a>
			</div>
			<div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
				<div>
					<p className='text-sm text-gray-700'>
						<span className='font-medium'>{totalResult}</span> results
					</p>
				</div>
				<div>
					<nav
						className='isolate inline-flex -space-x-px rounded-md shadow-sm'
						aria-label='Pagination'>
						<a
							onClick={(e) =>
								dispatch(
									setCurrentPage(
										currentPage != 1 ? currentPage - 1 : currentPage
									)
								)
							}
							href={`${title}&page=${currentPage}`}
							className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
							<span className='sr-only'>Previous</span>
							<ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
						</a>
						{pages.map((page, index) => (
							<a
								key={index}
								href={`${title}&page=${currentPage}`}
								className={
									currentPage == page
										? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										: "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								}
								onClick={() => dispatch(setCurrentPage(page))}>
								{page}
							</a>
						))}

						<a
							onClick={() => dispatch(setCurrentPage(currentPage + 1))}
							href={`${title}&page=${currentPage}`}
							className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
							<span className='sr-only'>Next</span>
							<ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

function createPages(pages: number[], pagesCount: number, currentPage: number) {
	if (pagesCount > 10) {
		if (currentPage > 5) {
			for (let i = currentPage - 4; i <= currentPage + 5; i++) {
				pages.push(i);
				if (i == pagesCount) break;
			}
		} else {
			for (let i = 1; i <= 10; i++) {
				pages.push(i);
				if (i == pagesCount) break;
			}
		}
	} else {
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}
	}
}

export default Pagination;
