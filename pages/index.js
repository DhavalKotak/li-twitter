import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Grid, Container, Card, CardContent, Button } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import GoogleIcon from "@mui/icons-material/Google"
import logo from "../public/li-twitter.png"
import AuthStyles from "../styles/Auth.module.css"
import { AuthContext } from "../src/context/AuthContext"
import { useContext } from "react"

const Signup = () => {
	const { signUp } = useContext(AuthContext)

	return (
		<>
			<Head>
				<title>li-twitter</title>
			</Head>
			<Grid
				container
				justifyContent="center"
				alignItems="stretch"
				sx={{ height: "100vh" }}
			>
				<Grid
					className={AuthStyles.banner}
					item
					container
					md={6}
					alignItems="center"
					sx={{
						background: "#4c7aff",
						textAlign: "center",
					}}
				>
					<Grid item md={12}>
						<Image
							objectFit="contain"
							alt="li-twitter-logo"
							src={logo}
						/>
					</Grid>
				</Grid>
				<Grid
					item
					container
					sm={12}
					md={6}
					alignItems="center"
					justifyContent="center"
				>
					<Grid item md={12}>
						<Container>
							<h1
								style={{
									fontSize: "4rem",
									color: "white",
								}}
							>
								Let Out Your Ideas!
							</h1>
							<h2
								style={{
									fontSize: "3rem",
									color: "white",
								}}
							>
								Join{" "}
								<span style={{ color: "#4c7aff" }}>
									li-twitter
								</span>{" "}
								Today.
							</h2>
							<Card
								sx={{
									background: "rgba(0,0,0,0)",
									boxShadow: "none",
									maxWidth: 500,
									textAlign: "center",
								}}
							>
								<CardContent>
									<Container>
										<Button
											className={AuthStyles.auth_btn}
											color="success"
											variant="contained"
											fullWidth
											onClick={() => signUp("google")}
										>
											<GoogleIcon />
											&nbsp; Signup with Google
										</Button>
										<br />
										<Button
											className={AuthStyles.auth_btn}
											variant="contained"
											fullWidth
											onClick={() => signUp("github")}
										>
											<GitHubIcon />
											&nbsp; Signup with Github
										</Button>
										<small className={AuthStyles.small}>
											By signing up, you agree that you
											are super awesome and too cool for
											the average person.
										</small>
										<div>
											<h3
												className={
													AuthStyles.signin_head
												}
											>
												Already have an account?
											</h3>
											<Link href="/login" passHref>
												<Button
													className={
														AuthStyles.auth_btn
													}
													color="info"
													variant="outlined"
													fullWidth
												>
													Sign In
												</Button>
											</Link>
										</div>
									</Container>
								</CardContent>
							</Card>
						</Container>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}
export default Signup
