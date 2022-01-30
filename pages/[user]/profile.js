import Head from "next/head"
import { Grid, Container, Button, Typography } from "@mui/material"
import NavigationBar from "../../src/components/NavigationBar"
import { AuthContext } from "../../src/context/AuthContext"
import { useContext } from "react"
import withAuth from "../../src/utils/withAuth"
import ProfileStyles from "../../styles/Profile.module.css"
import Image from "next/image"
const Profile = () => {
	const { user, signout } = useContext(AuthContext)
	return (
		<>
			<Head>
				<title>Profile</title>
			</Head>
			<Container sx={{ height: "100vh" }}>
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					spacing={2}
				>
					<Grid item md={4} xs={2}>
						<NavigationBar />
					</Grid>
					<Grid
						item
						container
						md={8}
						xs={10}
						className={ProfileStyles.profileGrid}
					>
						<Grid item xs={12} lg={6}>
							<Typography variant="h5" gutterBottom>
								Username
							</Typography>
							<p className={ProfileStyles.value}>{user.name}</p>
							<Typography variant="h5" gutterBottom>
								Email
							</Typography>
							<p className={ProfileStyles.value}>{user.email}</p>
							<Button
								variant="contained"
								color="error"
								onClick={signout}
							>
								Sign Out
							</Button>
						</Grid>
						<Grid item xs={12} lg={6}>
							<Typography variant="h5" mb={2}>
								Profile Picture
							</Typography>
							{user.photoURL && (
								<Image
									className={ProfileStyles.image}
									src={user.photoURL}
									alt="profile picture"
									placeholder="profile picture"
									width={100}
									height={100}
								/>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
export default withAuth(Profile)
