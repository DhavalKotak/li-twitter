import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import getTweets from "../../utils/getTweets"
import Tweet from "./Tweet"
const TweetList = () => {
	const [list, setList] = useState()
	const { user } = useContext(AuthContext)
	const fetchList = async () => {
		const tweets = await getTweets(user.uid, localStorage.getItem("token"))
		if (tweets && tweets.length > 0) {
			setList(() => {
				return tweets.map((tweet, index) => (
					<Tweet
						key={index}
						isFeed={false}
						title={tweet.title}
						content={tweet.content}
						date={tweet.createdAt.substring(0, 10)}
						time={tweet.createdAt.substring(11, 19)}
						author={user.name}
						email={user.email}
						img={user.photoURL}
					/>
				))
			})
		}
	}
	useEffect(() => {
		fetchList()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return <>{list}</>
}

export default TweetList
