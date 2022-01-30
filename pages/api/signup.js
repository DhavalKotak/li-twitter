import prisma from "../../src/utils/prisma"
import jwt from "jsonwebtoken"
const JWT_SECERET = process.env.JWT_SECERET
export default async function handler(req, res) {
	const { uid, username, photoUrl, email } = req.body
	await prisma.user.create({
		data: {
			id: uid,
			username: username,
			avatar: photoUrl,
			email: email,
		},
	})
	prisma.$disconnect()
	const token = jwt.sign({ user: username }, JWT_SECERET)
	res.status(200).json({ token: token })
}
