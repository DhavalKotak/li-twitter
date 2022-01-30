import Head from "next/head"
import { Container, Typography, Grid } from "@mui/material"
import AboutStyles from "../styles/About.module.css"
const About = () => {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<Typography variant="h2" gutterBottom className={AboutStyles.title}>
				About
			</Typography>
			<Container>
				<Typography variant="h6" gutterBottom>
					This is a simple next app where you can write and share
					tweets.
				</Typography>
				<Typography variant="h5" gutterBottom>
					Technologies Used:
				</Typography>
				<Grid container alignItems="center" spacing={3}>
					<Grid item className={AboutStyles.icon}>
						<a href="https://nextjs.org/">
							<i className="devicon-nextjs-original"></i>
						</a>
					</Grid>
					<Grid item sm={12} md={8}>
						<p>
							<h3>Next.js</h3> Next.js is a react framework for
							production that is used to build this application.
						</p>
					</Grid>
				</Grid>
				<Grid container alignItems="center" spacing={3}>
					<Grid item className={AboutStyles.icon}>
						<a href="https://reactjs.org/">
							<i className="devicon-react-original colored"></i>
						</a>
					</Grid>
					<Grid item sm={12} md={8}>
						<p>
							<h3>React.js</h3> React.js is the library on which
							the next.js framework is based on.
						</p>
					</Grid>
				</Grid>
				<Grid container alignItems="center" spacing={3}>
					<Grid item className={AboutStyles.icon}>
						<a href="https://firebase.google.com/">
							<i className="devicon-firebase-plain colored"></i>
						</a>
					</Grid>
					<Grid item sm={12} md={8}>
						<p>
							<h3>Firebase</h3> Firebase is used to provide
							authentication facilities like signing up with
							Google and Github Account and maintaining sessions.
						</p>
					</Grid>
				</Grid>
				<Grid container alignItems="center" spacing={3}>
					<Grid item className={AboutStyles.icon}>
						<a href="https://mui.com/">
							<i className="devicon-materialui-plain colored"></i>
						</a>
					</Grid>
					<Grid item sm={12} md={8}>
						<p>
							<h3>Material-UI</h3> Material-UI is used for
							desinging this website as it gives a lot of
							components that can be used with Next.
						</p>
					</Grid>
				</Grid>
				<Grid container alignItems="center" spacing={3}>
					<Grid item className={AboutStyles.icon}>
						<a href="https://postgresql.org/">
							<i className="devicon-postgresql-plain colored"></i>
						</a>
					</Grid>
					<Grid item sm={12} md={8}>
						<p>
							<h3>PostgreSQL</h3> PostgreSQL is a relational
							database management system that is used with Prisma
							ORM for storing user data
						</p>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
export default About
