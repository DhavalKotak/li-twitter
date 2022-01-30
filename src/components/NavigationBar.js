import NavStyles from "../../styles/Nav.module.css"
import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Button,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import TagIcon from "@mui/icons-material/Tag"
import InfoIcon from "@mui/icons-material/Info"

import { useRouter } from "next/router"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const NavigationBar = () => {
	const { user } = useContext(AuthContext)
	const router = useRouter()
	const handleClick = url => {
		router.push(url)
	}
	return (
		<>
			<List
				className={NavStyles.list}
				sx={{
					top: theme => theme.spacing(2),
					right: theme => theme.spacing(2),
				}}
			>
				<ListItem>
					<Button
						className={NavStyles.nav_buttons}
						onClick={() => handleClick(`/${user.name}`)}
					>
						<ListItemAvatar>
							<Avatar className={NavStyles.avatar}>
								<HomeIcon fontSize="large" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary="Home"
							className={NavStyles.list_item_text}
						/>
					</Button>
				</ListItem>
				<ListItem>
					<Button
						className={NavStyles.nav_buttons}
						onClick={() => handleClick(`/${user.name}/profile`)}
					>
						<ListItemAvatar>
							<Avatar className={NavStyles.avatar}>
								<AccountCircleIcon fontSize="large" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary="Profile"
							className={NavStyles.list_item_text}
						/>
					</Button>
				</ListItem>
				<ListItem>
					<Button
						className={NavStyles.nav_buttons}
						onClick={() => handleClick(`/${user.name}/tweets`)}
					>
						<ListItemAvatar>
							<Avatar className={NavStyles.avatar}>
								<TagIcon fontSize="large" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary="Tweets"
							className={NavStyles.list_item_text}
						/>
					</Button>
				</ListItem>
				<ListItem>
					<Button
						className={NavStyles.nav_buttons}
						onClick={() => handleClick("/about")}
					>
						<ListItemAvatar>
							<Avatar className={NavStyles.avatar}>
								<InfoIcon fontSize="large" />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary="About"
							className={NavStyles.list_item_text}
						/>
					</Button>
				</ListItem>
			</List>
		</>
	)
}
export default NavigationBar
