import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const withAuth = Component => {
	// eslint-disable-next-line
	return props => {
		const router = useRouter()
		const [verified, setVerified] = useState(false)
		useEffect(() => {
			const token = localStorage.getItem("token")
			if (!token) {
				console.log("no token")
				router.replace("/")
			} else {
				fetch("/api/verifyToken", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						token: token,
					}),
				})
					.then(res => res.json())
					.then(result => {
						if (result.user) {
							setVerified(true)
						} else {
							localStorage.removeItem("token")
							router.replace("/")
						}
					})
			}
			// eslint-disable-next-line
		}, [])

		if (verified) {
			return <Component {...props} />
		} else {
			return null
		}
	}
}
export default withAuth
