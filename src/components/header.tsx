import { Disclosure, Menu, Transition } from "@headlessui/react";
import logo from "../../public/cinema-logo.png";
import SearchForm from "./searchForm";
import Image from "next/image";
import ActiveLink from "./activeLink";

const Header = () => {
	return (
		<>
			<div className='min-h-full '>
				<Disclosure as='nav' className='z-10 bg-gray-800'>
					<div className='mx-24 max-[640px]:mx-6 min-[320px]:py-6 max-w-full px-4 sm:px-6 lg:px-8'>
						<div className='flex min-[320px]:gap-y-5 lg:flex-row min-[320px]:flex-col h-full items-center justify-between'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<Image
										width={800}
										height={500}
										className='h-16 w-16'
										src={logo.src}
										alt='cinema-logo'
									/>
								</div>
								<div className='md:block'>
									<div className='ml-10 flex items-baseline space-x-4'>
										{/* <a
											className='text-white'
											href='/'
											// className={classNames(
											// 	item.current
											// 		? "bg-gray-900 text-white"
											// 		: "text-gray-300 hover:bg-gray-700 hover:text-white",
											// 	"rounded-md px-3 py-2 text-sm font-medium"
											// )}
											// aria-current={item.current ? "page" : undefined}
										></a> */}
										<ActiveLink to='/'>Home</ActiveLink>
										{/* <a className='text-white' href='/favorite'>
											Favorite
										</a> */}
										<ActiveLink to='/favorite'>Favorite</ActiveLink>
									</div>
								</div>
							</div>
							<SearchForm></SearchForm>
						</div>
					</div>

					<Disclosure.Panel className='md:hidden'>
						<div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
							<Disclosure.Button>Home</Disclosure.Button>
						</div>
					</Disclosure.Panel>
				</Disclosure>
			</div>
		</>
	);
};

export default Header;
