import jwt from "jsonwebtoken"
const JWT_SECERET = process.env.JWT_SECERET
export default async function handler(req, res) {
	const token = req.body.token
	let result = checkToken(token)
	if (result) res.status(200).json(result)
	else res.status(401)
}
export const checkToken = token => {
	let result = jwt.verify(token, JWT_SECERET, (err, user) => {
		if (err) return false
		else return user
	})
	return result
}
