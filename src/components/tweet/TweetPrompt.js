import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Fab,
} from "@mui/material"
import { createRef, useContext, useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import SendIcon from "@mui/icons-material/Send"
import { AuthContext } from "../../context/AuthContext"
import postTweet from "../../utils/postTweet"
const TweetPrompt = () => {
	const titleRef = createRef()
	const tweetRef = createRef()
	const [open, setOpen] = useState(false)
	const { user } = useContext(AuthContext)
	const handleSubmit = async () => {
		let title = titleRef.current.value
		let tweet = tweetRef.current.value
		const token = localStorage.getItem("token")
		if (title && tweet) {
			let result = await postTweet(token, title, tweet, user.uid)
			if (!result) alert("Internal Server Error")
			else setOpen(false)
		}
	}
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<>
			<Fab
				color="primary"
				onClick={handleOpen}
				sx={{
					position: "sticky",
					zIndex: "2",
					top: theme => theme.spacing(2),
					right: theme => theme.spacing(2),
				}}
			>
				<EditIcon />
			</Fab>
			<Dialog open={open} onClose={handleClose} fullWidth>
				<DialogTitle>Write An Idea</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="title"
							label="Title"
							type="text"
							fullWidth
							variant="outlined"
							required
							inputRef={titleRef}
						/>
					</DialogContentText>
					<TextField
						margin="dense"
						id="tweet"
						label="Tweet"
						type="text"
						fullWidth
						multiline
						rows={4}
						variant="outlined"
						required
						inputRef={tweetRef}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						variant="contained"
						color="error"
						onClick={handleClose}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						<SendIcon />
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default TweetPrompt
