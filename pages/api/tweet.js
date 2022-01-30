import prisma from "../../src/utils/prisma"
import { checkToken } from "./verifyToken"
export default async function handle(req, res) {
	const { token, title, content, uid } = req.body
	let result = checkToken(token)
	if (result) {
		const tweet = await prisma.tweet.create({
			data: {
				authorID: uid,
				title: title,
				content: content,
			},
		})
		prisma.$disconnect()
		if (tweet) res.status(200).send(tweet)
		else res.status(204).end(0)
	} else res.status(401)
}
