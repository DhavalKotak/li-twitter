import Head from "next/head"
import { Container, Grid } from "@mui/material"
import withAuth from "../../src/utils/withAuth"
import NavigationBar from "../../src/components/NavigationBar"
import TweetPrompt from "../../src/components/tweet/TweetPrompt"
import Feed from "../../src/components/tweet/Feed"
const Home = () => {
	return (
		<>
			<Head>
				<title>Home / li-twitter</title>
			</Head>
			<Container sx={{ height: "100vh" }}>
				<Grid container spacing={2}>
					<Grid item md={4} xs={2}>
						<NavigationBar />
					</Grid>
					<Grid item md={8} xs={10}>
						<TweetPrompt />
						<Feed />
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
export default withAuth(Home)
