import prisma from "../../src/utils/prisma"
import { checkToken } from "./verifyToken"
export default async function handle(req, res) {
	const { uid, tweetId, token, operation } = req.body
	let user = checkToken(token)
	if (user) {
		if (operation === "like") {
			let result = await prisma.tweet.update({
				where: {
					id: tweetId,
				},
				data: {
					likes: {
						increment: 1,
					},
					likedBy: {
						connect: {
							id: uid,
						},
					},
				},
			})
			if (result) res.status(200).json(result)
		} else {
			let result = await prisma.tweet.update({
				where: {
					id: tweetId,
				},
				data: {
					likes: {
						decrement: 1,
					},
					likedBy: {
						disconnect: {
							id: uid,
						},
					},
				},
			})
			prisma.$disconnect()
			if (result) res.status(200).json(result)
			else res.status(204).end(0)
		}
	} else res.status(401).send("401: Unauthorised Access")
}
