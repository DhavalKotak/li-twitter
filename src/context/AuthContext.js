import { createContext, useEffect, useState } from "react"
import {
	onAuthStateChanged,
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useRouter } from "next/router"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState("")
	const router = useRouter()
	useEffect(() => {
		let unsubscribe = onAuthStateChanged(auth, account => {
			if (account) {
				setUser({
					uid: account.uid,
					name: account.displayName.replace(/\s+/g, ""),
					photoURL: account.photoURL,
					email: account.email,
				})
				router.push(`/${account.displayName.replace(/\s+/g, "")}`)
			} else {
				setUser("")
			}
		})
		return unsubscribe
		// eslint-disable-next-line
	}, [])

	const signIn = method => {
		let provider
		if (method === "google") provider = new GoogleAuthProvider()
		else provider = new GithubAuthProvider()
		signInWithPopup(auth, provider)
			.then(async result => {
				let username = result.user.displayName.replace(/\s+/g, "")
				await fetch("/api/signin", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: username,
					}),
				})
					.then(res => {
						return res.json()
					})
					.then(data => {
						localStorage.setItem("token", data.token)
						router.push(`/${username}`)
					})
			})
			.catch(error => {
				console.log(error)
			})
	}
	const signUp = method => {
		let provider
		if (method === "google") provider = new GoogleAuthProvider()
		else provider = new GithubAuthProvider()
		signInWithPopup(auth, provider)
			.then(result => {
				let uid = result.user.uid
				let username = result.user.displayName.replace(/\s+/g, "")
				let photoURL = result.user.photoURL
				let email = result.user.email
				fetch("http://localhost:3000/api/signup", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						uid: uid,
						username: username,
						photoUrl: photoURL,
						email: email,
					}),
				})
					.then(res => {
						return res.json()
					})
					.then(data => {
						localStorage.setItem("token", data.token)
						router.push(`/${username}`)
					})
			})
			.catch(error => {
				console.log(error)
			})
	}
	const signout = () => {
		signOut(auth)
			.then(() => {
				localStorage.removeItem("token")
				window.location.replace("/")
			})
			.catch(error => {
				console.log(error)
			})
	}
	const value = {
		user,
		signUp,
		signIn,
		signout,
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
