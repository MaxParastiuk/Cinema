const ErrorSearch = () => {
	return (
		<div className='h-screen bg-gray-500'>
			<div className='p-24 max-w-full px-4 sm:px-6 lg:px-8'>
				<div className='gap-5 flex flex-col  items-center justify-between'>
					<h1 className='drop-shadow xl:text-8xl lg:text-6xl md:text-5xl sm:text-3xl text-red-400'>
						Somthing went wrong....
					</h1>
					<h2 className=' xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl text-red-400'>
						Incorrect movie title
					</h2>
				</div>
			</div>
		</div>
	);
};

export default ErrorSearch;
