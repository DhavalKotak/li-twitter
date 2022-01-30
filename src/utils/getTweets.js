const getTweets = async (uid, token) => {
	let tweets
	await fetch("/api/getTweet", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			uid: uid,
			token: token,
		}),
	})
		.then(res => {
			if (res.status === 200) return res.json()
			else tweets = []
		})
		.then(data => {
			if (data) tweets = data.data
		})
	return tweets
}
export default getTweets
