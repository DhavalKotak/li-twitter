import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyAhPPfEVTDj72RiWQaAxDRIjUW7QQF05o4",
	authDomain: "li-twitter.firebaseapp.com",
	projectId: "li-twitter",
	storageBucket: "li-twitter.appspot.com",
	messagingSenderId: "1099508098592",
	appId: "1:1099508098592:web:7e2d98ddf2579944d43e45",
	measurementId: "G-SDDNF598CM",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export default app
