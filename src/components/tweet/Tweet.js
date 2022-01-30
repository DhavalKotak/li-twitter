import { Card, CardContent, IconButton, Typography } from "@mui/material"
import TweetStyles from "../../../styles/Tweet.module.css"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import updateLikes from "../../utils/updateLikes"
const Tweet = props => {
	const [liked, setLiked] = useState(false)
	const [likes, setLikes] = useState(props.likes)
	const { user } = useContext(AuthContext)
	const handleLike = () => {
		let token = localStorage.getItem("token")
		if (liked) {
			let result = updateLikes(user.uid, props.id, token, "dislike")
			setLikes(--likes)
		} else {
			let result = updateLikes(user.uid, props.id, token, "like")
			setLikes(++likes)
		}
		setLiked(!liked)
	}
	useEffect(() => {
		if (props.likedBy) {
			props.likedBy.forEach(like => {
				if ((like.username = user.name)) setLiked(true)
			})
		}
	}, [props.likedBy, user.name])
	return (
		<>
			<Card className={TweetStyles.tweet_card}>
				<CardContent>
					<Typography
						gutterBottom
						component="div"
						className={TweetStyles.author}
					>
						<Image
							className={TweetStyles.image}
							src={props.img}
							alt="profile picture"
							placeholder="profile picture"
							width={50}
							height={50}
						/>
						&nbsp;{props.author}
					</Typography>

					<Typography gutterBottom variant="h6" component="div">
						{props.title}
					</Typography>

					<Typography
						gutterBottom
						variant="body2"
						className={TweetStyles.tweet_content}
					>
						{props.content}
					</Typography>

					{props.isFeed && (
						<Typography>
							<IconButton
								size="small"
								color="secondary"
								onClick={handleLike}
							>
								{liked ? (
									<FavoriteIcon />
								) : (
									<FavoriteBorderIcon />
								)}
							</IconButton>
							{likes}
						</Typography>
					)}
					<Typography
						variant="body2"
						className={TweetStyles.tweet_author}
					>
						Author: {props.email}
					</Typography>
					<Typography
						variant="body2"
						className={TweetStyles.tweet_date}
					>
						Posted at: {props.date} {props.time}
					</Typography>
				</CardContent>
			</Card>
		</>
	)
}
export default Tweet
