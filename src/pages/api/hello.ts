// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const API =
	"https://www.omdbapi.com/?i=tt3896198&apikey=d3756124&t=Batman&y=1989";
const API_KEY = "https://www.omdbapi.com/?i=tt3896198&apikey=d375612";

type Data = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ name: "John Doe" });
}
