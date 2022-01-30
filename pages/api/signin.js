import jwt from "jsonwebtoken"
const JWT_SECERET = process.env.JWT_SECERET
export default async function handler(req, res) {
	const username = req.body.name
	const token = jwt.sign({ user: username }, JWT_SECERET)
	res.status(200).json({ token: token })
}
