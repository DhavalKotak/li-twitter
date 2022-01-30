const getFeed = async token => {
	let feed
	await fetch("/api/feed", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			token: token,
		}),
	})
		.then(res => {
			if (res.status === 200) return res.json()
			feed = []
		})
		.then(data => {
			if (data) feed = data.data
		})
	return feed
}
export default getFeed
