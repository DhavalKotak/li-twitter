import Head from "next/head"
import Link from "next/link"
import { Container, Button, Grid } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import GoogleIcon from "@mui/icons-material/Google"
import AuthStyles from "../styles/Auth.module.css"
import { AuthContext } from "../src/context/AuthContext"
import { useContext } from "react"
const Login = () => {
	const { signIn } = useContext(AuthContext)
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<Container>
				<Grid container alignItems="stretch" sx={{ height: "100vh" }}>
					<Grid item container xs={6} alignItems="center">
						<Grid item>
							<h2
								style={{
									fontSize: "4rem",
									color: "white",
								}}
							>
								Login
							</h2>
							<Button
								className={AuthStyles.auth_btn}
								color="success"
								variant="contained"
								fullWidth
								onClick={() => signIn("google")}
							>
								<GoogleIcon />
								&nbsp; Sign in with Google
							</Button>
							<Button
								className={AuthStyles.auth_btn}
								variant="contained"
								fullWidth
								onClick={() => signIn("github")}
							>
								<GitHubIcon />
								&nbsp; Sign in with Github
							</Button>
							<div>
								<h3>Don&apos;t have an account?</h3>
								<Link href="/" passHref>
									<Button
										className={AuthStyles.auth_btn}
										color="info"
										variant="outlined"
										fullWidth
									>
										Create An Account
									</Button>
								</Link>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Login
