const updateLikes = async (uid, tweetId, token, operation) => {
	let result
	await fetch("/api/updateLikes", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			uid: uid,
			tweetId: tweetId,
			token: token,
			operation: operation,
		}),
	}).then(res => {
		if (res.ok) result = true
		else result = false
	})
	return result
}
export default updateLikes
