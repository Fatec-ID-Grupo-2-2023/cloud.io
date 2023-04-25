import { Box, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { gapi } from 'gapi-script';
import * as React from 'react';
import { useEffect } from 'react';
import LoginButton from '../../components/LoginButton';
import "./style.scss";


function Copyright(props: any) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default function Login() {
	const clientId = "840694087672-q5jr4irk22t3ompetcsu4n9m0ods8ack.apps.googleusercontent.com"
	const apiKey = "AIzaSyApWKH5LH8FD5Y7DP4_5COYy46v96PAJIE"
	const scope = "https://www.googleapis.com/auth/drive"

	useEffect(() => {
		function start() {
			gapi.client.init({
				apiKey,
				clientId,
				scope
			})
		}
		gapi.load('client:auth2', start)
	}, [])
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};
	const handleLinkGoogle = () => {
		console.log("Login Google");
	};
	const handleLinkFacebook = () => {
		console.log("Login Facebook");
	};
	const handleLinkTwitter = () => {
		console.log("Login Twittter");
	}

	return (
		<Container component="main" id='login'>
			<Box id='wrapper-login'>
				<Box id='logo'	>
					<img
						src='src\assets\logo128x128.png'
						alt='cloud.io'
					/>
				</Box>
				<Typography sx={{ color: '#13F24B' }} component="h1" variant="h5">
					Cloud.io
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 10 }}>
					<Typography sx={{ color: '#C7C7C7' }} component="h1" variant="h5">
						Login
					</Typography>
					<TextField
						variant='filled'
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant='filled'
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Link sx={{ color: '#737373' }} href="#" variant="body2">
						Forgot?
					</Link>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 4, mb: 2, backgroundColor: '#9538F2', borderRadius: 10 }}
					>
						Sign In
					</Button>
					<Typography sx={{
						color: '#737373',
						marginTop: 2,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}} component="h1" variant="h6"
					>
						Or Login, with...</Typography>
					<Grid container id='grid'	>
						<Grid item id='grid-button'>
							<LoginButton />
						</Grid>
						{/* <Grid item id='grid-button'>
							<Button
								onClick={handleLinkFacebook}> <img alt='facebook' src='src\assets\facebook.svg' /></Button>
						</Grid>
						<Grid item id='grid-button'>
							<Button
								onClick={handleLinkTwitter}> <img alt='twitter' src='src\assets\twitter.svg' /></Button>
						</Grid> */}
					</Grid>
				</Box>
			</Box>
			<Typography sx={{ marginTop: 8, color: '#737373', display: 'flex', justifyContent: 'center' }}>
				<Link sx={{ color: '#737373' }} href="#" variant="body2">
					{"New to Cloud.io? Register"}
				</Link>
			</Typography>
		</Container >
	);
}
