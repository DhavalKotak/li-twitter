import { useEffect, useState } from "react"
import getFeed from "../../utils/getFeed"
import Tweet from "./Tweet"
const Feed = () => {
	const [list, setList] = useState()
	const fetchList = async () => {
		const posts = await getFeed(localStorage.getItem("token"))
		if (posts.length > 0) {
			setList(() => {
				return posts.map((post, index) => (
					<Tweet
						key={index}
						id={post.id}
						isFeed={true}
						likes={post.likes}
						title={post.title}
						content={post.content}
						date={post.createdAt.substring(0, 10)}
						time={post.createdAt.substring(11, 19)}
						author={post.author.username}
						email={post.author.email}
						img={post.author.avatar}
						likedBy={post.likedBy}
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

export default Feed
