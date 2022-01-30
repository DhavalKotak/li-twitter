import prisma from "../../src/utils/prisma"
import { checkToken } from "./verifyToken"
export default async function handle(req, res) {
	const token = req.body.token
	let result = checkToken(token)
	if (result) {
		const posts = await prisma.tweet.findMany({
			orderBy: [
				{
					createdAt: "desc",
				},
			],
			include: {
				author: true,
				likedBy: true,
			},
		})
		prisma.$disconnect()
		if (posts) res.status(200).json({ data: posts })
		else res.status(204).end(0)
	} else res.status(401).send("401: Unauthorised Access")
}
