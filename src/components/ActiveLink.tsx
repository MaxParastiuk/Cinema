import Link from "next/link";
import { useRouter } from "next/router";

interface LinkProps {
	children: string;
	to: string;
}

const ActiveLink = ({ children, to }: LinkProps) => {
	const router = useRouter();
	const isMatch = router.pathname === to;
	return (
		<Link
			href={to}
			className={
				isMatch
					? "text-lg text-red-500 hover:bg-blue-800 rounded-md p-3 duration-500"
					: "text-lg text-white hover:bg-blue-800 rounded-md p-3 duration-500"
			}>
			{children}
		</Link>
	);
};

export default ActiveLink;
