import Head from "next/head"
import { Grid, Container } from "@mui/material"
import withAuth from "../../src/utils/withAuth"
import NavigationBar from "../../src/components/NavigationBar"
import TweetList from "../../src/components/tweet/TweetList"
const Tweets = () => {
	return (
		<>
			<Head>
				<title>Tweets</title>
			</Head>
			<Container sx={{ height: "100vh" }}>
				<Grid container spacing={2}>
					<Grid item md={4} xs={2}>
						<NavigationBar />
					</Grid>
					<Grid item md={8} xs={10}>
						<TweetList />
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
export default withAuth(Tweets)
