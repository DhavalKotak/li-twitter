import prisma from "../../src/utils/prisma"
import { checkToken } from "./verifyToken"
export default async function handle(req, res) {
	const { token, uid } = req.body
	let result = checkToken(token)
	if (result) {
		const tweets = await prisma.user.findUnique({
			where: {
				id: uid,
			},
			select: {
				tweet: true,
			},
		})
		prisma.$disconnect()
		if (tweets) res.status(200).json({ data: tweets.tweet })
		else res.status(204).end(0)
	} else res.status(401).send("Unauthorised Access")
}
