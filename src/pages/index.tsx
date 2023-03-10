import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import movie from "../../public/movie-theater.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Layout>
				<main className='h-screen bg-gray-500'>
					<div className='p-24 max-w-full px-4 sm:px-6 lg:px-8'>
						<div className='gap-5 flex flex-col  items-center justify-between'>
							<h1 className='drop-shadow xl:text-8xl lg:text-6xl md:text-5xl sm:text-3xl text-black'>
								Welcome to the cinema
							</h1>
							<h2 className=' xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl text-yellow-200'>
								find your cinema and enjoy
							</h2>
							<img className='w-80 h-80' src={movie.src} alt='movie' />
						</div>
					</div>
				</main>
			</Layout>
		</>
	);
}
