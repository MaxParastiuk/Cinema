import { Inter } from "next/font/google";
import movie from "../../public/movie-theater.svg";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Cinema | Home</title>
				<meta name='title' content='Cinema' />
			</Head>
			<main
				className='h-screen bg-[url("../../public/background.jpg")] 
			bg-no-repeat bg-cover mix-blend-darken	'>
				<div className='pt-60 max-w-full px-4 sm:px-6 lg:px-8'>
					<div className='gap-5 flex flex-col  items-center justify-between'>
						<h1 className=' z-10 drop-shadow xl:text-8xl lg:text-6xl md:text-5xl sm:text-3xl text-yellow-600'>
							Welcome to the cinema
						</h1>
						<h2 className='z-10 xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl text-white'>
							find your cinema and enjoy
						</h2>
					</div>
				</div>
			</main>
		</>
	);
}
