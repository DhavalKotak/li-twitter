const postTweet = async (token, title, tweet, uid) => {
	let result
	await fetch("/api/tweet", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			token: token,
			title: title,
			content: tweet,
			uid: uid,
		}),
	}).then(res => {
		if (res.ok) result = true
		else result = false
	})
	return result
}
export default postTweet
